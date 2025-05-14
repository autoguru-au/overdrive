import { IconType } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import {
	AnchorHTMLAttributes,
	cloneElement,
	createElement,
	ElementType,
	FunctionComponent,
	isValidElement,
	ReactElement,
	ReactNode,
} from 'react';

import { textStyles } from '../../styles/typography.css';
import { boxStyles } from '../Box';
import { Icon } from '../Icon';
import { Inline } from '../Inline';
import { Text } from '../Text';

import * as styles from './Anchor.css';

export interface Props
	extends Omit<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		'children' | 'style' | 'is'
	> {
	className?: string;
	is?: ElementType | ReactElement;
	disabled?: boolean;
	children?: ReactNode;

	icon?: IconType;
}

export const Anchor: FunctionComponent<Props> = ({
	className = '',

	is: Component = 'a',
	disabled = false,

	children,

	icon,
	...rest
}) => {
	const linkColor = textStyles({
		colour: 'link',
	});

	const props = {
		className: clsx(
			styles.root,
			linkColor,
			boxStyles({
				as: typeof Component === 'string' ? Component : undefined,
				display: 'inline',
			}),
			className,
		),
		disabled,
		...rest,
	};

	const childs = (
		<Inline space="2">
			{icon && <Icon icon={icon} size="small" className={linkColor} />}
			<Text fontWeight="bold" size="4" colour="link">
				{children}
			</Text>
		</Inline>
	);

	return isValidElement(Component)
		? cloneElement(Component, props, childs)
		: createElement(Component, props, childs);
};

export default Anchor;
