import { IconType } from '@autoguru/icons';
import { warning } from '@autoguru/utilities';
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

	component?: ComponentType; // @deprecated
	label?: string; // @deprecated

	icon?(): IconType;
}

const AnchorComponent: FunctionComponent<Props & any> = ({
	rel = void 0,
	href = void 0,
	target = void 0,
	className = '',

	is: Component = 'a',
	component = void 0,
	disabled = false,

	label = '',
	children = label,

	icon = void 0,
	...rest
}) => {
	// @deprecated block
	warning(
		component === void 0,
		`The \`component\` prop deprecated, please use the \`is\` prop instead.\n\nBefore:\n<Anchor component="{<Link/">}>\n\tHello\n</Anchor>\n\nAfter:\n<Anchor is="{<Link/">}>\n\tHello\n</Anchor>`,
	);

	if (component !== void 0) {
		Component = component;
	}

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
