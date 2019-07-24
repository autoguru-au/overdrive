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
	['h1', 8],
	['h2', 7],
	['h3', 6],
	['h4', 4],
	['h5', 3],
	['h6', 2],
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
