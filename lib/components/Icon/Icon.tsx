import cx from 'clsx';
import React, { FunctionComponent, memo, SVGAttributes } from 'react';
import styles from './style.scss';

export interface IProps {
	className?: string;
	size: number;
	style?: CSSRuleList;
	icon(): JSX.Element;
}

export type TIconPrimitiveType = any; // TODO: fix me

export const IconComponent: FunctionComponent<
	IProps & SVGAttributes<SVGElement>
> = ({ className = '', icon, size, style }) => (
	<i
		style={{ ...style, width: size, height: size }}
		className={cx([styles.root, className])}>
		{icon()}
	</i>
);

export const Icon = memo(IconComponent);
