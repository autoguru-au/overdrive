import * as styles from './useNegativeMarginTop.css';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { Tokens } from '../../themes/tokens';
import { ResponsiveProp } from '../../utils/responsiveProps.css';

export const useNegativeMarginTop = (
	space: ResponsiveProp<keyof Tokens['space']>,
) => resolveResponsiveStyle(space, styles.negativeMarginTop);
