import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

import { Box } from '../';
import { Tokens } from '../../themes/tokens';

import * as styles from './DividerLine.css';

interface Props {
	isVertical?: boolean;
	className?: string;
	space: ComponentProps<typeof Box>['marginY'];
	colour?: keyof Tokens['colours']['intent'];
	size?: keyof typeof styles.size['horizontal'];
}

export const DividerLine: FunctionComponent<Props> = ({
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
		marginY={isVertical ? void 0 : space}
		marginX={isVertical ? space : void 0}
	/>
);
