import React, { ComponentType, FunctionComponent, PureComponent } from 'react';
import { DetailText, EDetailTextSize } from '../DetailText';
import cx from 'clsx';
import styles from './style.scss';

export interface IProps {
	className?: string;
	checked?: boolean;
	hovered?: boolean;
	focused?: boolean;
	active?: boolean;
	label?: string;
}

interface ISymbolProps {
	className?: string;
	checked: boolean;
	hovered: boolean;
	focused: boolean;
	active: boolean;
}

export const usingCheckable = (
	SymbolComponent: FunctionComponent<ISymbolProps>,
	inputType: string
): ComponentType<IProps> => {
	interface IState {
		checked: boolean;
		hovered: boolean;
		focused: boolean;
		active: boolean;
	}

	return class WrappedCheckable extends PureComponent<IProps, IState> {
		public static getDerivedStateFromProps(
			nextProps: IProps
		): Partial<IState> | null {
			const propKeys: Array<string> = [
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

			return derivedState;
		}

		constructor(props: IProps) {
			super(props);

			this.state = {
				hovered: false,
				focused: false,
				active: false,
				checked: false,
			};
		}

		public render(): React.ReactNode {
			return (
				<div
					className={cx([styles.root, this.props.className], {
						[styles.hovered]: this.state.hovered,
						[styles.focused]: this.state.focused,
						[styles.active]: this.state.active,
						[styles.checked]: this.state.checked,
					})}
					onMouseLeave={this.handleMouseLeave}
					onMouseOver={this.handleMouseOver}
					onMouseDown={this.handleMouseDown}
					onMouseUp={this.handleMouseUp}
					onMouseOut={this.handleMouseUp}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
					onClick={this.handleClick}>
					<SymbolComponent
						active={this.state.active}
						hovered={this.state.hovered}
						focused={this.state.focused}
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

		private handleMouseDown = e => {
			console.log({ e });
			this.setState({
				active: true,
				focused: false,
			});
		};

		private handleMouseUp = e => {
			console.log({ e });
			this.setState({
				active: false,
				focused: false,
			});
		};

		private handleFocus = e => {
			console.log({ e });
			this.setState({
				focused: true,
			});
		};

		private handleBlur = e => {
			console.log({ e });
			this.setState({
				focused: false,
			});
		};

		private handleMouseOver = e => {
			console.log({ e });
			this.setState({
				hovered: true,
			});
		};

		private handleMouseLeave = e => {
			console.log({ e });
			this.setState({
				hovered: false,
				focused: false,
			});
		};

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
