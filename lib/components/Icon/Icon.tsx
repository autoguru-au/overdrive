import type { IconType } from '@autoguru/icons';
import type { NamedExoticComponent } from 'react';
import * as React from 'react';
import { cloneElement, memo } from 'react';
import { useStyles } from 'react-treat';

import { resolveResponsiveStyle, ResponsiveProp } from '../../utils';
import { Box, useBoxStyles } from '../Box';
import { BoxStyleProps } from '../Box/useBoxStyles';
import * as styleRefs from './Icon.treat';

export interface Props {
	display?: Extract<BoxStyleProps['display'], 'block' | 'inlineBlock'>;
	className?: string;
	size?: ResponsiveProp<keyof typeof styleRefs.size>;
	icon: IconType;
}

export const Icon: NamedExoticComponent<Props> = memo(
	({ className = '', icon, size = 'small', display = 'block' }) => {
		const styles = useStyles(styleRefs);

		return (
			<Box
				is="i"
				display={display}
				className={[
					resolveResponsiveStyle(size, styles.size),
					className,
				]}
				role="presentation">
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
	},
);
