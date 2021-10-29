import { useStyles } from 'react-treat';
import { Theme } from 'treat/theme';

import { resolveResponsiveStyle_legacy, ResponsiveProp } from '../../utils/responsiveProps_legacy';

import * as styleRefs from './useNegativeMarginLeft.treat';

export const useNegativeMarginLeft = (
	space: ResponsiveProp<keyof Theme['space']>,
) => {
	const styles = useStyles(styleRefs);
	return resolveResponsiveStyle_legacy(space, styles.negativeMarginLeft);
};
