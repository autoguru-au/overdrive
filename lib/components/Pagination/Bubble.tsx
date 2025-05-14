import clsx from 'clsx';
import type {
	ComponentProps,
	FunctionComponent,
	MouseEventHandler,
} from 'react';
import * as React from 'react';
import { ReactNode } from 'react';

import { textStyles } from '../../styles/typography.css';
import { Box } from '../Box';

import * as styles from './Pagination.css';

export interface Props {
	selected?: boolean;
	disabled?: boolean;
	gap?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	children?: ReactNode;
}

export const Bubble: FunctionComponent<Props> = ({
	className = '',
	selected = false,
	gap = false,
	children,
	disabled,
	onClick,
}) => {
	let backgroundColour: ComponentProps<typeof Box>['backgroundColour'] =
		'transparent';
	if (selected) backgroundColour = 'green900';
	else if (disabled) backgroundColour = 'gray200';
	return (
		<Box
			as="button"
			backgroundColour={backgroundColour}
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
					fontWeight: 'bold',
					colour: selected ? 'white' : 'light',
					size: '3',
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

export default Bubble;
