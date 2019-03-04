import cx from 'clsx';
import React, {
	ChangeEventHandler,
	ComponentType,
	FocusEventHandler,
	PureComponent,
} from 'react';
import styles from './style.scss';
import { HintText } from './HintText';
import { NotchedBase } from './NotchedBase';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// The underlying primitive, ie, the binding active, or target element. eg, the thing the user will click into
type HtmlPrimitive = HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement;

// The event handlers we'll allow the wrapped component to bind too
export interface IEventHandlers<E extends HtmlPrimitive = HtmlPrimitive> {
	onChange?: ChangeEventHandler<E>;
	onBlur?: FocusEventHandler<E>;
	onFocus?: FocusEventHandler<E>;
}

// The props will give the end consumer to send
export interface IEnhanceInputPrimitiveProps {
	name: string;
	placeholder: string;
	className?: string;
	id?: string;
	value?: any;
	hintText?: string;
	disabled?: boolean;
}

export interface IValidationProps {
	isTouched?: boolean;
	isValid?: boolean;
}

// An amalgamation of the HoC props, event handlers and the consumer props.
export type EnhanceInputProps<IncomingProps = {}> = IncomingProps &
	IEnhanceInputPrimitiveProps &
	IEventHandlers &
	IValidationProps;

// The final props we send into thw wrapping component
export type WrappedComponentProps<IncomingProps = {}> = {
	validation: IValidationProps;
	eventHandlers: IEventHandlers;
	field: Omit<IEnhanceInputPrimitiveProps, 'placeholder' | 'hintText'>;
} & IncomingProps;

export function withEnhancedInput<IncomingProps = {}>(
	WrappingComponent: ComponentType<WrappedComponentProps<IncomingProps>>
): ComponentType<EnhanceInputProps<IncomingProps>> {
	type TProps = EnhanceInputProps<IncomingProps>;

	interface IState {
		value: any;
		isActive: boolean;
	}

	return class WrappedComponent extends PureComponent<TProps, IState> {
		public static displayName = `EnhancedInput(${WrappingComponent.displayName ||
			(WrappingComponent as any).name})`;

		public static getDerivedStateFromProps(
			nextProps: TProps
		): Partial<IState> | null {
			if ('value' in nextProps) {
				return { value: nextProps.value || '' };
			}

			return null;
		}

		constructor(props: TProps) {
			super(props);

			this.state = {
				value: props.value || '',
				isActive: false,
			};
		}

		public handleOnChange: ChangeEventHandler<HtmlPrimitive> = e => {
			this.setState({
				value: e.target.value,
			});

			if (this.props.onChange) {
				this.props.onChange(e);
			}
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
				// IEnhanceInputPrimitiveProps
				placeholder,
				name,
				id = name,
				hintText,
				disabled = false,
				className,

				// IValidationProps
				isTouched,
				isValid,

				// Remove the rest from the ...rest
				value: removeValue,
				onBlur,
				onFocus,
				onChange,

				// IncomingProps
				...rest
			} = this.props;

			/*
			Need to disable the type assertion here, as ts has no idea that P and an omitted P without its properties is just P
			@see https://stackoverflow.com/a/53951825/2609301

			type P = {firstName: string}
			type A = P
			type B = Omit<P, 'firstName'>

			A & B != A _or_ P & Omit<P, 'firstName'> != P
			 */
			// tslint:disable: no-object-literal-type-assertion
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
				...(rest as IncomingProps),
			} as WrappedComponentProps<IncomingProps>;
			// tslint:enable: no-object-literal-type-assertion

			const shouldValidate: boolean = isValid !== void 0 && isTouched;

			return (
				<div
					className={cx([styles.root, className], {
						[styles.invalid]: shouldValidate && !isValid,
						[styles.valid]: shouldValidate && isValid,
						[styles.withStatus]: shouldValidate,
					})}>
					<NotchedBase
						id={id}
						isEmpty={
							this.state.value === '' ||
							this.state.value === void 0
						}
						isActive={this.state.isActive}
						placeholder={placeholder}>
						<WrappingComponent {...wrappingComponent} />
					</NotchedBase>
					{!!hintText && !!hintText.length && (
						<HintText isActive={this.state.isActive}>
							{hintText}
						</HintText>
					)}
				</div>
			);
		}
	};
}
