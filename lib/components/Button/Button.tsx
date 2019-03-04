import cx from 'clsx';
import { ComponentType, createElement, FunctionComponent } from 'react';

import styles from './style.scss';

export enum ESize {
	Small = 'small',
	Medium = 'medium',
	Large = 'large',
}

export enum EVariant {
	Primary = 'primary',
	Secondary = 'secondary',
	Danger = 'danger',
}

export interface IProps {
	className?: string;
	component?: ComponentType;
	disabled?: boolean;
	isFullWidth?: boolean;
	rounded?: boolean;
	size?: ESize;
	variant?: EVariant;
}

const cssVariantMap: Map<EVariant, string> = new Map([
	[EVariant.Primary, styles.variantPrimary],
	[EVariant.Secondary, styles.variantSecondary],
	[EVariant.Danger, styles.variantDanger],
]);

const cssSizeMap: Map<ESize, string> = new Map([
	[ESize.Small, styles.sizeSmall],
	[ESize.Medium, styles.sizeMedium],
	[ESize.Large, styles.sizeLarge],
]);

// TODO: Fix this any here, needs to be an abstract of the component that is being passed in.
export const Button: FunctionComponent<IProps & any> = ({
	children,
	className = '',
	component = 'button',
	disabled = false,
	isFullWidth = false,
	rounded = false,
	size = ESize.Medium,
	variant = EVariant.Secondary,
	...rest
}) =>
	createElement<any>( // TODO: Rid this any
		component,
		{
			className: cx(
				[
					styles.root,
					cssSizeMap.get(size),
					cssVariantMap.get(variant),
					className,
				],
				{
					[styles.rounded]: rounded,
					[styles.fullWidth]: isFullWidth,
				}
			),
			'aria-disabled': disabled,
			disabled,
			...rest,
		},
		children
	);
