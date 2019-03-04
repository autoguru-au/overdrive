import cx from 'clsx';
import React, {
	AnchorHTMLAttributes,
	ComponentType,
	createElement,
	FunctionComponent,
	memo,
} from 'react';
import { DetailText, EDetailTextSize } from '../DetailText';
import { TIconPrimitiveType } from '../Icon';
import styles from './style.scss';

type TAnchorPropType = IProps & AnchorHTMLAttributes<Element>;

export interface IProps {
	className?: string;
	icon?: TIconPrimitiveType;
	component?: ComponentType;
	disabled?: boolean;
	href?: string;
	to?: string;
	label?: string;
}

const AnchorComponent: FunctionComponent<TAnchorPropType> = ({
	className = '',
	component = 'a',
	icon = void 0,
	label,
	disabled = false,
	...rest
}) =>
	createElement<TAnchorPropType>(
		component,
		{
			className: cx([className, styles.root]),
			'aria-disabled': disabled,
			disabled,
			...rest,
		},
		<>
			{icon &&
				React.cloneElement(icon, {
					size: 16,
					className: styles.icon,
				})}
			<DetailText className={styles.label} size={EDetailTextSize.Detail2}>
				{label}
			</DetailText>
		</>
	);

export const Anchor = memo(AnchorComponent);
