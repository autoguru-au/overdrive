import { warning } from '@autoguru/utilities';
import cx from 'clsx';
import React, {
	cloneElement,
	ComponentType,
	FunctionComponent,
	memo,
	ReactNode,
} from 'react';
import { DetailText, EDetailTextSize } from '../DetailText';
import { TIconPrimitiveType } from '../Icon';
import styles from './style.scss';

export interface IProps {
	className?: string;
	icon?: TIconPrimitiveType;
	is?: ComponentType | ReactNode;
	component?: ComponentType; // @deprecated
	disabled?: boolean;
	href?: string;
	to?: string;
	label?: string;
}

const AnchorComponent: FunctionComponent<IProps & any> = ({
	className = '',
	is: Component = 'a',
	component = void 0,
	icon = void 0,
	label,
	disabled = false,
	...rest
}) => {
	// @deprecated block
	{
		warning(
			component !== void 0,
			`The \`component\` prop deprecated, please use the \`is\` prop instead.\n\nBefore:\n<Anchor component="{<Link/">}>\n\tHello\n</Anchor>\n\nAfter:\n<Anchor is="{<Link/">}>\n\tHello\n</Anchor>`
		);

		if (component !== void 0) {
			Component = component;
		}
	}

	const props = {
		className: cx([className, styles.root]),
		'aria-disabled': disabled,
		disabled,
		...rest,
	};

	const childs = (
		<>
			{icon &&
				cloneElement(icon, {
					size: 16,
					className: styles.icon,
				})}
			<DetailText className={styles.label} size={EDetailTextSize.Detail2}>
				{label}
			</DetailText>
		</>
	);

	return typeof Component === 'string' ? (
		<Component {...props}>{childs}</Component>
	) : (
		cloneElement(Component, props, childs)
	);
};

export const Anchor = memo(AnchorComponent);
