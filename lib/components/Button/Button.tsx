import cx from 'clsx';
import React, { ComponentType, createElement, FunctionComponent } from 'react';
import {
	EProgressSpinnerSize,
	EProgressSpinnerVariant,
	ProgressSpinner,
} from '../ProgressSpinner';

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
	isLoading?: boolean;
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

const progressSpinnerSizeMap: Map<ESize, EProgressSpinnerSize> = new Map([
	[ESize.Small, EProgressSpinnerSize.Small],
	[ESize.Medium, EProgressSpinnerSize.Medium],
	[ESize.Large, EProgressSpinnerSize.Large],
]);

const progressSpinnerVariantMap: Map<
	EVariant,
	EProgressSpinnerVariant
> = new Map([
	[EVariant.Primary, EProgressSpinnerVariant.Light],
	[EVariant.Secondary, EProgressSpinnerVariant.Secondary],
	[EVariant.Danger, EProgressSpinnerVariant.Light],
]);

// TODO: Fix this any here, needs to be an abstract of the component that is being passed in.
export const Button: FunctionComponent<IProps & any> = ({
	children,
	className = '',
	component = 'button',
	disabled = false,
	isLoading = false,
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
					[styles.loading]: isLoading,
				}
			),
			'aria-disabled': disabled || isLoading,
			disabled: disabled || isLoading,
			...rest,
		},
		<>
			<span className={styles.btnContent} children={children} />
			{isLoading && (
				<ProgressSpinner
					className={styles.spinner}
					variant={progressSpinnerVariantMap.get(variant)}
					size={progressSpinnerSizeMap.get(size)}
				/>
			)}
		</>
	);
