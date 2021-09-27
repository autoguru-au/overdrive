import { useStyles } from 'react-treat';
import { Theme } from 'treat/theme';

import { resolveResponsiveStyle, ResponsiveProp } from '../../utils/responsiveProps';

import * as styleRefs from './useNegativeMarginTop.treat';

export const useNegativeMarginTop = (
	space: ResponsiveProp<keyof Theme['space']>,
) => {
	const styles = useStyles(styleRefs);
	return resolveResponsiveStyle(space, styles.negativeMarginTop);
};
