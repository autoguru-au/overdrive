import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import styles from './style.scss';

export interface IProps {
	variant?: EVariant;
	className?: string;
	label: string;
}

export enum EVariant {
	Default = 'default',
	Success = 'success',
	Warning = 'warning',
	Danger = 'danger',
}

const cssVariantMap = new Map([
	[EVariant.Default, styles.variantDefault],
	[EVariant.Success, styles.variantSuccess],
	[EVariant.Warning, styles.variantWarning],
	[EVariant.Danger, styles.variantDanger],
]);

const BadgeComponent: FunctionComponent<IProps> = ({
	label,
	variant = EVariant.Default,
	className = '',
}) => {
	const cls = cx([className, styles.root, cssVariantMap.get(variant)]);

	return <span className={cls}>{label}</span>;
};

export const Badge = memo(BadgeComponent);
