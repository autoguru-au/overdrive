import clsx from 'clsx';
import { ComponentProps } from 'react';
import { useStyles } from 'react-treat';

import type { BoxStyleProps } from '../Box';
import { useBoxStyles } from '../Box';
import { Text } from '../Text';

import * as styleRefs from './useTextStyles.treat';

export interface TextStyleProps {
	/** @deprecated Because when you go `useTextStyles` for alignment, you should be using `useBoxStyles` */
	align?: BoxStyleProps['textAlign'];
	colour?: keyof typeof styleRefs.colours | 'unset';
	fontWeight?: keyof typeof styleRefs.fontWeight;
	is?: ComponentProps<typeof Text>['is'];
	noWrap?: boolean;
	size?: keyof typeof styleRefs.sizes;
	transform?: keyof typeof styleRefs.transform;
}

export const useTextStyles = ({
	align,
	colour,
	fontWeight,
	is,
	noWrap,
	size,
	transform,
}: TextStyleProps) => {
	const styles = useStyles(styleRefs);

	return clsx(
		styles.root,
		useBoxStyles({ is, textAlign: align }),
		colour !== 'unset' && styles.colours[colour ?? 'neutral'],
		styles.fontWeight[fontWeight!],
		noWrap && styles.noWrap,
		styles.sizes[size!],
		styles.transform[transform!],
	);
};
