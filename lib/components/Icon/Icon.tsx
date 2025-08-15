import type { IconType } from '@autoguru/icons';
import React, {
	cloneElement,
	type FunctionComponent,
	type ReactElement,
	type SVGAttributes,
} from 'react';

import { useNullCheck } from '../../hooks/useNullCheck';
import { elementStyles } from '../../styles';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import type { ResponsiveProp } from '../../utils/responsiveProps.css';
import { useBox, type UseBoxProps } from '../Box/useBox/useBox';

import * as styles from './Icon.css';

export type IconEl =
	| IconType
	| ReactElement<SVGAttributes<SVGElement>, 'svg'>
	| null;

export interface IconProps {
	display?: Extract<
		UseBoxProps['display'],
		'block' | 'inlineBlock' | 'inline-block'
	>;
	className?: string;
	size?: ResponsiveProp<keyof typeof styles.size | string>;
	icon?: IconEl;
}

export const Icon: FunctionComponent<IconProps> = ({
	className,
	icon,
	size = 'small',
	display = 'block',
}) => {
	useNullCheck(icon, 'Icon component received an empty icon prop.');

	const { Component: Wrapper, componentProps: wrapperProps } = useBox({
		as: 'span',
		className: [resolveResponsiveStyle(size, styles.size), className],
		display,
		odComponent: 'icon',
	});

	// Handle null/undefined icons by showing fallback without trying to clone
	if (!icon) {
		return <Wrapper {...wrapperProps}>⬤</Wrapper>;
	}

	const iconElement = cloneElement(icon, {
		className: elementStyles({
			as: 'svg',
			display: 'block',
			width: 'full',
			height: 'full',
		}),
		'aria-label': icon.props['aria-label'] ?? undefined,
		'aria-hidden': icon.props['aria-label'] ? undefined : true,
	});

	return <Wrapper {...wrapperProps}>{iconElement}</Wrapper>;
};
