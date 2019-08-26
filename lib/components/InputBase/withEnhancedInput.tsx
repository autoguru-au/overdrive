import { IconType } from '@autoguru/icons';
import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
	ChangeEventHandler,
	ComponentType,
	FocusEventHandler,
	PureComponent,
} from 'react';
import { Icon } from '../Icon';
import { HintText } from './HintText';
import { NotchedBase } from './NotchedBase';
import styles from './style.scss';

// The underlying primitive, ie, the binding active, or target element. eg, the thing the user will click into
type HtmlPrimitive = HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement;

// The event handlers we'll allow the wrapped component to bind too
export interface EventHandlers<E extends HtmlPrimitive = HtmlPrimitive> {
	onChange?: ChangeEventHandler<E>;
	onBlur?: FocusEventHandler<E>;
	onFocus?: FocusEventHandler<E>;
}

// The props we'll give the end consumer to send
export interface EnhanceInputPrimitiveProps {
	name: string;
	placeholder: string;
	className?: string;
	id?: string;
	value?: any;
	hintText?: string;
	disabled?: boolean;
	prefixIcon?: IconType;
	suffixIcon?: IconType;
}

export interface ValidationProps {
	isTouched?: boolean;
	isValid?: boolean;
}

// An amalgamation of the HoC props, event handlers and the consumer props.
export type EnhanceInputProps<IncomingProps = {}> = IncomingProps &
	EnhanceInputPrimitiveProps &
	EventHandlers &
	ValidationProps;

// The final props we send into thw wrapping component
export type WrappedComponentProps<IncomingProps = {}> = {
	validation: ValidationProps;
	eventHandlers: EventHandlers;
	field: Omit<EnhanceInputPrimitiveProps, 'placeholder' | 'hintText'>;
	prefixed: boolean;
	suffixed: boolean;
} & IncomingProps;

interface EnhancedInputConfigs {
	withPrefixIcon?: boolean;
	withSuffixIcon?: boolean;
	withForcedPrefixIconPadding?: boolean;
	withForcedSuffixIconPadding?: boolean;
}

export function withEnhancedInput<IncomingProps = {}>(
	WrappingComponent: ComponentType<WrappedComponentProps<IncomingProps>> & {
		primitiveType: string;
	},
	{
		withPrefixIcon = true,
		withSuffixIcon = true,
		withForcedPrefixIconPadding = false,
		withForcedSuffixIconPadding = false,
	}: EnhancedInputConfigs = {},
): ComponentType<EnhanceInputProps<IncomingProps>> {
	type TProps = EnhanceInputProps<IncomingProps>;

	interface State {
		value: any;
		isActive: boolean;
	}

	return class WrappedComponent extends PureComponent<TProps, State> {
		public static displayName = `EnhancedInput(${WrappingComponent.displayName ||
			(WrappingComponent as any).name})`;

		state = {
			value: '',
			isActive: false,
		};

		public static getDerivedStateFromProps(
			nextProps: TProps,
		): Partial<State> | null {
			if ('value' in nextProps) {
				return { value: nextProps.value || '' };
			}

			return null;
		}

		public handleOnChange: ChangeEventHandler<HtmlPrimitive> = e => {
			if (this.props.disabled) {
				e.preventDefault();

				return false;
			}

			this.setState({
				value: e.target.value,
			});

			if (this.props.onChange) {
				this.props.onChange(e);
			}

			return true;
		};

		public handleOnFocus: FocusEventHandler<HtmlPrimitive> = e => {
			this.setState({
				isActive: true,
			});
			if (this.props.onFocus) {
				this.props.onFocus(e);
			}
		};

		public handleOnBlur: FocusEventHandler<HtmlPrimitive> = e => {
			this.setState({
				isActive: false,
			});
			if (this.props.onBlur) {
				this.props.onBlur(e);
			}
		};

		public render() {
			const {
				// EnhanceInputPrimitiveProps
				placeholder,
				name,
				id = name,
				hintText,
				disabled = false,
				className,

				// ValidationProps
				isTouched,
				isValid,

				// Remove the rest from the ...rest
				value: removeValue,
				onBlur,
				onFocus,
				onChange,

				// Icons
				prefixIcon,
				suffixIcon,

				// IncomingProps
				...rest
			} = this.props;

			invariant(
				!(prefixIcon && !withPrefixIcon),
				'prefix icon is not supported for this component',
			);
			invariant(
				!(suffixIcon && !withSuffixIcon),
				'suffix icon is not supported for this component',
			);

			/*
			Need to disable the type assertion here, as ts has no idea that P and an omitted P without its properties is just P
			@see https://stackoverflow.com/a/53951825/2609301

			type P = {firstName: string}
			type A = P
			type B = Omit<P, 'firstName'>

			A & B != A _or_ P & Omit<P, 'firstName'> != P
			 */
			// eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
			const wrappingComponent: WrappedComponentProps<IncomingProps> = {
				validation: {
					isTouched,
					isValid,
				},
				eventHandlers: {
					onChange: this.handleOnChange,
					onFocus: this.handleOnFocus,
					onBlur: this.handleOnBlur,
				},
				field: {
					name,
					id,
					disabled,
					value: this.state.value,
					className: styles.input,
				},
				prefixed: Boolean(prefixIcon),
				suffixed: Boolean(suffixIcon),
				...(rest as IncomingProps),
			} as WrappedComponentProps<IncomingProps>;

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
							this.state.value === ''
								? false
								: this.state.value === ''
						}
						isActive={this.state.isActive}
						hasPrefix={
							Boolean(prefixIcon) || withForcedPrefixIconPadding
						}
						hasSuffix={
							Boolean(suffixIcon) || withForcedSuffixIconPadding
						}
						placeholder={placeholder}>
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
					</NotchedBase>
					{!disabled &&
						Boolean(hintText) &&
						Boolean(hintText.length) && (
							<HintText isActive={this.state.isActive}>
								{hintText}
							</HintText>
						)}
				</div>
			);
		}
	};
}
