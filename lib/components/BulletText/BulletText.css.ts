import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const bullet = style({
	height: vars.space['6'],
	lineHeight: vars.typography.size['2'].lineHeight,
	width: vars.space['6'],
});

export const primary = style({
	// eslint-disable-next-line no-restricted-syntax -- RETAINED: intent-derived ref (colours.intent.*), never repointed pre-major (docs/ds2026-plan/track-c.md §1.5).
	backgroundColor: vars.colours.intent.primary.background.mild,
});

export const secondary = style({
	// eslint-disable-next-line no-restricted-syntax -- RETAINED: tenant-variant key (smartFleet/ampol override colours.background.light) — docs/ds2026-plan/track-c.md §1.5 extension.
	backgroundColor: vars.colours.background.light,
});

export const primaryText = style({
	// eslint-disable-next-line no-restricted-syntax -- RETAINED: intent-derived ref (colours.intent.*), never repointed pre-major (docs/ds2026-plan/track-c.md §1.5).
	color: vars.colours.intent.primary.background.standard,
});

export const secondaryText = style({
	color: vars.color.foreground.primary,
});
