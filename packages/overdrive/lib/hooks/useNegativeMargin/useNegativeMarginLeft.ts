import * as styles from './useNegativeMarginLeft.css';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { Tokens } from '../../themes/tokens';
import { ResponsiveProp } from '../../utils/responsiveProps.css';

export const useNegativeMarginLeft = (
	space: ResponsiveProp<keyof Tokens['space']>,
) => resolveResponsiveStyle(space, styles.negativeMarginLeft);
