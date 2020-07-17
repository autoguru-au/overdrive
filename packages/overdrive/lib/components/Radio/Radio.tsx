import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, memo, ReactNode } from 'react';
import { useStyles } from 'react-treat';

import { CheckableBase } from '../private/CheckableBase';
import { useCheckableStyles } from '../private/CheckableBase/useCheckableStyles';
import * as styleRefs from './Radio.treat';
import { useRadioContext } from './RadioGroup';

export interface Props {
	value: string;
	className?: string;
	disabled?: boolean;
	children: ReactNode;
}

export const Radio: FunctionComponent<Props> = memo(
	({ value, className = '', children, disabled = false }) => {
		const styles = useStyles(styleRefs);
		const { checkable, checkableItem } = useCheckableStyles();
		const radioContext = useRadioContext();

		const isChecked = value === radioContext.value;

		const handleClick = () => radioContext.radioSelected?.(value);

		return (
			<CheckableBase
				inputType="radio"
				className={clsx([styles.radio, className])}
				inputName={radioContext.inputName}
				value={value}
				label={children}
				disabled={disabled}
				checked={isChecked}
				handleClick={handleClick}
			>
				<div className={checkable}>
					<div
						className={clsx(
							checkableItem,
							styles.circle.default,
							styles.circle.outer,
							{
								[styles.circle.selected]: isChecked,
							},
						)}
					/>
					<div
						className={clsx(
							styles.circle.default,
							styles.circle.inner,
							{
								[styles.circle.selected]: isChecked,
								[styles.circle.selectedInner]: isChecked,
							},
						)}
					/>
				</div>
			</CheckableBase>
		);
	},
);
