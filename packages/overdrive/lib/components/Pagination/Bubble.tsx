import clsx from 'clsx';
import * as React from 'react';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { useTextStyles } from '../Text';
import * as styleRefs from './Pagination.treat';

export interface Props extends ButtonHTMLAttributes<Element> {
	className?: string;
	selected?: boolean;
	gap?: boolean;
	children;
}

export const Bubble: FunctionComponent<Props> = ({
	className = '',
	selected = false,
	gap = false,
	children,
	...rest
}) => {
	const styles = useStyles(styleRefs);

	return (
		<Box
			is="button"
			backgroundColour={selected ? 'green900' : 'transparent'}
			display="flex"
			overflow="hidden"
			alignItems="center"
			flexDirection="row"
			justifyContent="center"
			textAlign="center"
			borderRadius="pill"
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
			{...rest}>
			{gap ? '...' : children}
		</Box>
	);
};
