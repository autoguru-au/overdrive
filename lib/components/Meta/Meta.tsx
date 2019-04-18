import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import { DetailText, EDetailTextSize } from '../DetailText';
import {
	EGridLayoutAlign,
	EGridLayoutPerpendicularAlign,
	EGridSpace,
	Grid,
	GridItem,
} from '../Grid';
import { EGridDirection, EWrap } from '../Grid/stories';
import { Icon, TIconPrimitiveType } from '../Icon';
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
		<Grid
			width="inherit"
			height="inherit"
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Center}
			wrap={EWrap.NoWrap}
			padding={EGridSpace.Space0}
			gutter={EGridSpace.Space4}
			Component="span"
			className={cls}>
			{icon && (
				<GridItem
					className={styles.icon}
					shrink={0}
					grow={0}
					Component={Icon}
					size={16}
					icon={icon}
					display="block"
					fill={'green'}
				/>
			)}
			<GridItem
				Component={DetailText}
				shrink={1}
				grow={1}
				className={cx({
					[styles.withIcon]: !!icon,
				})}
				size={EDetailTextSize.Detail2}
				children={label}
			/>
		</Grid>
	);
};

export const Meta = memo(MetaComponent);
