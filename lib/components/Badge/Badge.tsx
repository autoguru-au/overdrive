import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import styles from './style.scss';

export interface IProps {
	colour?: EColour;
	className?: string;
	invert?: boolean;
	label: string;
}

export enum EColour {
	Default = 'default',
	Success = 'success',
	Warning = 'warning',
	Danger = 'danger',
}

const cssColourMap = new Map([
	[EColour.Default, styles.colourDefault],
	[EColour.Success, styles.colourSuccess],
	[EColour.Warning, styles.colourWarning],
	[EColour.Danger, styles.colourDanger],
]);

const BadgeComponent: FunctionComponent<IProps> = ({
	label,
	colour = EColour.Default,
	invert = false,
	className = '',
}) => {
	const cls = cx([className, styles.root, cssColourMap.get(colour)], {
		[styles.inverted]: invert,
	});

	return <span className={cls}>{label}</span>;
};

export const Badge = memo(BadgeComponent);
