import { IconType } from '@autoguru/icons';
import { invariant, wrapEvent } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
	type ChangeEventHandler,
	type ComponentProps,
	type ComponentType,
	type FocusEventHandler,
	type ForwardedRef,
	forwardRef,
	type InputHTMLAttributes,
	type KeyboardEventHandler,
	type MouseEventHandler,
	type ReactNode,
	type Ref,
	type RefObject,
	useCallback,
	useState,
} from 'react';

import { elementStyles } from '../../../styles/elementStyles';
import { sprinkles, type Sprinkles } from '../../../styles/sprinkles.css';
import type { TestIdProp } from '../../../types';
import { useInputControlledState } from '../../../utils';
import { useBox } from '../../Box/useBox/useBox';
import { Icon } from '../../Icon/Icon';
import { ProgressSpinner } from '../../ProgressSpinner/ProgressSpinner';

import { HintText } from './HintText';
import * as inputStateStyles from './InputState.css';
import { NotchedBase } from './NotchedBase';
import * as styles from './withEnhancedInput.css';
import type { InputSize } from './withEnhancedInput.css';

type ElementTypes = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type NativeAttributes<E extends ElementTypes> = Omit<
	InputHTMLAttributes<E>,
	'as' | 'color' | 'height' | 'is' | 'placeholder' | 'size' | 'width'
>;

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
export interface EnhanceInputPrimitiveProps<E extends ElementTypes>
	extends NativeAttributes<E>,
		Pick<
			ComponentProps<typeof NotchedBase>,
			'notch' | 'placeholder' | 'attach' | 'borderMerged' | 'isFocused'
		>,
		Pick<Sprinkles, 'backgroundColour'>,
		TestIdProp {
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
	EnhanceInputPrimitiveProps<E> &
	EventHandlers<E> &
	ValidationProps;

// The final props we send into thw wrapping component
export type WrappedComponentProps<IncomingProps, E extends ElementTypes> = {
	size: InputSize;
	validation: ValidationProps;
	eventHandlers: EventHandlers<E>;
	field: Omit<
		EnhanceInputPrimitiveProps<E>,
		'placeholder' | 'hintText' | 'fieldIcon' | 'size'
	> & {
		ref: ForwardedRef<ElementTypes> | RefObject<ElementTypes>;
	};
	fieldIcon?: EnhanceInputPrimitiveProps<E>['fieldIcon'];
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
	forwardRef<E, EnhanceInputProps<IncomingProps, E>>(
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
				testId,

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

			const iconSize = size === 'small' ? 'medium' : size;

			const inputItselfClassName = clsx(
				elementStyles({
					as: primitiveType === 'textarea' ? 'textarea' : 'input',
					backgroundColour,
					width: 'full',
					position: 'relative',
					display: 'flex',
					borderRadius: 'md',
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

			/*
			Need to disable the type assertion here, as ts has no idea that P and an omitted P without its properties is just P
			@see https://stackoverflow.com/a/53951825/2609301

			type P = {firstName: string}
			type A = P
			type B = Omit<P, 'firstName'>

			A & B != A _or_ P & Omit<P, 'firstName'> != P
			 */

			// @ts-expect-error props not assignable to type
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

			const iconStyles = sprinkles({
				pointerEvents: 'none',
				position: 'absolute',
			});

			const {
				Component: ComponentRoot,
				componentProps: rootComponentProps,
			} = useBox({
				width: 'full',
				className,
				onMouseEnter: onMouseOver,
				onMouseLeave: onMouseOut,
				odComponent: `${primitiveType}-input`,
				testId,
			});

			return (
				<ComponentRoot {...rootComponentProps}>
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
						<div
							className={clsx(
								styles.inputWrapperSize[size].root[
									primitiveType
								],
								sprinkles({ height: 'full', width: 'full' }),
							)}
							ref={wrapperRef}
						>
							{prefixIcon ? (
								<Icon
									icon={prefixIcon}
									size={iconSize}
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
									size={size === 'large' ? size : undefined}
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
									size={iconSize}
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
						</div>
					</NotchedBase>
					{hintText || reserveHintSpace ? (
						<HintText
							className={derivedColours.colour}
							hintText={hintText}
							disabled={disabled}
							reserveHintSpace={reserveHintSpace}
							size={size}
						/>
					) : null}
				</ComponentRoot>
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
