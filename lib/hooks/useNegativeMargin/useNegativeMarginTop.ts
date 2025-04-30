import { ThemeTokens as Tokens } from '../../themes';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';

import * as styles from './useNegativeMarginTop.css';

/**
 * @deprecated will be removed soon
 */
export const useNegativeMarginTop = (space: keyof Tokens['space']) =>
	resolveResponsiveStyle(space, styles.negativeMarginTop);

export default useNegativeMarginTop;
