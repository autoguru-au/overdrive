import type { IconType } from '@autoguru/icons';
import type { FunctionComponent, ReactElement, SVGAttributes } from 'react';
import * as React from 'react';
import { cloneElement } from 'react';

import { useNullCheck } from '../../hooks/useNullCheck';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { ResponsiveProp } from '../../utils/responsiveProps.css';
import type { BoxStyleProps } from '../Box';
import { Box, useBoxStyles } from '../Box';

import * as styles from './Icon.css';

export type IconEl = IconType | ReactElement<SVGAttributes<SVGElement>, 'svg'>;

export interface Props {
	display?: Extract<BoxStyleProps['display'], 'block' | 'inlineBlock'>;
	className?: string;
	size?: ResponsiveProp<keyof typeof styles.size | string>;
	icon: IconEl;
}

export const Icon: FunctionComponent<Props> = ({
	className = '',
	icon,
	size = 'small',
	display = 'block',
}) => {
	useNullCheck(icon, 'Icon component received an empty icon prop.');
	return (
		<Box
			is="i"
			display={display}
			className={[resolveResponsiveStyle(size, styles.size), className]}
			role="presentation"
		>
			{icon
				? cloneElement(icon, {
						className: useBoxStyles({
							is: 'svg',
							display: 'block',
							width: 'full',
							height: 'full',
						}),
					})
				: '⬤'}
		</Box>
	);
};

export default Icon;
