import React, { ComponentProps, ReactNode } from 'react';

import { Box } from '../Box/Box';

import * as styles from './Section.css';

export interface SectionProps
	extends Pick<ComponentProps<typeof Box>, 'paddingX' | 'ref'> {
	width?: keyof typeof styles.width;
	children?: ReactNode;
}

export const Section = ({
	children,
	width = 'medium',
	paddingX,
	ref,
}: SectionProps) => (
	<Box
		ref={ref}
		className={[styles.root, styles.width[width!]]}
		width="full"
		paddingX={paddingX}
	>
		{children}
	</Box>
);
