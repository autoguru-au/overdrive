import clsx from 'clsx';
import * as React from 'react';
import { ChangeEvent, FunctionComponent, ReactNode } from 'react';
import { useStyles } from 'react-treat';

import { Box, useBoxStyles } from '../../Box';
import { Text, useTextStyles } from '../../Text';
import * as styleRefs from './CheckableBase.treat';

export interface Props {
	className?: string;
	checked?: boolean;
	disabled?: boolean;
	label: ReactNode;
	inputName: string;
	inputType: string;
	value: string;

	handleClick(event): void;

	handleChange?(checked: boolean): void;
}

export const CheckableBase: FunctionComponent<Props> = ({
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
}) => {
	const styles = useStyles(styleRefs);
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
			padding="3"
			paddingLeft="none"
			position="relative"
			className={[
				styles.root,
				useBoxStyles({ is: 'button' }),
				className,
			]}>
			<Box
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
				className={[styles.checkable, useBoxStyles({ is: 'button' })]}>
				{children}
			</Box>
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
		</Box>
	);
};
