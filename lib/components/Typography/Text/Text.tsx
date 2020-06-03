import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent } from 'react';

import { Box } from '../../Box';
import { TextStyleProps, useTextStyles } from './useTextStyles';

interface Props extends TextStyleProps {
	className?: string;
	is?: 'p' | 'span';
	strong?: boolean;
}

export const Text: FunctionComponent<Props> = ({
	children,
	className = '',
	is: Component = 'span',
	size = '4',
	strong = false,
	colour,
	align = 'left',
	fontWeight = 'normal',
	noWrap,
}) => (
	<Box
		is={Component}
		className={clsx(
			useTextStyles({
				size,
				align,
				colour: colour ?? (strong ? 'dark' : undefined),
				fontWeight: strong ? 'bold' : fontWeight,
				noWrap,
			}),
			className,
		)}>
		{children}
	</Box>
);
