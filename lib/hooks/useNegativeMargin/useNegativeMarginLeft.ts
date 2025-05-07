import { ThemeTokens as Tokens } from '../../themes';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';

import * as styles from './useNegativeMarginLeft.css';

/**
 *
 * @deprecated using this function likely means it relies on outdated css layout for spacing
 */
export const useNegativeMarginLeft = (space: keyof Tokens['space']) =>
	resolveResponsiveStyle(space, styles.negativeMarginLeft);
