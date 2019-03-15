import React, { ComponentType, FunctionComponent, PureComponent } from 'react';
import { DetailText, EDetailTextSize } from '../DetailText';
import cx from 'clsx';
import styles from './style.scss';

export interface IProps {
	className?: string;
	checked?: boolean;
	label?: string;
	name: string;
	value: string;

	onChange?(checked: boolean): void;
	onClick?(checked: boolean): void;
}

export interface ISymbolProps {
	className?: string;
	value: string;
	name: string;
	checked: boolean;
}

export const usingCheckable = (
	SymbolComponent: FunctionComponent<ISymbolProps>,
	inputType: string,
	clickHandler: (
		checked: boolean,
		setChecked: (checked: boolean) => void
	) => void
): ComponentType<IProps> => {
	interface IState {
		value: string;
		name: string;
		checked: boolean;
	}

	return class WrappedCheckable extends PureComponent<IProps, IState> {
		public static getDerivedStateFromProps(
			nextProps: IProps
		): Partial<IState> | null {
			const propKeys: Array<string> = [
				'value',
				'name',
				'checked',
				'hovered',
				'focused',
				'active',
			];
			const derivedState: Partial<IState> = propKeys.reduce(
				(state, key) => {
					if (key in nextProps) {
						state[key] = nextProps[key];
					}

					return state;
				},
				{}
			);

			if (derivedState.value === 'ford') {
				console.log({ derivedState });
			}

			return derivedState;
		}

		constructor(props: IProps) {
			super(props);

			this.state = {
				value: '',
				name: '',
				checked: false,
			};
		}

		public render(): React.ReactNode {
			return (
				<div
					className={cx([styles.root, this.props.className], {
						[styles.checked]: this.state.checked,
					})}
					onClick={this.handleClick}>
					<SymbolComponent
						value={this.state.value}
						name={this.state.name}
						checked={this.state.checked}
						className={styles.checkable}
					/>

					<input
						name={this.state.name}
						value={this.state.value}
						checked={this.state.checked}
						onChange={this.handleChange}
						type={inputType}
						className={styles.nativeInput}
					/>

					<div className={styles.focusRect} />

					{!!(
						typeof this.props.label === 'string' &&
						this.props.label.length > 0
					) && (
						<DetailText
							size={EDetailTextSize.Detail2}
							children={this.props.label}
							className={styles.label}
						/>
					)}
				</div>
			);
		}

		public componentDidUpdate(_, prevState) {
			if (prevState.checked !== this.state.checked) {
				this.dispatchChange(this.state.checked);
			}
		}

		private handleChange = e => {
			console.log({ e });
			console.log(e.currentTarget);
		};

		private dispatchChange(checked) {
			if (typeof this.props.onChange === 'function') {
				this.props.onChange(checked);
			}
		}

		private dispatchClick(e) {
			if (typeof this.props.onClick === 'function') {
				this.props.onClick(e);
			}
		}

		private setChecked = (checked: boolean) => {
			this.setState({
				checked,
			});
		};

		private handleClick = e => {
			clickHandler(this.state.checked, this.setChecked);
			this.dispatchClick(e);
		};
	};
};
