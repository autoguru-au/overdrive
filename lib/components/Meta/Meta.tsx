import clsx from 'clsx';
import React, { cloneElement, FunctionComponent, memo } from 'react';
import { TIconPrimitiveType } from '../Icon';
import { Text } from '../Typography';
import styles from './style.scss';

export enum EVariant {
	Primary = 'primary',
	Secondary = 'secondary',
}

export interface Props {
	className?: string;
	icon?: TIconPrimitiveType;
	label: string;
	variant?: EVariant;
}

const cssVariantMap: Map<EVariant, string> = new Map([
	[EVariant.Primary, styles.variantPrimary],
	[EVariant.Secondary, styles.variantSecondary],
]);

const MetaComponent: FunctionComponent<Props> = ({
	className = '',
	icon = void 0,
	label,
	variant = EVariant.Primary,
}) => {
	const cls = clsx([styles.root, cssVariantMap.get(variant), className]);

	return (
		<span className={cls}>
			{/* TODO: Should we be using a cloneElement here? */}
			{icon && cloneElement(icon, { className: styles.icon })}
			<Text
				className={clsx({
					[styles.withIcon]: Boolean(icon),
				})}>
				{label}
			</Text>
		</span>
	);
};

export const Meta = memo(MetaComponent);
