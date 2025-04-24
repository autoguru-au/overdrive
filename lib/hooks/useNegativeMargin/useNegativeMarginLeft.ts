import { ThemeTokens as Tokens } from '../../themes';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { ResponsiveProp } from '../../utils/responsiveProps.css';

import * as styles from './useNegativeMarginLeft.css';

export const useNegativeMarginLeft = (
	space: ResponsiveProp<keyof Tokens['space']>,
) => resolveResponsiveStyle(space, styles.negativeMarginLeft);

export default useNegativeMarginLeft;
