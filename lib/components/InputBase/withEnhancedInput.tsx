import { IconType } from '@autoguru/icons';
import { invariant, wrapEvent } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
	AriaAttributes,
	ChangeEventHandler,
	ComponentType,
	FocusEventHandler,
	forwardRef,
	KeyboardEventHandler,
	MouseEventHandler,
	MutableRefObject,
	RefObject,
	useState,
} from 'react';

import { Icon } from '../Icon';
import { HintText } from './HintText';
import { NotchedBase } from './NotchedBase';
import styles from './style.scss';

// The event handlers we'll allow the wrapped component to bind too
export interface EventHandlers<PrimitiveElementType> {
	onChange?: ChangeEventHandler<PrimitiveElementType>;
	onBlur?: FocusEventHandler<PrimitiveElementType>;
	onFocus?: FocusEventHandler<PrimitiveElementType>;
	onKeyDown?: KeyboardEventHandler<PrimitiveElementType>;
	onClick?: MouseEventHandler<PrimitiveElementType>;
}

// The props we'll give the end consumer to send
export interface EnhanceInputPrimitiveProps extends AriaAttributes {
	name: string;
	placeholder: string;
	className?: string;
	id?: string;
	value?: string;
	hintText?: string;
	disabled?: boolean;
	prefixIcon?: IconType;
	suffixIcon?: IconType;
	wrapperRef?: MutableRefObject<HTMLDivElement>;
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
	field: Omit<EnhanceInputPrimitiveProps, 'placeholder' | 'hintText'> & {
		ref: RefObject<PrimitiveElementType>;
	};
	prefixed: boolean;
	suffixed: boolean;
} & IncomingProps;

interface EnhancedInputConfigs {
	withPrefixIcon?: boolean;
	withSuffixIcon?: boolean;
	withForcedPrefixIconPadding?: boolean;
	withForcedSuffixIconPadding?: boolean;
}

export const withEnhancedInput = <
	IncomingProps extends {} = {},
	PrimitiveElementType extends HTMLElement = HTMLInputElement
>(
	WrappingComponent: ComponentType<
		WrappedComponentProps<IncomingProps, PrimitiveElementType>
	> & {
		primitiveType: string;
	},
	{
		withPrefixIcon = true,
		withSuffixIcon = true,
		withForcedPrefixIconPadding = false,
		withForcedSuffixIconPadding = false,
	}: EnhancedInputConfigs = {},
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
				value: incomingValue = '',
				onBlur,
				onFocus,
				onKeyDown,
				onChange,
				prefixIcon,
				suffixIcon,
				wrapperRef,
				...rest
			},
			ref,
		) => {
			// ValidationProps // Icons // IncomingProps
			invariant(
				!(prefixIcon && !withPrefixIcon),
				'prefix icon is not supported for this component',
			);
			invariant(
				!(suffixIcon && !withSuffixIcon),
				'suffix icon is not supported for this component',
			);

			const [value, setValue] = useState<string>(incomingValue);
			const [previousValue, setPreviousValue] = useState<string>(
				incomingValue,
			);
			const [isActive, setActive] = useState<boolean>(false);

			if (incomingValue !== previousValue) {
				setValue(incomingValue);
				setPreviousValue(incomingValue);
			}

			/*
	Need to disable the type assertion here, as ts has no idea that P and an omitted P without its properties is just P
	@see https://stackoverflow.com/a/53951825/2609301

	type P = {firstName: string}
	type A = P
	type B = Omit<P, 'firstName'>

	A & B != A _or_ P & Omit<P, 'firstName'> != P
	 */
			const wrappingComponent: WrappedComponentProps<
				IncomingProps,
				PrimitiveElementType
				// eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
			> = {
				validation: {
					isTouched,
					isValid,
				},
				eventHandlers: {
					onChange: wrapEvent(event => {
						if (disabled) {
							event.preventDefault();

							return false;
						}

						setValue(((event.target as unknown) as any).value);

						return true;
					}, onChange),
					onFocus: wrapEvent(() => setActive(true), onFocus),
					onBlur: wrapEvent(() => setActive(false), onBlur),
					onKeyDown,
				},
				field: {
					name,
					id,
					disabled,
					value,
					className: styles.input,
					ref,
				},
				prefixed: Boolean(prefixIcon),
				suffixed: Boolean(suffixIcon),
				...(rest as IncomingProps),
			} as WrappedComponentProps<IncomingProps, PrimitiveElementType>;

			const shouldValidate: boolean = isValid !== void 0 && isTouched;

			return (
				<div
					className={clsx([styles.root, className], {
						[styles.invalid]: shouldValidate && !isValid,
						[styles.valid]: shouldValidate && isValid,
						[styles.withStatus]: shouldValidate,
						[styles.disabled]: disabled,
					})}>
					<NotchedBase
						id={id}
						isEmpty={
							WrappingComponent.primitiveType === 'date' &&
							value === ''
								? false
								: value === ''
						}
						isActive={isActive}
						hasPrefix={
							Boolean(prefixIcon) || withForcedPrefixIconPadding
						}
						hasSuffix={
							Boolean(suffixIcon) || withForcedSuffixIconPadding
						}
						placeholder={placeholder}>
						<div ref={wrapperRef} className={styles.inputWrapper}>
							{Boolean(prefixIcon) && (
								<label htmlFor={id}>
									<Icon
										icon={prefixIcon}
										size={24}
										className={styles.prefixIcon}
									/>
								</label>
							)}
							<WrappingComponent {...wrappingComponent} />
							{Boolean(suffixIcon) && (
								<label htmlFor={id}>
									<Icon
										icon={suffixIcon}
										size={24}
										className={styles.suffixIcon}
									/>
								</label>
							)}
						</div>
					</NotchedBase>
					{!disabled &&
						Boolean(hintText) &&
						Boolean(hintText.length) && (
							<HintText isActive={isActive}>{hintText}</HintText>
						)}
				</div>
			);
		},
	);
