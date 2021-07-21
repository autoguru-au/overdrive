import { IconType } from '@autoguru/icons';
import { invariant, wrapEvent } from '@autoguru/utilities';
import clsx from 'clsx';
import * as React from 'react';
import {
	AriaAttributes,
	ChangeEventHandler,
	ComponentType,
	FocusEventHandler,
	forwardRef,
	KeyboardEventHandler,
	MouseEventHandler,
	ReactNode,
	Ref,
	RefObject,
	useCallback,
	useState,
} from 'react';
import { useStyles } from 'react-treat';

import { useInputControlledState } from '../../../utils';
import { Box, useBoxStyles } from '../../Box';
import { Icon } from '../../Icon';
import { ProgressSpinner } from '../../ProgressSpinner';

import { HintText } from './HintText';
import { NotchedBase } from './NotchedBase';

import * as inputStateStyleRefs from './InputState.treat';
import * as styleRefs from './withEnhancedInput.treat';

// The event handlers we'll allow the wrapped component to bind too
export interface EventHandlers<PrimitiveElementType> {
	onChange?: ChangeEventHandler<PrimitiveElementType>;
	onBlur?: FocusEventHandler<PrimitiveElementType>;
	onFocus?: FocusEventHandler<PrimitiveElementType>;
	onKeyDown?: KeyboardEventHandler<PrimitiveElementType>;
	onClick?: MouseEventHandler<PrimitiveElementType>;
	onMouseEnter?: MouseEventHandler<PrimitiveElementType>;
	onMouseLeave?: MouseEventHandler<PrimitiveElementType>;
	onReset?(): void;
}

// The props we'll give the end consumer to send
export interface EnhanceInputPrimitiveProps extends AriaAttributes {
	name: string;
	placeholder: string;
	id?: string;
	className?: string;
	value?: string;
	hintText?: ReactNode;
	autoFocus?: boolean;
	disabled?: boolean;
	notch?: boolean;
	reserveHintSpace?: boolean;
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
	PrimitiveElementType
> = IncomingProps &
	EnhanceInputPrimitiveProps &
	EventHandlers<PrimitiveElementType> &
	ValidationProps;

// The final props we send into thw wrapping component
export type WrappedComponentProps<IncomingProps, PrimitiveElementType> = {
	validation: ValidationProps;
	eventHandlers: EventHandlers<PrimitiveElementType>;
	field: Omit<
		EnhanceInputPrimitiveProps,
		'placeholder' | 'hintText' | 'fieldIcon'
	> & {
		ref: RefObject<PrimitiveElementType>;
	};
	fieldIcon?: EnhanceInputPrimitiveProps['fieldIcon'];
	prefixed: boolean;
	suffixed: boolean;
	isLoading: boolean;
} & IncomingProps;

interface EnhancedInputConfigs {
	withPrefixIcon?: boolean;
	withSuffixIcon?: boolean;
	primitiveType: 'textarea' | 'text' | 'number' | 'date' | 'select';
}

export const withEnhancedInput = <
	IncomingProps extends {} = {},
	PrimitiveElementType extends HTMLElement = HTMLInputElement
>(
	WrappingComponent: ComponentType<
		WrappedComponentProps<IncomingProps, PrimitiveElementType>
	>,
	{
		primitiveType = 'text',
		withPrefixIcon = true,
		withSuffixIcon = true,
	}: EnhancedInputConfigs = { primitiveType: 'text' },
) =>
	forwardRef<
		PrimitiveElementType,
		EnhanceInputProps<IncomingProps, PrimitiveElementType>
	>(
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

				value: incomingValue = '',
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

			const styles = useStyles(styleRefs);
			const inputStateStyles = useStyles(inputStateStyleRefs);

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
					width: 'full',
					position: 'relative',
					display: 'flex',
				}),
				styles.types[primitiveType!],
				styles.input.itself.root,
				{
					[styles.input.itself.prefixed]: Boolean(prefixIcon),
					[styles.input.itself.suffixed]: Boolean(
						suffixIcon || isLoading,
					),
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
			// @ts-ignore
			const wrappingComponent: WrappedComponentProps<
				IncomingProps,
				PrimitiveElementType
			> = {
				validation: {
					isTouched,
					isValid,
				},
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
				...(rest as IncomingProps),
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
					onMouseLeave={onMouseOut}>
					<NotchedBase
						id={id}
						prefixed={Boolean(prefixIcon)}
						isEmpty={isEmpty}
						disabled={disabled}
						notch={notch}
						placeholder={placeholder}
						placeholderColourClassName={clsx({
							[derivedColours.colour]: !isEmpty,
						})}
						borderColourClassName={derivedColours.borderColour}>
						<Box ref={wrapperRef} width="full" height="full">
							{prefixIcon ? (
								<Icon
									icon={prefixIcon}
									size="medium"
									className={clsx(
										iconStyles,
										styles.icon.prefix,
										derivedColours.colour,
									)}
								/>
							) : null}
							{isLoading ? (
								<ProgressSpinner
									className={clsx(
										iconStyles,
										styles.icon.suffix,
										derivedColours.colour,
									)}
								/>
							) : null}
							{suffixIcon && !isLoading ? (
								<Icon
									icon={suffixIcon}
									size="medium"
									className={clsx(
										iconStyles,
										styles.icon.suffix,
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
	styles: typeof inputStateStyleRefs,
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
