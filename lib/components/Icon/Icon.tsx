import clsx from 'clsx';
import React, { FunctionComponent, memo, SVGAttributes } from 'react';
import styles from './style.scss';

export interface Props {
	className?: string;
	size: number;

	icon(): JSX.Element;
}

export type TIconPrimitiveType = any; // TODO: fix me

export const IconComponent: FunctionComponent<
	Props & SVGAttributes<SVGElement>
> = ({ className = '', icon, size }) => (
	<i
		style={{ width: size, height: size }}
		className={clsx([styles.root, className])}>
		{icon()}
	</i>
);

export const Icon = memo(IconComponent);
