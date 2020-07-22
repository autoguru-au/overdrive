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
	const iconWithTextStyles = useBoxStyles({ marginRight: '2' });

	const props = {
		className: clsx(
			styles.root,
			textStyles,
			useBoxStyles({
				is: typeof Component === 'string' ? Component : undefined,
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'row',
				justifyContent: 'flexStart',
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
					className={clsx(textStyles, {
						[iconWithTextStyles]: Boolean(children),
					})}
				/>
			)}
			<Text fontWeight="bold" size="4" colour="link">
				{children}
			</Text>
		</>
	);

	return isValidElement(Component)
		? cloneElement(Component, props, childs)
		: createElement(Component, props, childs);
};
