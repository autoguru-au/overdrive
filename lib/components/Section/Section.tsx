import clsx from 'clsx';
import React, { type FunctionComponent, type ReactNode } from 'react';

import { useBox, type UseBoxProps } from '../Box';

import * as styles from './Section.css';

export interface SectionProps extends Pick<UseBoxProps, 'paddingX' | 'ref'> {
	width?: keyof typeof styles.width;
	children?: ReactNode;
}

export const Section: FunctionComponent<SectionProps> = ({
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
