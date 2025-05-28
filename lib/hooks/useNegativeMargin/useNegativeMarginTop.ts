import {
	resolveResponsiveStyle,
	type ResponsiveProp,
} from '../../utils/resolveResponsiveProps';

import * as styles from './useNegativeMarginTop.css';

export const useNegativeMarginTop = (
	space: ResponsiveProp<keyof typeof styles.negativeMarginTop>,
) => resolveResponsiveStyle(space, styles.negativeMarginTop);
