import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import styles from './style.scss';

export enum EVariant {
	Light = 'light',
	Primary = 'pending',
	Secondary = 'secondary',
	Warning = 'warning',
	Danger = 'danger',
}

export enum ESize {
	Small = 'small',
	Medium = 'medium',
	Large = 'large',
}

const cssSizeMap: Map<ESize, string> = new Map([
	[ESize.Small, styles.sizeSmall],
	[ESize.Medium, styles.sizeMedium],
	[ESize.Large, styles.sizeLarge],
]);
const cssVariantMap: Map<EVariant, string> = new Map([
	[EVariant.Light, styles.variantLight],
	[EVariant.Primary, styles.variantPrimary],
	[EVariant.Secondary, styles.variantSecondary],
	[EVariant.Warning, styles.variantWarning],
	[EVariant.Danger, styles.variantDanger],
]);

export interface IProps {
	className?: string;
	size?: ESize;
	variant?: EVariant;
}

const ProgressSpinnerComponent: FunctionComponent<IProps> = ({
	className = '',
	variant = EVariant.Primary,
	size = ESize.Medium,
}) => {
	const cls = cx([
		styles.root,
		cssSizeMap.get(size),
		cssVariantMap.get(variant),
		className,
	]);

	return (
		<div className={cls}>
			<svg className={styles.circular} viewBox="25 25 50 50">
				<circle
					className={styles.path}
					cx="50"
					cy="50"
					r="20"
					fill="none"
					strokeWidth="5"
					strokeMiterlimit="10"
				/>
			</svg>
		</div>
	);
};

export const ProgressSpinner = memo(ProgressSpinnerComponent);
