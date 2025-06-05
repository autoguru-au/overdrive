import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent, ReactNode } from 'react';

import { Box } from '../Box/Box';

import * as styles from './Section.css';

export interface SectionProps
	extends Pick<ComponentProps<typeof Box>, 'paddingX' | 'ref'> {
	width?: keyof typeof styles.width;
	children?: ReactNode;
}

export const Section: FunctionComponent<SectionProps> = ({
	children,
	width = 'medium',
	paddingX,
	ref,
}) => (
	<Box
		ref={ref}
		className={clsx(styles.root, styles.width[width!])}
		width="full"
		paddingX={paddingX}
	>
		{children}
	</Box>
);

export default Section;
