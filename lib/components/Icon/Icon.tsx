import type { IconType } from '@autoguru/icons';
import type { FunctionComponent, ReactElement, SVGAttributes } from 'react';
import * as React from 'react';
import { cloneElement } from 'react';

import { useNullCheck } from '../../hooks/useNullCheck';
import { elementStyles } from '../../styles';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { ResponsiveProp } from '../../utils/responsiveProps.css';
import { useBox, type UseBoxProps } from '../Box/useBox/useBox';

import * as styles from './Icon.css';

export type IconEl = IconType | ReactElement<SVGAttributes<SVGElement>, 'svg'>;

export interface IconProps {
	display?: Extract<
		UseBoxProps['display'],
		'block' | 'inlineBlock' | 'inline-block'
	>;
	className?: string;
	size?: ResponsiveProp<keyof typeof styles.size | string>;
	icon: IconEl;
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
		odComponent: 'icon',
		display,
	});

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

	return <Wrapper {...wrapperProps}>{icon ? iconElement : '⬤'}</Wrapper>;
};
