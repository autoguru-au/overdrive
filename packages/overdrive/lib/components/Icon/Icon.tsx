import type { IconType } from '@autoguru/icons';
import type { FunctionComponent } from 'react';
import * as React from 'react';
import { cloneElement } from 'react';

import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { ResponsiveProp } from '../../utils/responsiveProps.css';
import type { BoxStyleProps } from '../Box';
import { Box, useBoxStyles } from '../Box';

import * as styles from './Icon.css';

export interface Props {
	display?: Extract<BoxStyleProps['display'], 'block' | 'inlineBlock'>;
	className?: string;
	size?: ResponsiveProp<keyof typeof styles.size | string>;
	icon: IconType;
}

export const Icon: FunctionComponent<Props> = ({
												   className = '',
												   icon,
												   size = 'small',
												   display = 'block',
											   }) => (
	<Box
		is='i'
		display={display}
		className={[resolveResponsiveStyle(size, styles.size), className]}
		role='presentation'>
		{cloneElement(icon, {
			className: useBoxStyles({
				is: 'svg',
				display: 'block',
				width: 'full',
				height: 'full',
			}),
		})}
	</Box>
);
