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

import { useBoxStyles } from '../Box/useBoxStyles';
import { Icon } from '../Icon/Icon';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';
import { useTextStyles } from '../Text/useTextStyles';

import * as styles from './Anchor.css';

export interface AnchorProps
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

export const Anchor: FunctionComponent<AnchorProps> = ({
	className = '',

	is: Component = 'a',
	disabled = false,

	children,

	icon,
	...rest
}) => {
	const textStyles = useTextStyles({
		colour: 'link',
	});

	const props = {
		className: clsx(
			styles.root,
			textStyles,
			useBoxStyles({
				is: typeof Component === 'string' ? Component : undefined,
				display: 'inline',
			}),
			className,
		),
		disabled,
		...rest,
	};

	const childs = (
		<Inline space="2">
			{icon && <Icon icon={icon} size="small" className={textStyles} />}
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
