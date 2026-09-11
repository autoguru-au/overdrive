import { style } from '@vanilla-extract/css';

import { darkSurfaceLinkVars } from './surfaceLinkVars';

/**
 * Opt a dark-filled region into the dark-surface link colour.
 *
 * Escape hatch only. Any element painted through the `backgroundColor`
 * sprinkle already carries the right link vars for its own fill, so a
 * `<Box backgroundColor="gray900">` needs nothing. Reach for this when the
 * dark fill comes from somewhere sprinkles cannot see — a raw `background`
 * declaration, a gradient, or a photographic image.
 *
 * Focus rings follow without any change to `focusOutline`, which reads
 * `colours.foreground.link` and so resolves against whatever the nearest scope
 * declares.
 *
 * @example
 * <Box as="header" className={darkSurface} style={{ background: 'url(hero.jpg)' }}>
 */
export const darkSurface = style({
	vars: darkSurfaceLinkVars,
});
