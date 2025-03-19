import { IconType } from '@autoguru/icons';
import { invariant, wrapEvent } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
	type AriaAttributes,
	type ChangeEventHandler,
	type ComponentProps,
	type ComponentType,
	type FocusEventHandler,
	type ForwardedRef,
	forwardRef,
	type KeyboardEventHandler,
	type MouseEventHandler,
	type ReactNode,
	type Ref,
	type RefObject,
	useCallback,
	useState,
} from 'react';

import { useInputControlledState } from '../../../utils';
import { Box, useBoxStyles } from '../../Box';
import { Icon } from '../../Icon';
import { ProgressSpinner } from '../../ProgressSpinner';

import { HintText } from './HintText';
import * as inputStateStyles from './InputState.css';
import { NotchedBase } from './NotchedBase';
import * as styles from './withEnhancedInput.css';
import type { InputSize } from './withEnhancedInput.css';

type ElementTypes = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

// The event handlers we'll allow the wrapped component to bind too
export interface EventHandlers<E extends ElementTypes> {
	onChange?: ChangeEventHandler<E>;
	onBlur?: FocusEventHandler<E>;
	onFocus?: FocusEventHandler<E>;
	onKeyDown?: KeyboardEventHandler<E>;
	onClick?: MouseEventHandler<E>;
	onMouseEnter?: MouseEventHandler<E>;
	onMouseLeave?: MouseEventHandler<E>;

	onReset?(): void;
}

// The props we'll give the end consumer to send
export interface EnhanceInputPrimitiveProps
	extends AriaAttributes,
		Pick<
			ComponentProps<typeof NotchedBase>,
			'notch' | 'placeholder' | 'attach' | 'borderMerged' | 'isFocused'
		>,
		Pick<ComponentProps<typeof Box>, 'backgroundColour'> {
	name: string;
	id?: string;
	className?: string;
	value?: string;
	hintText?: ReactNode;
	autoFocus?: boolean;
	disabled?: boolean;
	reserveHintSpace?: boolean;
	size?: InputSize;
	fieldIcon?: IconType;
	prefixIcon?: IconType;
	suffixIcon?: IconType;
	wrapperRef?: Ref<HTMLDivElement>;
	isLoading?: boolean;
}

export interface ValidationProps {
	isTouched?: boolean;
	isValid?: boolean;
}

// An amalgamation of the HoC props, event handlers and the consumer props.
export type EnhanceInputProps<
	IncomingProps,
	E extends ElementTypes,
> = IncomingProps &
	EnhanceInputPrimitiveProps &
	EventHandlers<E> &
	ValidationProps;

// The final props we send into thw wrapping component
export type WrappedComponentProps<IncomingProps, E extends ElementTypes> = {
	size: InputSize;
	validation: ValidationProps;
	eventHandlers: EventHandlers<E>;
	field: Omit<
		EnhanceInputPrimitiveProps,
		'placeholder' | 'hintText' | 'fieldIcon' | 'size'
	> & {
		ref: ForwardedRef<ElementTypes> | RefObject<ElementTypes>;
	};
	fieldIcon?: EnhanceInputPrimitiveProps['fieldIcon'];
	className?: boolean;
	prefixed: boolean;
	suffixed: boolean;
	isLoading: boolean;
} & IncomingProps &
	Pick<
		ComponentProps<typeof NotchedBase>,
		'attach' | 'borderMerged' | 'isFocused'
	>;

interface EnhancedInputConfigs<ValueType = string> {
	defaultValue?: ValueType;
	withPrefixIcon?: boolean;
	withSuffixIcon?: boolean;
	primitiveType: 'textarea' | 'text' | 'number' | 'date' | 'select' | 'color';
}

export const withEnhancedInput = <
	IncomingProps extends object = {},
	E extends ElementTypes = HTMLInputElement,
>(
	WrappingComponent: ComponentType<WrappedComponentProps<IncomingProps, E>>,
	{
		primitiveType = 'text',
		withPrefixIcon = true,
		withSuffixIcon = true,
		defaultValue,
		// eslint-disable-next-line unicorn/no-object-as-default-parameter
	}: EnhancedInputConfigs = { primitiveType: 'text', defaultValue: void 0 },
) =>
	// eslint-disable-next-line react/display-name
	forwardRef<ElementTypes, EnhanceInputProps<IncomingProps, E>>(
		(
			{
				// EnhanceInputPrimitiveProps
				placeholder,
				name,
				id = name,
				hintText,
				disabled = false,
				className,
				isTouched,
				isValid,
				isLoading = false,
				notch = true,
				reserveHintSpace = false,
				size = 'medium',
				backgroundColour = 'transparent',

				value: incomingValue = defaultValue || '',
				onChange: incomingOnChange,
				onReset,

				onMouseLeave,
				onMouseEnter,
				onBlur,
				onFocus,
				onKeyDown,
				prefixIcon,
				suffixIcon,
				wrapperRef,
				autoFocus,
				attach,
				borderMerged,
				...rest
			},
			ref,
		) => {
			invariant(
				!(prefixIcon && !withPrefixIcon),
				'prefix icon is not supported for this component',
			);
			invariant(
				!(suffixIcon && !withSuffixIcon),
				'suffix icon is not supported for this component',
			);

			const [value, onChange] = useInputControlledState(
				incomingValue,
				incomingOnChange,
			);

			const [isActive, setActive] = useState<boolean>(false);
			const [isHovered, setIsHovered] = useState<boolean>(false);

			const isEmpty =
				primitiveType === 'date' && value === '' ? false : value === '';

			const derivedColours = derivedColourIntent(
				{
					isValid,
					isHovered,
					isActive,
					isTouched,
					disabled,
				},
				inputStateStyles,
			);
			const inputItselfClassName = clsx(
				useBoxStyles({
					is: primitiveType === 'textarea' ? 'textarea' : 'input',
					backgroundColour,
					width: 'full',
					position: 'relative',
					display: 'flex',
					borderRadius: '2',
				}),
				styles.input.itself.root,
				styles.types[primitiveType!],
				styles.inputItselfSize[size].root.any,
				styles.inputItselfSize[size].root[primitiveType],
				{
					[styles.inputItselfSize[size].prefixed.any]:
						Boolean(prefixIcon),
					[styles.inputItselfSize[size].prefixed[primitiveType]]:
						Boolean(prefixIcon),
					[styles.inputItselfSize[size].suffixed.any]: Boolean(
						suffixIcon || isLoading,
					),
					[styles.inputItselfSize[size].suffixed[primitiveType]]:
						Boolean(suffixIcon || isLoading),
				},
			);

			const wrappingComponent: WrappedComponentProps<IncomingProps, E> = {
				validation: {
					isTouched,
					isValid,
				},
				size,
				eventHandlers: {
					onChange: wrapEvent((event) => {
						if (disabled) {
							event.preventDefault();

							return false;
						}

						return true;
					}, onChange),
					// Until https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within is more stable, the below
					// will wrap now
					onFocus: wrapEvent(() => setActive(true), onFocus),
					onBlur: wrapEvent(() => setActive(false), onBlur),
					onMouseEnter,
					onMouseLeave,
					onKeyDown,
					onReset,
				},
				field: {
					name,
					id,
					disabled,
					value,
					autoFocus,
					className: inputItselfClassName,
					placeholder: notch ? undefined : placeholder,
					ref,
				},
				prefixed: Boolean(prefixIcon),
				suffixed: Boolean(suffixIcon),
				isLoading,
				'aria-busy': isLoading || void 0,
				...(rest as unknown as IncomingProps),
			};

			const onMouseOver = useCallback(() => {
				setIsHovered(true);
			}, []);

			const onMouseOut = useCallback(() => {
				setIsHovered(false);
			}, []);

			const iconStyles = useBoxStyles({
				pointerEvents: 'none',
				position: 'absolute',
			});

			return (
				<Box
					width="full"
					className={className}
					onMouseEnter={onMouseOver}
					onMouseLeave={onMouseOut}
				>
					<NotchedBase
						id={id}
						prefixed={Boolean(prefixIcon)}
						isEmpty={isEmpty}
						size={size}
						disabled={disabled}
						notch={notch}
						placeholder={placeholder}
						attach={attach}
						borderMerged={borderMerged}
						isFocused={isActive}
						isHovered={isHovered}
						placeholderColourClassName={clsx({
							[derivedColours.colour]: !isEmpty,
						})}
						borderColourClassName={derivedColours.borderColour}
					>
						<Box
							ref={wrapperRef}
							className={
								styles.inputWrapperSize[size].root[
									primitiveType
								]
							}
							width="full"
							height="full"
						>
							{prefixIcon ? (
								<Icon
									icon={prefixIcon}
									size="medium"
									className={clsx(
										iconStyles,
										styles.iconRoot,
										styles.prefixIcon,
										styles.iconSize[size],
										derivedColours.colour,
									)}
								/>
							) : null}
							{isLoading ? (
								<ProgressSpinner
									colour="default"
									className={clsx(
										iconStyles,
										styles.iconRoot,
										styles.suffixIcon,
										styles.iconSize[size],
									)}
								/>
							) : null}
							{suffixIcon && !isLoading ? (
								<Icon
									icon={suffixIcon}
									size="medium"
									className={clsx(
										iconStyles,
										styles.iconRoot,
										styles.suffixIcon,
										styles.iconSize[size],
										derivedColours.colour,
									)}
								/>
							) : null}
							<WrappingComponent {...wrappingComponent} />
						</Box>
					</NotchedBase>
					{hintText || reserveHintSpace ? (
						<HintText
							className={derivedColours.colour}
							hintText={hintText}
							disabled={disabled}
							reserveHintSpace={reserveHintSpace}
						/>
					) : null}
				</Box>
			);
		},
	);

const stateNodeGetter = (styles) => (isHovered, isActive) => {
	if (isHovered) return styles.hover;
	if (isActive) return styles.active;
	return styles.default;
};

const derivedColourIntent = (
	{ isTouched, isValid, disabled, isHovered, isActive },
	styles: typeof inputStateStyles,
): { borderColour: string; colour: string } => {
	if (disabled) return styles.disabled;

	if (isTouched === true) {
		// Validation route
		const node = stateNodeGetter(isValid ? styles.success : styles.error);

		return node(isHovered, isActive);
	}

	const node = stateNodeGetter(isActive ? styles.active : styles.natural);

	return node(isHovered, isActive);
};
