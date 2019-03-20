import cx from 'clsx';
import React, { PureComponent } from 'react';
import { Check } from '../../icons';
import { CheckableBase } from '../CheckableBase';
import { checkableClass } from '../CheckableBase/CheckableBase';
import styles from './style.scss';

export interface IProps {
	className?: string;
	checked?: boolean;
	disabled?: boolean;
	label?: string;
	name?: string;
	value: string;

	onClick?(checked: boolean): void;
	onChange?(checked: boolean): void;
}

export interface IState {
	value: string;
	checked: boolean;
}

export class CheckBox extends PureComponent<IProps, IState> {
	public static getDerivedStateFromProps(
		nextProps: IProps
	): Partial<IState> | null {
		const propKeys: Array<string> = ['value', 'checked'];

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
			checked: false,
		};
	}

	public render(): React.ReactNode {
		return (
			<CheckableBase
				inputType="checkbox"
				className={cx([styles.checkbox, this.props.className])}
				inputName={this.props.name}
				value={this.state.value}
				label={this.props.label}
				disabled={this.props.disabled}
				checked={this.state.checked}
				handleChange={this.handleChange}
				handleClick={this.handleClick}>
				<div
					className={cx([checkableClass], {
						[styles.selected]: this.state.checked,
					})}>
					{this.state.checked && <Check />}
					<div className={styles.box} />
				</div>
			</CheckableBase>
		);
	}

	private handleClick = e => {
		this.dispatchClick(e);
	};

	private dispatchClick(e) {
		if (typeof this.props.onClick === 'function') {
			this.props.onClick(e);
		}
	}

	private handleChange = (checked: boolean) => {
		this.setState({ checked });
		this.dispatchChange(checked);
	};

	private dispatchChange(checked: boolean) {
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(checked);
		}
	}
}
