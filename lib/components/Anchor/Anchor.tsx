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

import { componentStyles } from '../../styles/componentStyles';
import type { TestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';

const ANCHOR_TAG = 'a';

export interface Props
	extends Omit<
			AnchorHTMLAttributes<HTMLAnchorElement>,
			'as' | 'children' | 'is' | 'style'
		>,
		TestId {
	as?: ElementType | ReactElement;
	disabled?: boolean;
	children?: ReactNode;
	icon?: IconType;
}

export const Anchor: FunctionComponent<Props> = ({
	className,

	as: Component = ANCHOR_TAG,
	disabled = false,
	testId,

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
			className,
		),
		disabled,
		...dataAttrs({ testid: testId }),
		...rest,
	};

	const content = (
		<Box
			as="span"
			alignItems="center"
			colour="link"
			display="inline-flex"
			fontSize="4"
			fontWeight="bold"
			gap="2"
		>
			{icon && <Icon icon={icon} size="small" />}
			<span>{children}</span>
		</Box>
	);

	return isValidElement(Component)
		? cloneElement(Component, props, content)
		: createElement(Component, props, content);
};

export default Anchor;
