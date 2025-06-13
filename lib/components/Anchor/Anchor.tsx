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

import { componentStyles } from '../../styles/elementReset';
import { sprinkles } from '../../styles/sprinkles.css';
import { Icon } from '../Icon/Icon';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';

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
	const props = {
		className: clsx(
			componentStyles({
				as: Component,
				colour: 'link',
				display: 'inline',
			}),
			styles.root,
			className,
		),
		disabled,
		...rest,
	};

	const childs = (
		<Inline space="2">
			{icon && (
				<Icon
					icon={icon}
					size="small"
					className={sprinkles({ colour: 'link' })}
				/>
			)}
			<Text weight="bold" size="4" colour="link">
				{children}
			</Text>
		</Inline>
	);

	return isValidElement(Component)
		? cloneElement(Component, props, childs)
		: createElement(Component, props, childs);
};

export default Anchor;
