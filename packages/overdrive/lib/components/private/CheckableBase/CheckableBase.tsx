import clsx from 'clsx';
import * as React from 'react';
import { ChangeEvent, forwardRef, ReactNode } from 'react';

import { Box, useBoxStyles } from '../../Box';
import { Text, useTextStyles } from '../../Text';

import * as styles from './CheckableBase.css';

export interface Props {
	className?: string;
	checked?: boolean;
	disabled?: boolean;
	label: ReactNode;
	inputName: string;
	inputType: string;
	value: string;
	children?: ReactNode;

	handleClick(event): void;

	handleChange?(checked: boolean): void;
}

export const CheckableBase = forwardRef<HTMLInputElement, Props>(
	(
		{
			className = '',
			label = '',
			checked = false,
			disabled = false,
			inputType,
			inputName,
			value,
			children,
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

		return (
			<Box
				display="flex"
				alignItems="center"
				flexDirection="row"
				justifyContent="flexStart"
				paddingY="3"
				paddingRight={label ? '3' : 'none'}
				paddingLeft="none"
				position="relative"
				className={[
					styles.root,
					useBoxStyles({ is: 'button' }),
					className,
					{ [styles.disabled]: disabled },
				]}>
				<Box
					ref={ref}
					is="input"
					position="absolute"
					width="full"
					height="full"
					margin="none"
					padding="none"
					name={inputName}
					value={value}
					checked={checked}
					disabled={disabled}
					type={inputType}
					pointerEvents={disabled ? 'none' : void 0}
					className={clsx(
						useBoxStyles({ is: 'button' }),
						styles.nativeInput.default,
						{
							[styles.nativeInput.checked]: checked,
						},
					)}
					onClick={handleClick}
					onChange={onChange}
				/>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					position="relative"
					className={[
						styles.checkable,
						useBoxStyles({ is: 'button' }),
					]}>
					{children}
				</Box>
				{label ? (
					<Box
						is="label"
						width="full"
						pointerEvents={disabled ? 'none' : void 0}
						className={clsx(
							useBoxStyles({ is: 'button' }),
							useTextStyles({ size: '4' }),
							{
								[styles.label.disabled]: disabled,
							},
						)}>
						{nakedLabel ? <Text is="span">{label}</Text> : label}
					</Box>
				) : null}
			</Box>
		);
	},
);
