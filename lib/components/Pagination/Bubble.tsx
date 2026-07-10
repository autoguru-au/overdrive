import clsx from 'clsx';
import type {
	ComponentProps,
	FunctionComponent,
	MouseEventHandler,
} from 'react';
import * as React from 'react';
import { ReactNode } from 'react';

import { textStyles } from '../../styles/typography';
import { Box } from '../Box';

import * as styles from './Pagination.css';

export interface BubbleProps {
	selected?: boolean;
	disabled?: boolean;
	gap?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	children?: ReactNode;
}

export const Bubble: FunctionComponent<BubbleProps> = ({
	className = '',
	selected = false,
	gap = false,
	children,
	disabled,
	onClick,
}) => {
	let backgroundColor: ComponentProps<typeof Box>['backgroundColor'] =
		'transparent';
	if (selected) backgroundColor = 'green900';
	else if (disabled) backgroundColor = 'gray200';
	return (
		<Box
			as="button"
			backgroundColor={backgroundColor}
			display="flex"
			overflow="hidden"
			alignItems="center"
			flexDirection="row"
			justifyContent="center"
			textAlign="center"
			borderRadius="pill"
			pointerEvents={disabled ? 'none' : void 0}
			className={clsx(
				className,
				textStyles({
					colour: selected ? 'white' : 'light',
					size: '3',
					weight: 'bold',
				}),
				{
					[styles.selectedItem]: selected,
					[styles.disabled]: gap,
					[styles.activeItem]: !gap,
				},
			)}
			onClick={onClick}
		>
			{gap ? '...' : children}
		</Box>
	);
};
