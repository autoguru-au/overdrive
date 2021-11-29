import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

import { Box } from '../Box';

import * as styles from './Section.css';

export interface Props extends Pick<ComponentProps<typeof Box>, 'paddingX'> {
	width?: keyof typeof styles.width;
}

export const Section: FunctionComponent<Props> = ({
	children,
	width = 'medium',
	paddingX,
}) => (
	<Box
		className={clsx(styles.root, styles.width[width!])}
		width="full"
		paddingX={paddingX}>
		{children}
	</Box>
);
