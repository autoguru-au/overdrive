import clsx from 'clsx';
import { useStyles } from 'react-treat';
import type { Theme } from 'treat/theme';

import * as styleRefs from './useTextStyles.treat';

export interface TextStyleProps {
	size?: keyof Theme['typography']['size'];
	colour?: keyof Theme['typography']['colour'] | 'unset';
	align?: 'left' | 'center' | 'right';
	fontWeight?: keyof Theme['typography']['fontWeight'];
	noWrap?: boolean;
}

export const useTextStyles = ({
	size,
	fontWeight,
	colour,
	align,
	noWrap,
}: TextStyleProps) => {
	const styles = useStyles(styleRefs);

	return clsx(
		styles.root,
		styles.sizes[size!],
		styles.align[align!],
		colour !== 'unset' && styles.colours[colour ?? 'neutral'],
		styles.fontWeight[fontWeight!],
		noWrap && styles.noWrap,
	);
};
