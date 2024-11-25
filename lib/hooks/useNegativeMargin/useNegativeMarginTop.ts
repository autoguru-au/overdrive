import { Tokens } from '../../themes/tokens';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { ResponsiveProp } from '../../utils/responsiveProps.css';

import * as styles from './useNegativeMarginTop.css';

export const useNegativeMarginTop = (
	space: ResponsiveProp<keyof Tokens['space']>,
) => resolveResponsiveStyle(space, styles.negativeMarginTop);

export default useNegativeMarginTop;
