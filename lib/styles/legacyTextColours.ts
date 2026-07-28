import { overdriveTokens } from '../themes/theme.css';

/**
 * Legacy `colour`-prop aliases.
 *
 * The `typography.colour.*` tokens these keys used to reference were removed
 * in v5 (AG-20568). The deprecated public prop surface — `colour` on
 * `Text`/`Heading`/`textStyles` and the `colour` / `backgroundColour`
 * sprinkles props — is intentionally KEPT, so every legacy value is
 * re-pointed here at a non-deprecated `color.*` token.
 *
 * Key ORDER is significant: it mirrors the order of the old
 * `typography.colour` contract block (lib/themes/theme.css.ts) so that
 * vanilla-extract's atomic-class generation for `sprinklesLegacyText` and the
 * `colour` sprinkle stays aligned with the pre-removal output.
 *
 * All 14 targets are value-identical to the old token in the BASE theme.
 * Three keys drift in a non-base theme; each is noted inline and accepted.
 */
export const LEGACY_TEXT_COLOURS = {
	// was typography.colour.primary (green600) — flat_red matches (red600);
	// neutral drifts gray800 → gray900 (accepted).
	primary: overdriveTokens.color.intent.primary.background.standard,
	// was typography.colour.brand (green600) — value-identical, but
	// semantically imperfect: there is no `color.brand.foreground`, and
	// `color.intent.brand.*` is white/green700, so the success foreground is
	// the only exact-value non-deprecated match.
	brand: overdriveTokens.color.success.foreground,
	// was typography.colour.secondary (gray700) — neutral drifts
	// gray600 → gray700 (accepted).
	secondary: overdriveTokens.color.foreground.secondary,
	// was typography.colour.shine (yellow500) — identical in all themes.
	shine: overdriveTokens.color.intent.shine.foreground,
	// was typography.colour.link (green600) — flat_red drifts
	// #01c68c → #00c400 (accepted).
	link: overdriveTokens.color.interactive.link,
	// was typography.colour.dark (gray900) — identical in all themes.
	dark: overdriveTokens.color.foreground.primary,
	// was typography.colour.white (white) — identical in all themes.
	white: overdriveTokens.color.foreground.reverse,
	// was typography.colour.muted (gray400) — identical in all themes.
	muted: overdriveTokens.color.foreground.tertiary,
	// was typography.colour.neutral (gray700) — identical in all themes.
	neutral: overdriveTokens.color.foreground.secondary,
	// was typography.colour.light (gray600) — value-identical, but
	// semantically imperfect: `interactive.contentDisabled` is the only
	// non-deprecated token holding gray600 in every theme.
	light: overdriveTokens.color.interactive.contentDisabled,
	// was typography.colour.danger (red600) — identical in all themes.
	danger: overdriveTokens.color.alert.foreground,
	// was typography.colour.warning (yellow800) — identical in all themes.
	warning: overdriveTokens.color.warning.foreground,
	// was typography.colour.success (green600) — identical in all themes.
	success: overdriveTokens.color.success.foreground,
	// was typography.colour.information (blue500) — `color.info.foreground`
	// is blue600 (#0d54e5) per Figma, so use the exact-value gamut fallback
	// per Track C plan §1.6/§1.9 (same house pattern as AutoSuggest).
	information: overdriveTokens.color.gamut.blue['500'],
} as const;
