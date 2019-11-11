import { IconType } from '@autoguru/icons';
import clsx from 'clsx';
import React, {
	cloneElement,
	ComponentType,
	createElement,
	FunctionComponent,
	isValidElement,
	memo,
	ReactNode,
} from 'react';

import { Text } from '../Typography';
import styles from './style.scss';

export interface Props {
	rel?: string;
	href?: string;
	target?: string;

	className?: string;
	is?: ComponentType | ReactNode;
	disabled?: boolean;

	icon?(): IconType;
}

const AnchorComponent: FunctionComponent<Props & any> = ({
	rel = void 0,
	href = void 0,
	target = void 0,
	className = '',

	is: Component = 'a',
	disabled = false,

	children,

	icon = void 0,
	...rest
}) => {
	const props = {
		className: clsx([className, styles.root]),
		disabled,
		rel,
		href,
		target,
		...rest,
	};

	const childs = (
		<>
			{icon &&
				cloneElement(icon, {
					size: 16,
					className: styles.icon,
				})}
			<Text className={styles.label}>{children}</Text>
		</>
	);

	return isValidElement(Component)
		? cloneElement(Component, props, childs)
		: createElement(Component, props, childs);
};

export const Anchor = memo(AnchorComponent);
