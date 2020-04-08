import { IconType } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, memo, NamedExoticComponent } from 'react';
import { useStyles } from 'react-treat';

import { resolveResponsiveStyle, ResponsiveProp } from '../../utils';
import { Box } from '../Box';
import * as styleRefs from './Icon.treat';

export interface Props extends Pick<ComponentProps<typeof Box>, 'display'> {
	className?: string;
	size?: ResponsiveProp<keyof typeof styleRefs.size>;
	icon: IconType;
}

export const Icon: NamedExoticComponent<Props> = memo(
	({
		className = '',
		icon,
		size = 'small' as ResponsiveProp<keyof typeof styleRefs.size>,
		display,
	}) => {
		const styles = useStyles(styleRefs);

		return (
			<Box
				is="i"
				display={display ?? 'block'}
				className={clsx(
					className,
					resolveResponsiveStyle(size, styles.size),
				)}>
				{icon}
			</Box>
		);
	},
);
