import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

import { Box } from '../Box';

import * as styles from './DividerLine.css';

export interface DividerLineProps {
	isVertical?: boolean;
	className?: string;
	space: ComponentProps<typeof Box>['marginY'];
	colour?: ComponentProps<typeof Box>['backgroundColour'];
	size?: keyof (typeof styles.size)['horizontal'];
}

export const DividerLine: FunctionComponent<DividerLineProps> = ({
	className = '',
	isVertical = false,
	space = '3',
	colour = 'primary',
	size = 1,
}) => (
	<Box
		backgroundColour={colour}
		className={clsx(className, {
			[styles.size.horizontal[size]]: !isVertical,
			[styles.size.vertical[size]]: isVertical,
		})}
		marginY={isVertical ? undefined : space}
		marginX={isVertical ? space : undefined}
		odComponent="divider-line"
	/>
);
