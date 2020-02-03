import { CloseIcon } from '@autoguru/icons';
import { wrapEvent } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
	ComponentPropsWithoutRef,
	Dispatch,
	FunctionComponent,
	MutableRefObject,
	ReactElement,
	Reducer,
	Ref,
	useCallback,
	useReducer,
	useRef,
	useState,
} from 'react';
import { createPortal } from 'react-dom';

import { Button, EButtonSize, Icon, useMedia } from '../..';
import { useId } from '../../utils/useId';
import { usingPositioner } from '../Positioner';
import { EAlignment } from '../Positioner/alignment';
import { TextInput } from '../TextInput';
import { Text } from '../Typography';
import styles from './AutoSuggest.scss';
import { useLayoutSuggestionVisible } from './useLayoutSuggestionVisible';

export interface AutoSuggestValue<PayloadType> {
	text: string;
	payload: PayloadType | null;
	skip?: boolean;
}

export type AutoSuggestItemRenderer<PayloadType> = (props: {
	value: AutoSuggestValue<PayloadType>;
	highlight: boolean;
	suggestions: Array<AutoSuggestValue<PayloadType>>;
}) => ReactElement;

interface State {
	previewText: string | null;
	highlightIndex: number;
	isFlyoutOpen: boolean;
}

enum ActionTypes {
	INPUT_CHANGE,
	INPUT_ESCAPE,
	INPUT_ENTER,
	INPUT_FOCUS,
	INPUT_BLUR,
	INPUT_ARROW_DOWN,
	INPUT_ARROW_UP,
	FLYOUT_CLOSE,
	SUGGESTION_MOUSE_ENTER,
	SUGGESTION_MOUSE_CLICK,
}

type Actions =
	| { type: ActionTypes.INPUT_CHANGE }
	| { type: ActionTypes.INPUT_ESCAPE }
	| { type: ActionTypes.INPUT_ENTER }
	| { type: ActionTypes.INPUT_FOCUS }
	| { type: ActionTypes.INPUT_BLUR }
	| { type: ActionTypes.INPUT_ARROW_DOWN }
	| { type: ActionTypes.INPUT_ARROW_UP }
	| { type: ActionTypes.FLYOUT_CLOSE }
	| { type: ActionTypes.SUGGESTION_MOUSE_ENTER; index: number }
	| { type: ActionTypes.SUGGESTION_MOUSE_CLICK };

interface Props<PayloadType>
	extends Omit<
		ComponentPropsWithoutRef<typeof TextInput>,
		'onChange' | 'value' | 'type'
	> {
	autoFocus?: boolean;
	value: AutoSuggestValue<PayloadType>;
	suggestions: Array<AutoSuggestValue<PayloadType>>;

	itemRenderer?: AutoSuggestItemRenderer<PayloadType>;

	onChange?(value: AutoSuggestValue<PayloadType>): void;
}

export const AutoSuggest = <PayloadType extends unknown>({
	autoFocus = false,
	suggestions,
	value,
	onChange: incomingOnChange,
	itemRenderer = defaultItemRenderer,
	onBlur: incomingOnBlur,
	onFocus: incomingOnFocus,
	onKeyDown,
	onClick,
	...textInputProps
}: Props<PayloadType>): ReturnType<FunctionComponent<Props<PayloadType>>> => {
	const [isDesktop] = useMedia(['desktop'], false);
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const props = {
		suggestions,
		value,
		onChange: value => {
			if (
				typeof value.payload !== 'undefined' &&
				value.payload !== null
			) {
				setIsFocused(false);
			}

			incomingOnChange(value);
		},
		itemRenderer,
		onKeyDown,
		onClick,
		onFocus: wrapEvent(() => setIsFocused(true), incomingOnFocus),
		onBlur: wrapEvent(() => setIsFocused(false), incomingOnBlur),
		...textInputProps,
	};

	const closeModal = useCallback(() => setIsFocused(false), [setIsFocused]);

	return !isDesktop && isFocused ? (
		createPortal(
			<div className={styles.fullScreenRoot}>
				<AutoSuggestInput {...props} autoFocus inlineOptions />
				<Button
					minimal
					rounded
					size={EButtonSize.Medium}
					onClick={closeModal}>
					<Icon icon={CloseIcon} />
				</Button>
			</div>,
			document.body,
		)
	) : (
		<AutoSuggestInput {...props} autoFocus={autoFocus} />
	);
};

interface AutoSuggestInputProps<PayloadType extends unknown>
	extends Props<PayloadType> {
	inlineOptions?: boolean;
}

const AutoSuggestInput = <PayloadType extends unknown>({
	inlineOptions = false,
	autoFocus,
	suggestions,
	value,
	onChange,
	itemRenderer = defaultItemRenderer,
	onBlur,
	onFocus,
	onKeyDown,
	onClick,
	...textInputProps
}: AutoSuggestInputProps<PayloadType>): ReturnType<FunctionComponent<
	AutoSuggestInputProps<PayloadType>
>> => {
	const triggerRef = useRef<HTMLDivElement>();
	const highlightRef = useRef<HTMLLIElement>();
	const suggestionListRef = useRef<HTMLUListElement>();

	const suggestionListId = useId();

	const reducer: Reducer<State, Actions> = useCallback(
		(prevState, action) => {
			switch (action.type) {
				default:
				case ActionTypes.INPUT_CHANGE: {
					return {
						isFlyoutOpen: true,
						highlightIndex: -1,
						previewText: null,
					};
				}

				case ActionTypes.FLYOUT_CLOSE:
				case ActionTypes.SUGGESTION_MOUSE_CLICK:
				case ActionTypes.INPUT_ESCAPE:
				case ActionTypes.INPUT_BLUR: {
					return {
						isFlyoutOpen: false,
						highlightIndex: -1,
						previewText: null,
					};
				}

				case ActionTypes.INPUT_FOCUS: {
					return {
						...prevState,
						isFlyoutOpen: suggestions.length > -1,
					};
				}

				case ActionTypes.INPUT_ARROW_DOWN: {
					const nextIndex = getNextIndex(
						1,
						prevState.highlightIndex,
						suggestions,
					);
					return {
						isFlyoutOpen: true,
						highlightIndex: nextIndex,
						previewText:
							nextIndex > -1 ? suggestions[nextIndex].text : null,
					};
				}

				case ActionTypes.INPUT_ARROW_UP: {
					const firstIndex = getNextIndex(1, -1, suggestions);

					if (prevState.highlightIndex === firstIndex) {
						return {
							isFlyoutOpen: true,
							highlightIndex: -1,
							previewText: null,
						};
					}

					const nextIndex = getNextIndex(
						-1,
						prevState.highlightIndex,
						suggestions,
					);

					return {
						isFlyoutOpen: true,
						highlightIndex: nextIndex,
						previewText:
							nextIndex > -1 ? suggestions[nextIndex].text : null,
					};
				}

				case ActionTypes.SUGGESTION_MOUSE_ENTER: {
					return {
						...prevState,
						highlightIndex: action.index,
					};
				}

				case ActionTypes.INPUT_ENTER: {
					if (prevState.highlightIndex > -1) {
						return {
							highlightIndex: -1,
							previewText: null,
							isFlyoutOpen: false,
						};
					}

					return prevState;
				}
			}
		},
		[suggestions],
	);

	const [state, dispatch] = useReducer<Reducer<State, Actions>>(reducer, {
		highlightIndex: -1,
		previewText: null,
		isFlyoutOpen: false,
	});

	const shouldOpenFlyout = suggestions.length > 0 && state.isFlyoutOpen;

	useLayoutSuggestionVisible(
		state.highlightIndex,
		highlightRef,
		suggestionListRef,
	);

	return (
		<div
			role="combobox"
			aria-haspopup="listbox"
			aria-expanded={shouldOpenFlyout}
			aria-owns={shouldOpenFlyout ? suggestionListId : void 0}
			aria-label={textInputProps.placeholder}>
			<TextInput
				autoFocus={autoFocus}
				wrapperRef={triggerRef}
				{...textInputProps}
				aria-autocomplete="list"
				aria-controls={shouldOpenFlyout ? suggestionListId : void 0}
				aria-activedescendant={
					state.highlightIndex > -1
						? getSuggestionId(
								suggestionListId,
								state.highlightIndex,
						  )
						: void 0
				}
				value={state.previewText ?? value?.text}
				onChange={event => {
					dispatch({ type: ActionTypes.INPUT_CHANGE });
					if (typeof onChange === 'function')
						onChange({ text: event.target.value, payload: void 0 });
				}}
				onFocus={wrapEvent(
					() => dispatch({ type: ActionTypes.INPUT_FOCUS }),
					onFocus,
				)}
				onBlur={wrapEvent(() => {
					if (
						state.highlightIndex > -1 &&
						/*
						Cheap trick to check if an arrow or click was used or not. We only _commit_ if a click or arrow
						 */
						state.previewText ===
							suggestions[state.highlightIndex].text
					) {
						if (typeof onChange === 'function')
							onChange(suggestions[state.highlightIndex]);
					}

					dispatch({ type: ActionTypes.INPUT_BLUR });
				}, onBlur)}
				onKeyDown={wrapEvent(event => {
					// eslint-disable-next-line default-case
					switch (event.key) {
						case 'ArrowUp':
						case 'ArrowDown': {
							event.preventDefault();
							dispatch({
								type:
									event.key === 'ArrowDown'
										? ActionTypes.INPUT_ARROW_DOWN
										: ActionTypes.INPUT_ARROW_UP,
							});
							return;
						}

						case 'Enter': {
							if (state.highlightIndex > -1) {
								event.preventDefault();
								if (typeof onChange === 'function')
									onChange(suggestions[state.highlightIndex]);
							}

							dispatch({ type: ActionTypes.INPUT_ENTER });
							return;
						}

						case 'Escape': {
							dispatch({ type: ActionTypes.INPUT_ESCAPE });
						}
					}
				}, onKeyDown)}
			/>

			{inlineOptions ? (
				<SuggestionsList<PayloadType>
					suggestionListRef={suggestionListRef}
					suggestionListId={suggestionListId}
					placeholder={textInputProps.placeholder}
					highlightIndex={state.highlightIndex}
					suggestions={suggestions}
					highlightRef={highlightRef}
					itemRenderer={itemRenderer}
					className={styles.inlineOptions}
					dispatch={dispatch}
					onChange={onChange}
				/>
			) : (
				<SuggestionListFlyout
					triggerRef={triggerRef}
					alignment={EAlignment.BOTTOM}
					isOpen={shouldOpenFlyout}
					triggerOffset={4}
					onRequestClose={() => {
						dispatch({
							type: ActionTypes.FLYOUT_CLOSE,
						});
					}}>
					<SuggestionsList<PayloadType>
						suggestionListRef={suggestionListRef}
						suggestionListId={suggestionListId}
						placeholder={textInputProps.placeholder}
						highlightIndex={state.highlightIndex}
						suggestions={suggestions}
						highlightRef={highlightRef}
						itemRenderer={itemRenderer}
						dispatch={dispatch}
						onChange={onChange}
					/>
				</SuggestionListFlyout>
			)}
		</div>
	);
};

interface SuggestionProps<PayloadType>
	extends Pick<
		Props<PayloadType>,
		'suggestions' | 'itemRenderer' | 'onChange'
	> {
	className?: string;
	suggestionListId: string;
	placeholder: string;
	highlightIndex: number;
	dispatch: Dispatch<Actions>;
	highlightRef: MutableRefObject<HTMLLIElement>;
	suggestionListRef: Ref<HTMLUListElement>;
}

const SuggestionsList = <PayloadType extends unknown>({
	className = '',
	suggestionListId,
	placeholder,
	highlightIndex,
	suggestions,
	highlightRef,
	itemRenderer,
	onChange,
	dispatch,
	// TODO: For now the ref is passed as a prop, as opposed to using forwardRef
	suggestionListRef,
}: SuggestionProps<PayloadType>) => (
	<ul
		ref={suggestionListRef}
		className={clsx(styles.suggestionList, className)}
		id={suggestionListId}
		aria-label={placeholder}
		role="listbox">
		<div style={{ height: 'var(--global--space--1)' }} />
		{suggestions.map((suggestion, idx) => {
			const highlight = highlightIndex === idx;

			return (
				<li
					key={suggestion.text.concat(String(idx))}
					ref={highlight ? highlightRef : void 0}
					id={getSuggestionId(suggestionListId, idx)}
					role="option"
					aria-selected={highlight}
					aria-label={suggestion.text}
					onMouseDown={event =>
						/* This is so a blur doesnt fire from the input when you click */
						event.preventDefault()
					}
					onMouseMove={() => {
						if (suggestion.skip) return;

						/*
					This has to be mouse move, so if you're hovering an item, and then arrow keys, we =
					dont want yo trigger a mouse enter and highlight it instead
					 */
						dispatch({
							type: ActionTypes.SUGGESTION_MOUSE_ENTER,
							index: idx,
						});
					}}
					onClick={() => {
						if (suggestion.skip) return;

						if (typeof onChange === 'function')
							onChange(suggestion);

						dispatch({
							type: ActionTypes.SUGGESTION_MOUSE_CLICK,
						});
					}}>
					{itemRenderer({
						suggestions,
						highlight,
						value: suggestion,
					})}
				</li>
			);
		})}
		<div style={{ height: 'var(--global--space--1)' }} />
	</ul>
);

const getSuggestionId = (id: string, index: number) => `${id}-option-${index}`;

const SuggestionListFlyout = usingPositioner(({ triggerRect, children }) => (
	<div
		className={styles.flyout}
		style={{ width: triggerRect?.width }}
		onMouseDown={event => event.preventDefault()}>
		{children}
	</div>
));

const defaultItemRenderer = <PayloadType extends unknown>({
	value,
	highlight,
}: Parameters<AutoSuggestItemRenderer<PayloadType>>[0]) => (
	<div
		className={clsx(styles.suggestion, {
			[styles.suggestionHighlight]: highlight,
		})}>
		<Text is="span">{value.text}</Text>
	</div>
);

const getNextIndex = <
	PayloadType extends unknown,
	Value extends AutoSuggestValue<PayloadType>
>(
	direction: 1 | -1,
	currentIndex: number,
	suggestions: Value[],
): number => {
	const maxIndex = suggestions.length - 1;

	let itter = -1;
	let returnIdx: number = null;
	let shouldSkip: boolean;

	do {
		++itter;

		const maybeNextIdx =
			((returnIdx === null ? currentIndex : returnIdx) + direction) | 0;

		if (maybeNextIdx < 0) {
			returnIdx = maybeNextIdx > maxIndex ? 0 : maxIndex;
		} else {
			returnIdx = maybeNextIdx > maxIndex ? 0 : maybeNextIdx;
		}

		shouldSkip = suggestions[returnIdx].skip;
	} while (shouldSkip && itter <= maxIndex);

	return itter > maxIndex ? -1 : returnIdx;
};
