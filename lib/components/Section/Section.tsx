import clsx from 'clsx';
import React, { type FunctionComponent } from 'react';

import { useBox, type UseBoxProps } from '../Box';

import * as styles from './Section.css';

export interface SectionProps {
	width?: keyof typeof styles.width;
}

export const Section: FunctionComponent<UseBoxProps & SectionProps> = ({
	children,
	width = 'medium',
	...props
}) => {
	const { Component } = useBox({ width: 'full', ...props });

	return (
		<Component className={clsx(styles.root, styles.width[width!])}>
			{children}
		</Component>
	);
};
