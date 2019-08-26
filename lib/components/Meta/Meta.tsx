import { IconType } from '@autoguru/icons';
import clsx from 'clsx';
import React, {
	cloneElement,
	createElement,
	FunctionComponent,
	isValidElement,
	memo,
} from 'react';
import { Text } from '../Typography';
import styles from './style.scss';

export enum EVariant {
	Primary = 'primary',
	Secondary = 'secondary',
}

export interface Props {
	className?: string;
	icon?: IconType;
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
}) => (
	<span className={clsx(styles.root, cssVariantMap.get(variant), className)}>
		{icon && <IconWrapper icon={icon} />}
		<Text
			className={clsx({
				[styles.withIcon]: Boolean(icon),
			})}>
			{label}
		</Text>
	</span>
);

const IconWrapper: FunctionComponent<{ icon: Props['icon'] }> = ({
	icon: Icon,
}) =>
	isValidElement(Icon)
		? cloneElement(Icon, { className: styles.icon })
		: createElement(Icon, { className: styles.icon });

export const Meta = memo(MetaComponent);
