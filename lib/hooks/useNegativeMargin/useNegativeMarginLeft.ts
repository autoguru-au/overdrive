import {
	resolveResponsiveStyle,
	type ResponsiveProp,
} from '../../utils/resolveResponsiveProps';

import * as styles from './useNegativeMarginLeft.css';

export const useNegativeMarginLeft = (
	space: ResponsiveProp<keyof typeof styles.negativeMarginLeft>,
) => resolveResponsiveStyle(space, styles.negativeMarginLeft);
