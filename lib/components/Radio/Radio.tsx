import { invariant } from '@autoguru/utilities';
import cx from 'clsx';
import React, { PureComponent } from 'react';
import { CheckableBase } from '../CheckableBase';
import { checkableClass } from '../CheckableBase/CheckableBase';
import styles from './style.scss';
import { RadioContext } from './RadioGroup';

export interface IProps {
	className?: string;
	checked?: boolean;
	label?: string;
	name?: string;
	value: string;

	onClick?(checked: boolean): void;
}

export interface IState {
	value: string;
	checked: boolean;
	name: string;
}

export class Radio extends PureComponent<IProps, IState> {
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
					invariant(
						!context || !context.inputName,
						'RadioButton component must be nested inside a RadioGroup'
					);

					if (this.props.checked) {
						context.radioSelected(this.state.value);
					}

					const checkClicked = e =>
						this.handleClick(e, context.radioSelected);

					return (
						<CheckableBase
							inputType="radio"
							className={cx([styles.radio, this.props.className])}
							inputName={context.inputName}
							value={this.state.value}
							label={this.props.label}
							checked={this.state.value === context.value}
							handleClick={checkClicked}>
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

	private handleClick = (e, setContextValue?: (value: string) => void) => {
		setContextValue(this.state.value);
		this.dispatchClick(e);
	};

	private dispatchClick(e) {
		if (typeof this.props.onClick === 'function') {
			this.props.onClick(e);
		}
	}
}
