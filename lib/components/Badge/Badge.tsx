import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import styles from './style.scss';

export interface IProps {
	colour?: EColour;
	className?: string;
	label: string;
}

export enum EColour {
	Default = 'default',
	Success = 'success',
	Warning = 'warning',
	Danger = 'danger',
}

const cssVariantMap = new Map([
	[EColour.Default, styles.variantDefault],
	[EColour.Success, styles.variantSuccess],
	[EColour.Warning, styles.variantWarning],
	[EColour.Danger, styles.variantDanger],
]);

const BadgeComponent: FunctionComponent<IProps> = ({
	label,
	colour = EColour.Default,
	className = '',
}) => {
	const cls = cx([className, styles.root, cssVariantMap.get(colour)]);

	return <span className={cls}>{label}</span>;
};

export const Badge = memo(BadgeComponent);
