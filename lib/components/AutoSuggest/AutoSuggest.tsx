/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { ChevronDownIcon, CloseIcon, IconType } from '@autoguru/icons';
import { wrapEvent } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
	type ComponentPropsWithoutRef,
	type Dispatch,
	forwardRef,
	type FunctionComponent,
	type ReactElement,
	type Reducer,
	type Ref,
	type RefObject,
	useCallback,
	useEffect,
	useImperativeHandle,
	useMemo,
	useReducer,
	useRef,
	useState,
} from 'react';

import { useMedia } from '../../hooks/useMedia/useMedia';
import { useWindowScrollLock } from '../../hooks/useWindowScrollLock';
import { setRef, useId } from '../../utils';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Portal } from '../Portal/Portal';
import { Positioner } from '../Positioner/Positioner';
import { EAlignment } from '../Positioner/alignment';
import { Text } from '../Text/Text';
import { TextInput } from '../TextInput/TextInput';
import { withEnhancedInput } from '../private/InputBase';

import * as styles from './AutoSuggest.css';
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

export interface AutoSuggestProps<PayloadType>
	extends Omit<
		ComponentPropsWithoutRef<typeof TextInput>,
		'onChange' | 'value' | 'type' | 'suffixIcon'
	> {
	autoFocus?: boolean;
	autoWidth?: boolean;
	inlineOptions?: boolean;
	fieldIcon?: IconType;
	value: AutoSuggestValue<PayloadType> | null;
	suggestions: Suggestions<PayloadType>;

	itemRenderer?: AutoSuggestItemRenderer<PayloadType>;

	onChange?(value: AutoSuggestValue<PayloadType>): void;
	onEnter?(value: AutoSuggestValue<PayloadType>): void;
}

interface AutoSuggestInputProps<PayloadType extends unknown>
	extends AutoSuggestProps<PayloadType> {
	noScroll?: boolean;
	isFocused?: boolean;
}

interface AutoSuggestFullscreenInputProps<PayloadType extends unknown>
	extends AutoSuggestInputProps<PayloadType> {
	closeModal(): void;
}

const inputReducerFactory =
	<T extends Suggestions<unknown>>(suggestions: T): Reducer<State, Actions> =>
	(prevState, action) => {
		switch (action.type) {
			// eslint-disable-next-line sonarjs/prefer-default-last
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
		inlineOptions = false,
		fieldIcon,
		suggestions,
		value: incomingValue,
		onChange: incomingOnChange,
		onEnter,
		itemRenderer = defaultItemRenderer,
		onBlur: incomingOnBlur,
		onFocus: incomingOnFocus,
		onKeyDown,
		onClick,
		...textInputProps
	},
	ref,
) {
	const inputRef = useRef<HTMLInputElement>(null);
	const valueRef = useRef(incomingValue);
	useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);
	const [isDesktop] = useMedia(['desktop'], false);
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const closeModal = useCallback(() => {
		setShowModal(false);
		setIsFocused(false);
	}, [setShowModal]);

	if (incomingValue && incomingValue !== valueRef.current) {
		valueRef.current = incomingValue;

		if (incomingValue.payload) closeModal();
	}

	const props = {
		suggestions,
		value: valueRef.current,
		onChange: (value) => {
			if (value.payload !== undefined && value.payload !== null) {
				setShowModal(false);
				if (!isDesktop) setIsFocused(false);
			}

			if (typeof incomingOnChange === 'function') incomingOnChange(value);
		},
		onKeyUp: (event) => {
			if (event.key === 'Enter' && typeof onEnter === 'function') {
				setShowModal(false);
				setIsFocused(false);
				inputRef.current?.blur();
				onEnter(valueRef.current!);
			}
		},
		itemRenderer,
		onKeyDown,
		onClick,
		onFocus: wrapEvent(() => {
			setIsFocused(true);
			setShowModal(true);
		}, incomingOnFocus),
		onBlur: wrapEvent(() => setIsFocused(false), incomingOnBlur),
		...textInputProps,
	};

	return !inlineOptions && !isDesktop && showModal ? (
		<AutoSuggestFullscreenInput
			{...props}
			attach="NONE"
			borderMerged="NONE"
			isFocused={isFocused}
			inlineOptions
			fieldIcon={fieldIcon}
			autoFocus={autoFocus}
			closeModal={closeModal}
		/>
	) : (
		<AutoSuggestInput
			ref={inputRef as RefObject<HTMLInputElement>}
			{...props}
			isFocused={isFocused}
			inlineOptions={inlineOptions}
			fieldIcon={fieldIcon}
			autoFocus={autoFocus}
			autoWidth={autoWidth}
		/>
	);
}) as <PayloadType extends unknown>(
	p: AutoSuggestProps<PayloadType> & { ref?: Ref<HTMLInputElement> },
) => ReactElement;

const AutoSuggestFullscreenInput = forwardRef(
	function AutoSuggestFullscreenInput({ closeModal, ...props }, ref) {
		const [showPortal, setShowPortal] = useState<boolean>(false);

		useWindowScrollLock();

		useEffect(() => {
			const cb = requestAnimationFrame(() => setShowPortal(true));

			return () => {
				cancelAnimationFrame(cb);
			};
		}, [setShowPortal]);

		return showPortal ? (
			<Portal>
				<div className={styles.fullScreenRoot}>
					<AutoSuggestInput
						ref={ref}
						{...props}
						className={styles.fullScreenInput}
						inlineOptions
						noScroll
					/>
					<Button
						minimal
						rounded
						className={styles.fullScreenCloseBtn}
						size="medium"
						onClick={closeModal}
					>
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
		noScroll = false,
		isFocused = false,
		size,
		fieldIcon,
		isLoading,
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
		className,
		...textInputProps
	},
	ref,
) {
	const triggerRef = useRef<HTMLDivElement>(null);
	const highlightRef = useRef<HTMLLIElement>(null);
	const suggestionListRef = useRef<HTMLUListElement>(null);

	const suggestionListId = useId();

	const reducer = useMemo(
		() => inputReducerFactory(suggestions),
		[suggestions],
	);

	const [state, dispatch] = useReducer(reducer, {
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
			<Box
				backgroundColour="white"
				borderRadius="sm"
				className={styles.input}
			>
				<AutoSuggestInputPrimitive
					className={className}
					size={size}
					isFocused={isFocused}
					isLoading={isLoading}
					autoFocus={autoFocus}
					fieldIcon={fieldIcon}
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
					onReset={() => {
						dispatch({ type: ActionTypes.INPUT_CHANGE });
						if (typeof onChange === 'function')
							onChange({
								text: '',
								payload: undefined,
							});
					}}
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
							state.highlightIndex &&
							state.previewText ===
								suggestions[state.highlightIndex]?.text &&
							typeof onChange === 'function'
						)
							onChange(suggestions[state.highlightIndex]);

						dispatch({ type: ActionTypes.INPUT_BLUR });
					}, onBlur)}
					onKeyDown={wrapEvent((event) => {
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
										onChange(
											suggestions[state.highlightIndex],
										);
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
			</Box>
			{inlineOptions ? (
				<SuggestionsList
					suggestionListRef={suggestionListRef}
					suggestionListId={suggestionListId!}
					placeholder={textInputProps.placeholder}
					highlightIndex={state.highlightIndex}
					suggestions={suggestions}
					highlightRef={highlightRef}
					itemRenderer={itemRenderer}
					className={
						noScroll
							? styles.suggestionList.inlineOptionsNoScroll
							: styles.suggestionList.inlineOptions
					}
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
					triggerOffset={1}
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
		AutoSuggestProps<PayloadType>,
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
	suggestionListRef,
}: SuggestionProps<PayloadType>) => (
	<Box
		as="ul"
		ref={suggestionListRef}
		backgroundColour="white"
		className={[styles.suggestionList.defaults, className]}
		id={suggestionListId}
		aria-label={placeholder}
		role="listbox"
	>
		<div className={styles.spacer} />
		{suggestions.map((suggestion, idx) => {
			const highlight = highlightIndex === idx;

			return (
				<Box
					as="li"
					key={suggestion.text.concat(String(idx))}
					ref={highlight ? highlightRef : undefined}
					id={getSuggestionId(suggestionListId, idx)}
					role="option"
					aria-selected={highlight}
					aria-label={suggestion.text}
					className={clsx(styles.suggestionListItem.default, {
						[styles.suggestionListItem.skipped]: suggestion.skip,
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
				</Box>
			);
		})}
		<div className={styles.spacer} />
	</Box>
);

const AutoSuggestInputPrimitive = withEnhancedInput(
	({
		field: { className: fieldClassName, ...field },
		eventHandlers,
		validation,
		suffixed,
		prefixed,
		isLoading,
		fieldIcon = ChevronDownIcon,
		isFocused,
		className,
		size,
		...rest
	}) => {
		let focusTimeout;
		const ref = useRef<HTMLInputElement>(null);
		const focusHandler = useCallback(() => {
			ref.current?.focus();
		}, []);

		const { onReset, ...inputEventHandlers } = eventHandlers;

		// TODO: Eventually build a forkedRef helper for this
		const handleRef = useCallback(
			(node) => {
				if (field.ref) setRef(field.ref, node);

				setRef(ref, node);
			},
			[field],
		);

		const onRequestReset = useCallback(() => {
			if (typeof onReset === 'function') onReset();
			focusTimeout = setTimeout(() => ref.current?.focus(), 100);
		}, [onReset, focusTimeout]);

		const suffix = useMemo(
			() =>
				// eslint-disable-next-line sonarjs/no-nested-conditional
				isLoading ? null : field.value && isFocused ? (
					<Box
						as="button"
						paddingY={size === 'small' ? '1' : '3'}
						paddingRight={size === 'small' ? '2' : '3'}
						flexShrink={0}
						onMouseDown={onRequestReset}
					>
						<Icon
							size={size === 'large' ? size : 'medium'}
							icon={CloseIcon}
						/>
					</Box>
				) : // eslint-disable-next-line sonarjs/no-nested-conditional
				fieldIcon ? (
					<Box
						flexShrink={0}
						paddingY={size === 'medium' ? '3' : '2'}
						paddingRight={size === 'medium' ? '3' : '2'}
						onClick={focusHandler}
					>
						<Icon
							size={size === 'large' ? size : 'medium'}
							icon={fieldIcon}
						/>
					</Box>
				) : null,
			[field.value, isLoading, fieldIcon, isFocused, onRequestReset],
		);

		useEffect(
			() => () => (focusTimeout ? clearTimeout(focusTimeout) : void 0),
			[],
		);

		return (
			<Box
				display="flex"
				flexWrap="nowrap"
				alignItems="center"
				justifyContent="center"
				className={className}
			>
				<Box
					as="input"
					flexGrow={1}
					{...inputEventHandlers}
					{...field}
					ref={handleRef}
					autoCapitalize="none"
					spellCheck="false"
					autoComplete="off"
					className={[fieldClassName, styles.inputPrimitive]}
					{...rest}
					type="search"
				/>
				{suffix}
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
			borderRadius="md"
			backgroundColour="white"
			boxShadow="4"
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
}) => (
	<div
		className={clsx(styles.suggestion, {
			[styles.suggestionHighlight]: highlight,
		})}
	>
		<Text as="span">{text}</Text>
	</div>
);

const getNextIndex = <
	PayloadType extends unknown,
	Value extends AutoSuggestValue<PayloadType>,
>(
	direction: 1 | -1,
	currentIndex: number,
	suggestions: Value[],
): number => {
	if (!Array.isArray(suggestions) || suggestions.length === 0) return -1;

	const maxIndex = suggestions.length - 1;

	let itter = -1;
	let returnIdx = -1;
	let shouldSkip: boolean;

	do {
		++itter;

		const maybeNextIdx = Math.trunc(
			(returnIdx === -1 ? currentIndex : returnIdx) + direction,
		);

		if (maybeNextIdx < 0) {
			returnIdx = maybeNextIdx > maxIndex ? 0 : maxIndex;
		} else {
			returnIdx = maybeNextIdx > maxIndex ? 0 : maybeNextIdx;
		}

		shouldSkip = suggestions[returnIdx]?.skip ?? false;
	} while (shouldSkip && itter <= maxIndex);

	return itter > maxIndex ? -1 : returnIdx;
};
