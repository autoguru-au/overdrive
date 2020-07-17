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
import { Text } from '../Text';
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

	const props = {
		className: clsx(
			styles.root,
			useBoxStyles({
				is: typeof Component === 'string' ? Component : undefined,
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
		<>
			{icon && (
				<Icon
					icon={icon}
					size="small"
					className={clsx(styles.icon, {
						[styles.iconWithText]: Boolean(children),
					})}
				/>
			)}
			<Text fontWeight="bold" colour="link">
				{children}
			</Text>
		</>
	);

	return isValidElement(Component)
		? cloneElement(Component, props, childs)
		: createElement(Component, props, childs);
};
