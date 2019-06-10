import clsx from 'clsx';
import React, { FunctionComponent } from 'react';
import { TSizeScale } from '../types';
import styles from './style.scss';

export interface Props {
	className?: string;
	is?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	size?: TSizeScale;
}

const sizeScaleDefaults: Map<string, TSizeScale> = new Map([
	['h1', 6],
	['h2', 5],
	['h3', 4],
	['h4', 3],
	['h5', 2],
	['h6', 1],
]);

export const Heading: FunctionComponent<Props> = ({
	children,
	className = '',
	is: Component = 'h1',
	size = sizeScaleDefaults.get(Component),
}) => (
	<Component
		children={children}
		className={clsx([
			styles.root,
			{ [styles[`sizeScale${size}`]]: Boolean(size) },
			className,
		])}
	/>
);
