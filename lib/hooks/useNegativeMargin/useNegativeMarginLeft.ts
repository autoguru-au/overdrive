import { ThemeTokens as Tokens } from '../../themes';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';

import * as styles from './useNegativeMarginLeft.css';

export const useNegativeMarginLeft = (space: keyof Tokens['space']) =>
	resolveResponsiveStyle(space, styles.negativeMarginLeft);

export default useNegativeMarginLeft;
