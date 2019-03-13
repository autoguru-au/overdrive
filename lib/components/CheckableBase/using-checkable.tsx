import React, { ComponentType, FunctionComponent, PureComponent } from 'react';
import { DetailText, EDetailTextSize } from '../DetailText';
import cx from 'clsx';
import styles from './style.scss';

export interface IProps {
	className?: string;
	checked?: boolean;
	label?: string;
}

interface ISymbolProps {
	checked: boolean;
	className?: string;
}

export const usingCheckable = (
	SymbolComponent: FunctionComponent<ISymbolProps>,
	inputType: string
): ComponentType<IProps> => {
	interface IState {
		checked: boolean;
	}

	return class WrappedCheckable extends PureComponent<IProps, IState> {
		public static getDerivedStateFromProps(
			nextProps: IProps
		): Partial<IState> | null {
			if ('checked' in nextProps) {
				return { checked: nextProps.checked };
			}

			return null;
		}

		constructor(props: IProps) {
			super(props);

			this.state = {
				checked: false,
			};
		}

		public render(): React.ReactNode {
			return (
				<div
					className={cx([styles.root, this.props.className], {
						[styles.selected]: this.props.checked,
					})}
					onClick={this.handleClick}>
					<SymbolComponent
						checked={this.state.checked}
						className={styles.checkable}
					/>
					<input
						onChange={this.handleChange}
						checked={this.state.checked}
						type={inputType}
						className={styles.nativeInput}
					/>
					{!!(
						typeof this.props.label === 'string' &&
						this.props.label.length > 0
					) && (
						<DetailText
							size={EDetailTextSize.Detail1}
							children={this.props.label}
							className={styles.label}
						/>
					)}
				</div>
			);
		}

		private handleClick = e => {
			console.log({ e });
			this.setState({
				checked: !this.state.checked,
			});
		};

		private handleChange = e => {
			console.log({ e });
		};
	};
};
