import { IconType } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import {
	cloneElement,
	createElement,
	ElementType,
	FunctionComponent,
	isValidElement,
	ReactElement,
} from 'react';
import { useStyles } from 'react-treat';

import { useBoxStyles } from '../Box';
import { Icon } from '../Icon';
import { Inline } from '../Inline';
import { Text, useTextStyles } from '../Text';
import * as styleRefs from './Anchor.treat';

export interface Props {
	rel?: string;
	href?: string;
	title?: string;
	target?: string;

	className?: string;
	is?: ElementType | ReactElement;
	disabled?: boolean;

	icon?: IconType;
}

export const Anchor: FunctionComponent<Props> = ({
	rel,
	href,
	target,
	title,

	className = '',

	is: Component = 'a',
	disabled = false,

	children,

	icon = undefined,
}) => {
	const styles = useStyles(styleRefs);
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
		rel,
		href,
		target,
		title,
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
