import clsx from 'clsx';
import React, {
	forwardRef,
	useId,
	type ChangeEvent,
	type ReactNode,
} from 'react';

import { Box } from '../../Box/Box';
import { boxStyles } from '../../Box/boxStyles';
import { Text } from '../../Text/Text';
import { useTextStyles } from '../../Text/useTextStyles';

import * as styles from './CheckableBase.css';

export interface CheckableBaseProps {
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

export const CheckableBase = forwardRef<HTMLInputElement, CheckableBaseProps>(
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
		const id = useId();

		return (
			<Box
				display="flex"
				alignItems="center"
				flexDirection="row"
				justifyContent="flex-start"
				paddingY="3"
				paddingRight={label ? '3' : 'none'}
				paddingLeft="none"
				position="relative"
				className={[
					styles.root,
					boxStyles({ as: 'button' }),
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
					name={inputName}
					value={value}
					checked={checked}
					disabled={disabled}
					type={inputType}
					pointerEvents={disabled ? 'none' : void 0}
					className={clsx(
						boxStyles({ as: 'button' }),
						styles.nativeInput,
					)}
					onClick={handleClick}
					onChange={onChange}
				/>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					position="relative"
					className={[styles.checkable, boxStyles({ as: 'button' })]}
				>
					{children}
				</Box>
				<Box
					as="label"
					htmlFor={id}
					width="full"
					pointerEvents={disabled ? 'none' : void 0}
					className={clsx(
						boxStyles({ as: 'button' }),
						useTextStyles({ size: '4' }),
						{
							[styles.label.disabled]: disabled,
						},
					)}
				>
					{nakedLabel ? <Text is="span">{label}</Text> : label}
				</Box>
			</Box>
		);
	},
);

CheckableBase.displayName = 'CheckableBase';
