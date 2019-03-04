import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import { DetailText, EDetailTextSize } from '../DetailText';
import { TIconPrimitiveType } from '../Icon';
import styles from './style.scss';

export enum EVariant {
	Primary = 'primary',
	Secondary = 'secondary',
}

export interface IProps {
	className?: string;
	icon?: TIconPrimitiveType;
	label: string;
	variant?: EVariant;
}

const cssVariantMap: Map<EVariant, string> = new Map([
	[EVariant.Primary, styles.variantPrimary],
	[EVariant.Secondary, styles.variantSecondary],
]);

const MetaComponent: FunctionComponent<IProps> = ({
	className = '',
	icon = void 0,
	label,
	variant = EVariant.Primary,
}) => {
	const cls = cx([styles.root, cssVariantMap.get(variant), className]);

	return (
		<span className={cls}>
			{/* TODO: Should we be using a cloneElement here? */}
			{icon && React.cloneElement(icon, { className: styles.icon })}
			<DetailText
				className={cx({
					[styles.withIcon]: !!icon,
				})}
				size={EDetailTextSize.Detail2}>
				{label}
			</DetailText>
		</span>
	);
};

export const Meta = memo(MetaComponent);
