import { Theme } from 'treat/theme';

import { ResponsiveProp } from '../../utils/responsiveProps_legacy';

import * as styles from './useNegativeMarginLeft.css';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';

export const useNegativeMarginLeft = (
	space: ResponsiveProp<keyof Theme['space']>,
) => resolveResponsiveStyle(space, styles.negativeMarginLeft);
