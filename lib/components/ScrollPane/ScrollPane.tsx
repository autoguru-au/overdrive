import clsx from 'clsx';
import React, { type ComponentProps, forwardRef } from 'react';

import type { ThemeTokens as Tokens } from '../../themes';
import { Box } from '../Box';

import * as styles from './ScrollPane.css';

export interface ScrollPaneProps
	extends Omit<ComponentProps<typeof Box>, 'overflow'> {
	bottomGap?: keyof Tokens['space'];
	serverVhFallback?: number;
	includeMobile?: boolean;
	className?: string;
	/** @deprecated No-op. Thumb is pill-rounded by default. Will be removed in the next major. */
	rounded?: boolean;
}

export const ScrollPane = forwardRef<HTMLDivElement, ScrollPaneProps>(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	({ className = '', rounded: _rounded, ...rest }, ref) => (
		<Box
			ref={ref}
			overflow="auto"
			className={clsx(className, styles.root)}
			odComponent="scroll-pane"
			{...rest}
		/>
	),
);

ScrollPane.displayName = 'ScrollPane';
