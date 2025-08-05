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
import { Box, type BoxProps } from '../Box/Box';

import * as styles from './Icon.css';

export type IconEl =
	| IconType
	| ReactElement<SVGAttributes<SVGElement>, 'svg'>
	| null;

export interface IconProps {
	display?: Extract<
		BoxProps['display'],
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

	const boxProps: BoxProps = {
		as: 'span',
		display,
		className: [resolveResponsiveStyle(size, styles.size), className],
		odComponent: 'icon',
	};

	// Handle null/undefined icons by showing fallback without trying to clone
	if (!icon) {
		return <Box {...boxProps}>⬤</Box>;
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

	return <Box {...boxProps}>{iconElement}</Box>;
};
