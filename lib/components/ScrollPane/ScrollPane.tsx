import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, forwardRef, FunctionComponent } from 'react';

import { ThemeTokens as Tokens } from '../../themes';
import { Box } from '../Box';

import * as styles from './ScrollPane.css';

export interface Props extends Omit<ComponentProps<typeof Box>, 'overflow'> {
	bottomGap?: keyof Tokens['space'];
	serverVhFallback?: number;
	includeMobile?: boolean;
	rounded?: boolean;
	className?: string;
}

export const ScrollPane: FunctionComponent<Props> = forwardRef(
	({ className = '', rounded = false, ...rest }, ref) => (
		<Box
			ref={ref}
			overflow="auto"
			className={clsx(className, styles.root, {
				[styles.rounded]: rounded,
			})}
			{...rest}
		/>
	),
);
