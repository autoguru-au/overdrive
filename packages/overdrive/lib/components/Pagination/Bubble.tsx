import clsx from 'clsx';
import type {
	ComponentProps,
	FunctionComponent,
	MouseEventHandler,
} from 'react';
import * as React from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { useTextStyles } from '../Text';
import * as styleRefs from './Pagination.treat';

export interface Props {
	selected?: boolean;
	disabled?: boolean;
	gap?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

export const Bubble: FunctionComponent<Props> = ({
	className = '',
	selected = false,
	gap = false,
	children,
	disabled,
	onClick,
}) => {
	const styles = useStyles(styleRefs);
	let backgroundColour: ComponentProps<typeof Box>['backgroundColour'] =
		'transparent';
	if (selected) backgroundColour = 'green900';
	else if (disabled) backgroundColour = 'gray200';
	return (
		<Box
			is="button"
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
				styles.activeItem,
				useTextStyles({
					fontWeight: 'bold',
					colour: selected ? 'white' : 'light',
					size: '3',
				}),
				{
					[styles.selectedItem]: selected,
					[styles.disabled]: gap,
				},
			)}
			onClick={onClick}>
			{gap ? '...' : children}
		</Box>
	);
};
