import { ChevronDownIcon, CloseIcon } from '@autoguru/icons';
import { wrapEvent } from '@autoguru/utilities';
import clsx from 'clsx';
import * as React from 'react';
import {
	ComponentPropsWithoutRef,
	Dispatch,
	forwardRef,
	FunctionComponent,
	ReactElement,
	Reducer,
	Ref,
	useCallback,
	useEffect,
	useMemo,
	useReducer,
	useRef,
	useState,
} from 'react';
import { useStyles } from 'react-treat';

import { useMedia } from '../../hooks/useMedia';
import { setRef, useId } from '../../utils';
import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Portal } from '../Portal';
import { Positioner } from '../Positioner';
import { EAlignment } from '../Positioner/alignment';
import { withEnhancedInput } from '../private/InputBase';
import * as selectStyleRefs from '../SelectInput/SelectInput.treat';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import * as styleRefs from './AutoSuggest.treat';
import { useLayoutSuggestionVisible } from './useLayoutSuggestionVisible';

export interface AutoSuggestValue<PayloadType> {
	text: string;
	payload: PayloadType | null | undefined;
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

type Suggestions<PayloadType> = Array<AutoSuggestValue<PayloadType>>;

export interface Props<PayloadType>
	extends Omit<
		ComponentPropsWithoutRef<typeof TextInput>,
		'onChange' | 'value' | 'type'
	> {
	autoFocus?: boolean;
	autoWidth?: boolean;
	value: AutoSuggestValue<PayloadType> | null;
	suggestions: Suggestions<PayloadType>;

	itemRenderer?: AutoSuggestItemRenderer<PayloadType>;

	onChange?(value: AutoSuggestValue<PayloadType>): void;
}

interface AutoSuggestInputProps<PayloadType extends unknown>
	extends Props<PayloadType> {
	inlineOptions?: boolean;
}

interface AutoSuggestFullscreenInputProps<PayloadType extends unknown>
	extends AutoSuggestInputProps<PayloadType> {
	closeModal(): void;
}

const inputReducerFactory = <T extends Suggestions<unknown>>(
	suggestions: T,
): Reducer<State, Actions> => (prevState, action) => {
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
};

export const AutoSuggest = forwardRef(function AutoSuggest(
	{
		autoFocus = false,
		autoWidth = false,
		suggestions,
		value,
		onChange: incomingOnChange,
		itemRenderer = defaultItemRenderer,
		onBlur,
		onFocus: incomingOnFocus,
		onKeyDown,
		onClick,
		...textInputProps
	},
	ref,
) {
	const [isDesktop] = useMedia(['desktop'], false);
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const props = {
		suggestions,
		value,
		onChange: (value) => {
			if (
				typeof value.payload !== 'undefined' &&
				value.payload !== null
			) {
				setIsFocused(false);
			}

			if (typeof incomingOnChange === 'function') incomingOnChange(value);
		},
		itemRenderer,
		onKeyDown,
		onClick,
		onFocus: wrapEvent(() => setIsFocused(true), incomingOnFocus),
		onBlur,
		...textInputProps,
	};

	const closeModal = useCallback(() => setIsFocused(false), [setIsFocused]);

	return !isDesktop && isFocused ? (
		<AutoSuggestFullscreenInput
			{...props}
			inlineOptions
			autoFocus={autoFocus}
			closeModal={closeModal}
		/>
	) : (
		<AutoSuggestInput
			ref={ref}
			{...props}
			autoFocus={autoFocus}
			autoWidth={autoWidth}
		/>
	);
}) as <PayloadType extends unknown>(
	p: Props<PayloadType> & { ref?: Ref<HTMLInputElement> },
) => ReactElement;

const AutoSuggestFullscreenInput = forwardRef(
	function AutoSuggestFullscreenInput({ closeModal, ...props }, ref) {
		const styles = useStyles(styleRefs);
		const [showPortal, setShowPortal] = useState<boolean>(false);

		useEffect(() => {
			document.documentElement.style.position = 'fixed';
			document.documentElement.style.overflow = 'hidden';
			document.documentElement.style.maxHeight = '100%';

			return () => {
				document.documentElement.style.position = '';
				document.documentElement.style.overflow = '';
				document.documentElement.style.maxHeight = '';
			};
		}, []);

		useEffect(() => {
			const cb = requestAnimationFrame(() => setShowPortal(true));

			return () => {
				cancelAnimationFrame(cb);
			};
		}, [setShowPortal]);

		return showPortal ? (
			<Portal>
				<div className={styles.fullScreenRoot}>
					<AutoSuggestInput ref={ref} {...props} inlineOptions />
					<Button minimal rounded size="medium" onClick={closeModal}>
						<Icon icon={CloseIcon} />
					</Button>
				</div>
			</Portal>
		) : null;
	},
) as <PayloadType extends unknown>(
	p: AutoSuggestFullscreenInputProps<PayloadType> & {
		ref?: Ref<HTMLInputElement>;
	},
) => ReactElement | null;

const AutoSuggestInput = forwardRef(function AutoSuggestInput(
	{
		inlineOptions = false,
		autoFocus,
		autoWidth,
		suggestions,
		value,
		onChange,
		itemRenderer = defaultItemRenderer,
		onBlur,
		onFocus,
		onKeyDown,
		onClick,
		...textInputProps
	},
	ref,
) {
	const styles = useStyles(styleRefs);
	const triggerRef = useRef<HTMLDivElement>(null);
	const highlightRef = useRef<HTMLLIElement>(null);
	const suggestionListRef = useRef<HTMLUListElement>(null);

	const suggestionListId = useId();

	// TODO: This'll re-paint as suggestions generally change often, move this to a Ref or something similar.
	const reducer: Reducer<State, Actions> = useMemo(
		() => inputReducerFactory(suggestions),
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
		<Box
			role="combobox"
			aria-label={textInputProps.placeholder}
			aria-expanded={shouldOpenFlyout}
			aria-owns={suggestionListId!}
			aria-haspopup="listbox"
			width="full"
		>
			<AutoSuggestInputPrimitive
				autoFocus={autoFocus}
				wrapperRef={triggerRef}
				{...textInputProps}
				ref={ref}
				aria-autocomplete="list"
				aria-controls={suggestionListId!}
				aria-activedescendant={
					state.highlightIndex > -1
						? getSuggestionId(
								suggestionListId!,
								state.highlightIndex,
						  )
						: undefined
				}
				value={state.previewText ?? value?.text}
				onChange={(event) => {
					dispatch({ type: ActionTypes.INPUT_CHANGE });
					if (typeof onChange === 'function')
						onChange({
							text: event.target.value,
							payload: undefined,
						});
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
				onKeyDown={wrapEvent((event) => {
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
				<SuggestionsList
					suggestionListRef={suggestionListRef}
					suggestionListId={suggestionListId!}
					placeholder={textInputProps.placeholder}
					highlightIndex={state.highlightIndex}
					suggestions={suggestions}
					highlightRef={highlightRef}
					itemRenderer={itemRenderer}
					className={styles.suggestionList.inlineOptions}
					dispatch={dispatch}
					onChange={onChange}
				/>
			) : (
				<SuggestionListFlyout
					id={suggestionListId!}
					autoWidth={autoWidth!}
					triggerRef={triggerRef}
					alignment={EAlignment.BOTTOM_LEFT}
					isOpen={shouldOpenFlyout}
					triggerOffset={4}
				>
					<SuggestionsList
						className={styles.suggestionList.blockOptions}
						suggestionListRef={suggestionListRef}
						suggestionListId={suggestionListId!}
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
		</Box>
	);
}) as <PayloadType extends unknown>(
	p: AutoSuggestInputProps<PayloadType> & { ref?: Ref<HTMLInputElement> },
) => ReactElement;

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
	highlightRef: Ref<HTMLLIElement>;
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
}: SuggestionProps<PayloadType>) => {
	const styles = useStyles(styleRefs);

	return (
		<Box
			ref={suggestionListRef}
			is="ul"
			className={clsx(styles.suggestionList.defaults, className)}
			id={suggestionListId}
			aria-label={placeholder}
			role="listbox"
		>
			<div className={styles.spacer} />
			{suggestions.map((suggestion, idx) => {
				const highlight = highlightIndex === idx;

				return (
					<li
						key={suggestion.text.concat(String(idx))}
						ref={highlight ? highlightRef : undefined}
						id={getSuggestionId(suggestionListId, idx)}
						role="option"
						aria-selected={highlight}
						aria-label={suggestion.text}
						className={clsx(styles.suggestionListItem.default, {
							[styles.suggestionListItem.skipped]:
								suggestion.skip,
						})}
						onMouseDown={(event) =>
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
						}}
					>
						{typeof itemRenderer === 'function' &&
							itemRenderer({
								suggestions,
								highlight,
								value: suggestion,
							})}
					</li>
				);
			})}
			<div className={styles.spacer} />
		</Box>
	);
};

const AutoSuggestInputPrimitive = withEnhancedInput(
	({ field, eventHandlers, validation, suffixed, prefixed, ...rest }) => {
		const styles = useStyles(selectStyleRefs);
		const ref = useRef<HTMLInputElement>(null);

		const focusHandler = useCallback(() => {
			ref.current?.focus();
		}, []);

		// TODO: Eventually build a forkedRef helper for this
		const handleRef = useCallback(
			(node) => {
				if (field.ref) setRef(field.ref, node);

				setRef(ref, node);
			},
			[field],
		);

		return (
			<Box className={styles.root}>
				<Box
					is="input"
					{...eventHandlers}
					{...field}
					ref={handleRef}
					autoCapitalize="none"
					spellCheck="false"
					autoComplete="off"
					{...rest}
					type="search"
				/>
				<Box className={styles.icon} onClick={focusHandler}>
					<Icon size="medium" icon={ChevronDownIcon} />
				</Box>
			</Box>
		);
	},
	{
		primitiveType: 'text',
		withPrefixIcon: true,
		withSuffixIcon: false,
	},
);

const getSuggestionId = (id: string, index: number) => `${id}-option-${index}`;

const SuggestionListFlyout: FunctionComponent<
	ComponentPropsWithoutRef<typeof Positioner> & { autoWidth: boolean }
> = ({
	id,
	alignment,
	isOpen,
	triggerOffset,
	triggerRef,
	autoWidth,
	children,
}) => (
	<Positioner
		id={id}
		triggerRef={triggerRef}
		alignment={alignment}
		isOpen={isOpen}
		triggerOffset={triggerOffset}
		role="listbox"
	>
		<Box
			borderWidth="1"
			borderColour="gray"
			borderRadius="1"
			backgroundColour="white"
			boxShadow="2"
			style={{
				width:
					triggerRef.current && !autoWidth
						? triggerRef.current.clientWidth
						: undefined,
			}}
			onMouseDown={(event) => event.preventDefault()}
		>
			{children}
		</Box>
	</Positioner>
);

const defaultItemRenderer = <PayloadType extends unknown>({
	value,
	highlight,
}: Parameters<AutoSuggestItemRenderer<PayloadType>>[0]) => (
	<DefaultSuggestion highlight={highlight} text={value.text} />
);

interface DefaultSuggestionProps {
	text: string;
	highlight: boolean;
}

const DefaultSuggestion: FunctionComponent<DefaultSuggestionProps> = ({
	text,
	highlight,
}) => {
	const styles = useStyles(styleRefs);

	return (
		<div
			className={clsx(styles.suggestion, {
				[styles.suggestionHighlight]: highlight,
			})}
		>
			<Text is="span">{text}</Text>
		</div>
	);
};

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
	let returnIdx = -1;
	let shouldSkip: boolean;

	do {
		++itter;

		const maybeNextIdx =
			((returnIdx === -1 ? currentIndex : returnIdx) + direction) | 0;

		if (maybeNextIdx < 0) {
			returnIdx = maybeNextIdx > maxIndex ? 0 : maxIndex;
		} else {
			returnIdx = maybeNextIdx > maxIndex ? 0 : maybeNextIdx;
		}

		shouldSkip = suggestions[returnIdx].skip ?? false;
	} while (shouldSkip && itter <= maxIndex);

	return itter > maxIndex ? -1 : returnIdx;
};
