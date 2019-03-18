import cx from 'clsx';
import React, { Dispatch, PureComponent, SetStateAction } from 'react';
import styles from './style.scss';
import { RadioContext } from './RadioGroup';
import { CheckableBase } from '../CheckableBase';
import { checkableClass } from '../CheckableBase/checkable-base';

export interface IProps {
	className?: string;
	checked?: boolean;
	label?: string;
	name?: string;
	value: string;

	onChange?(checked: boolean): void;

	onClick?(checked: boolean): void;
}

export interface IState {
	value: string;
	checked: boolean;
	name: string;
	setContextValue?: Dispatch<SetStateAction<string>>;
}

export class RadioButton extends PureComponent<IProps, IState> {
	public static getDerivedStateFromProps(
		nextProps: IProps
	): Partial<IState> | null {
		const propKeys: Array<string> = ['value', 'name', 'checked'];

		return propKeys.reduce((state, key) => {
			if (key in nextProps) {
				state[key] = nextProps[key];
			}

			return state;
		}, {});
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
			<RadioContext.Consumer>
				{(context: any) => {
					if (!context || !context.inputName) {
						throw new Error(
							'RadioButton component must be nested inside a RadioGroup'
						);
					}
					if (this.props.checked) {
						context.setValue(this.state.value);
					}
					this.setState({
						setContextValue: context.setValue,
					});

					return (
						<CheckableBase
							inputType="radio"
							className={cx([styles.radio, this.props.className])}
							inputName={context.inputName}
							value={this.state.value}
							label={this.props.label}
							checked={this.state.value === context.value}
							handleClick={this.handleClick}
							handleChange={this.handleChange}>
							<div
								className={cx([checkableClass], {
									[styles.selected]:
										this.state.value === context.value,
								})}>
								<div className={styles.outerCircle} />
								<div className={styles.innerCircle} />
							</div>
						</CheckableBase>
					);
				}}
			</RadioContext.Consumer>
		);
	}

	private handleChange = e => {
		this.dispatchChange(e);
	};

	private handleClick = e => {
		this.state.setContextValue(this.state.value);
		this.dispatchClick(e);
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
}
