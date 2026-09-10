import React, {
	forwardRef,
	useId,
	type ChangeEvent,
	type MouseEvent,
	type ReactNode,
} from 'react';

import { resetStyles } from '../../../styles';
import { textStyles } from '../../../styles/typography';
import type { OdComponentProp, TestIdProp } from '../../../types';
import { Box } from '../../Box/Box';
import { Text } from '../../Text/Text';

import * as styles from './CheckableBase.css';

export interface CheckableBaseProps extends OdComponentProp, TestIdProp {
	className?: string;
	/** Accessible name for the control, for when there is no visible label */
	'aria-label'?: string;
	/** id of the element naming this control */
	'aria-labelledby'?: string;
	checked?: boolean;
	disabled?: boolean;
	label: ReactNode;
	inputName: string;
	inputType: string;
	value: string;
	children?: ReactNode;
	handleClick(event: MouseEvent<HTMLInputElement>): void;
	handleChange?(checked: boolean): void;
}

export const CheckableBase = forwardRef<HTMLInputElement, CheckableBaseProps>(
	(
		{
			className = '',
			label = '',
			'aria-label': ariaLabel,
			'aria-labelledby': ariaLabelledBy,
			checked = false,
			disabled = false,
			inputType,
			inputName,
			value,
			children,
			odComponent,
			testId,
			handleClick,
			handleChange,
		},
		ref,
	) => {
		const onChange = (e: ChangeEvent<HTMLInputElement>) => {
			if (typeof handleChange === 'function') {
				handleChange(e.currentTarget.checked);
			}
		};

		const nakedLabel = ['string', 'number'].includes(typeof label);
		const id = useId();

		return (
			<Box
				odComponent={odComponent}
				testId={testId}
				display="flex"
				alignItems="center"
				flexDirection="row"
				justifyContent="start"
				paddingY="3"
				paddingRight={label ? '3' : 'none'}
				paddingLeft="none"
				position="relative"
				className={[
					styles.root,
					resetStyles('button'),
					className,
					{ [styles.disabled]: disabled },
				]}
			>
				<Box
					ref={ref}
					id={id}
					as="input"
					position="absolute"
					width="full"
					height="full"
					margin="none"
					padding="none"
					aria-label={ariaLabel}
					aria-labelledby={ariaLabelledBy}
					name={inputName}
					value={value}
					checked={checked}
					disabled={disabled}
					type={inputType}
					pointerEvents={disabled ? 'none' : void 0}
					className={[resetStyles('button'), styles.nativeInput]}
					onClick={handleClick}
					onChange={onChange}
				/>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					position="relative"
					className={[styles.checkable, resetStyles('button')]}
				>
					{children}
				</Box>
				<Box
					as="label"
					htmlFor={id}
					width="full"
					pointerEvents={disabled ? 'none' : void 0}
					className={[
						resetStyles('button'),
						textStyles({ size: '4' }),
						{
							[styles.label.disabled]: disabled,
						},
					]}
				>
					{nakedLabel ? <Text as="span">{label}</Text> : label}
				</Box>
			</Box>
		);
	},
);

CheckableBase.displayName = 'CheckableBase';
