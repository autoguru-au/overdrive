import { Theme } from 'treat/theme';

import { ResponsiveProp } from '../../utils/responsiveProps_legacy';

import * as styles from './useNegativeMarginTop.css';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';

export const useNegativeMarginTop = (
	space: ResponsiveProp<keyof Theme['space']>,
) => resolveResponsiveStyle(space, styles.negativeMarginTop);
