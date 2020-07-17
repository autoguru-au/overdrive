import clsx from 'clsx';
import * as React from 'react';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
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
			className={clsx(
				className,
				styles.activeItem.default,
				styles.bubble.default,
				{
					[styles.activeItem.selected]: selected,
					[styles.bubble.gap]: gap,
				},
			)}
			{...rest}>
			{gap ? '...' : children}
		</Box>
	);
};
