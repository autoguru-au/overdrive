import type { ElementType } from 'react';

import { type ComponentStylesProps } from '../../../styles/componentStyles';
import {
	type Sprinkles,
	type SprinklesLegacyColours,
} from '../../../styles/sprinkles.css';

import type { AsPolyProp } from './useBox';

/** All vanilla-extract sprinkles props */
export type StyleProps = Sprinkles & SprinklesLegacyColours;

export type BoxStylesProps<E extends ElementType = 'div'> = AsPolyProp<E> &
	Pick<ComponentStylesProps, 'className'> &
	StyleProps;

export type BoxStylesReturn<P extends object> = [string, P];
