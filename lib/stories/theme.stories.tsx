import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading';
import { colourMap } from '../themes/base/colours';
import { tokens } from '../themes/base/tokens';
import { getContrastRatio } from '../themes/helpers';
import { overdriveTokens } from '../themes/theme.css';

import {
	colourTableSub,
	eyebrow,
	groupCount,
	groupHeaderRow,
	groupHeading,
	pageLead,
	subGloss,
	subGlossRow,
	swatchCard,
	swatchCardHex,
	swatchCardName,
	swatchCardPalette,
	swatchCardVar,
	swatchCell,
	swatchGrid,
} from './helpers/styles.css';

function spacesFromCamelCase(text: string) {
	// eslint-disable-next-line unicorn/prefer-string-replace-all
	return text.replace(/([A-Z])/g, ' $1').trim();
}

/** Strip the `var(` / `)` wrapper so we show the bare `--od-…` custom property. */
function cssVarName(ref: string) {
	return ref.replace(/^var\(/, '').replace(/\)$/, '');
}

const meta: Meta = {
	title: 'Foundation/Theme Colours',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

interface Token {
	/** Semantic token name within its group, e.g. `primary`. */
	name: string;
	/** Resolved colour value (hex, incl. 8-digit alpha where applicable). */
	value: string;
	/** The generated CSS custom property, e.g. `--od-color-foreground-primary`. */
	cssVar: string;
	/** Plain-language guidance on when to use this token. */
	description: string;
}

interface TokenSection {
	/** Optional sub-heading — omitted for flat, single-list groups. */
	title?: string;
	tokens: Token[];
}

interface TokenGroup {
	group: string;
	title: string;
	blurb: string;
	sections: TokenSection[];
}

/**
 * Helper: build a `Token` from the live token value + its contract CSS var so
 * swatches never drift from `tokens.color` / the theme contract.
 */
const tok = (value: string, ref: string, description: string): Token => ({
	name: '',
	value,
	cssVar: cssVarName(ref),
	description,
});
const named = (name: string, t: Token): Token => ({ ...t, name });

const { color } = tokens;
const vars = overdriveTokens.color;

/**
 * The AutoGuru Design System 2026 "Theme colours" collection, mirrored 1:1 from
 * Figma and organised by the same groups. Values are sourced from
 * `tokens.color.*`; CSS var names from the theme contract.
 *
 * @see https://www.figma.com/design/ZkQlQcJkF7NTnZomVrPRN5/AutoGuru-Design-System-2026?node-id=1-304
 */
const themeColours: TokenGroup[] = [
	{
		group: 'foreground',
		title: 'Foreground',
		blurb: 'Text and icon colours that sit on top of surfaces.',
		sections: [
			{
				tokens: [
					named(
						'primary',
						tok(
							color.foreground.primary,
							vars.foreground.primary,
							'Default text and icons — highest contrast on light surfaces.',
						),
					),
					named(
						'secondary',
						tok(
							color.foreground.secondary,
							vars.foreground.secondary,
							'Supporting text and secondary icons.',
						),
					),
					named(
						'reverse',
						tok(
							color.foreground.reverse,
							vars.foreground.reverse,
							'Text and icons on dark / reverse surfaces.',
						),
					),
					named(
						'tertiary',
						tok(
							color.foreground.tertiary,
							vars.foreground.tertiary,
							'Tertiary text and icons — lowest-emphasis readable step.',
						),
					),
					named(
						'placeholder',
						tok(
							color.foreground.placeholder,
							vars.foreground.placeholder,
							'Placeholder text and decorative/disabled marks — not for body copy.',
						),
					),
				],
			},
		],
	},
	{
		group: 'background',
		title: 'Background',
		blurb: 'Surface fills for pages, panels, inactive states and overlays.',
		sections: [
			{
				tokens: [
					named(
						'default',
						tok(
							color.background.default,
							vars.background.default,
							'The default page / surface background.',
						),
					),
					named(
						'reverse',
						tok(
							color.background.reverse,
							vars.background.reverse,
							'Dark surface — headers, footers, hero panels. Pair with reverse foreground.',
						),
					),
					named(
						'emphasisLight',
						tok(
							color.background.emphasisLight,
							vars.background.emphasisLight,
							'Subtle raised surface — cards and quiet panels.',
						),
					),
					named(
						'emphasisInactive',
						tok(
							color.background.emphasisInactive,
							vars.background.emphasisInactive,
							'Emphasised-but-inactive surface fill.',
						),
					),
					named(
						'inactive',
						tok(
							color.background.inactive,
							vars.background.inactive,
							'Disabled control fill.',
						),
					),
					named(
						'modal',
						tok(
							color.background.modal,
							vars.background.modal,
							'Scrim behind modals and drawers (semi-transparent).',
						),
					),
				],
			},
		],
	},
	{
		group: 'border',
		title: 'Border',
		blurb: 'Hairline borders and dividers.',
		sections: [
			{
				tokens: [
					named(
						'default',
						tok(
							color.border.default,
							vars.border.default,
							'Default border for inputs, cards and dividers.',
						),
					),
					named(
						'emphasis',
						tok(
							color.border.emphasis,
							vars.border.emphasis,
							'Stronger border for emphasis or hover.',
						),
					),
					named(
						'selected',
						tok(
							color.border.selected,
							vars.border.selected,
							'Border of a selected control.',
						),
					),
					named(
						'strong',
						tok(
							color.border.strong,
							vars.border.strong,
							'Highest-contrast border.',
						),
					),
				],
			},
		],
	},
	{
		group: 'focus',
		title: 'Focus',
		blurb: 'Focus indicator for keyboard and accessibility states.',
		sections: [
			{
				tokens: [
					named(
						'ring',
						tok(
							color.focus.ring,
							vars.focus.ring,
							'Focus ring / outline for focused interactive elements.',
						),
					),
				],
			},
		],
	},
	{
		group: 'feedback',
		title: 'Feedback',
		blurb: 'Status colours for info, success, warning and alert messaging.',
		sections: [
			{
				title: 'Info',
				tokens: [
					named(
						'text',
						tok(
							color.info.text,
							vars.info.text,
							'Informational text on white.',
						),
					),
					named(
						'foreground',
						tok(
							color.info.foreground,
							vars.info.foreground,
							'Informational icons and accents.',
						),
					),
					named(
						'backgroundStrong',
						tok(
							color.info.backgroundStrong,
							vars.info.backgroundStrong,
							'Strong info surface — white text.',
						),
					),
					named(
						'backgroundSubtle',
						tok(
							color.info.backgroundSubtle,
							vars.info.backgroundSubtle,
							'Soft info surface / banner fill.',
						),
					),
				],
			},
			{
				title: 'Success',
				tokens: [
					named(
						'text',
						tok(
							color.success.text,
							vars.success.text,
							'Positive text on white.',
						),
					),
					named(
						'foreground',
						tok(
							color.success.foreground,
							vars.success.foreground,
							'Positive icons and accents.',
						),
					),
					named(
						'backgroundStrong',
						tok(
							color.success.backgroundStrong,
							vars.success.backgroundStrong,
							'Strong success surface — white text.',
						),
					),
					named(
						'backgroundSubtle',
						tok(
							color.success.backgroundSubtle,
							vars.success.backgroundSubtle,
							'Soft success surface / banner fill.',
						),
					),
				],
			},
			{
				title: 'Warning',
				tokens: [
					named(
						'text',
						tok(
							color.warning.text,
							vars.warning.text,
							'Caution text (red for AA on white).',
						),
					),
					named(
						'foreground',
						tok(
							color.warning.foreground,
							vars.warning.foreground,
							'Caution icons and accents.',
						),
					),
					named(
						'backgroundStrong',
						tok(
							color.warning.backgroundStrong,
							vars.warning.backgroundStrong,
							'Strong warning surface — use gray-900 text.',
						),
					),
					named(
						'backgroundSubtle',
						tok(
							color.warning.backgroundSubtle,
							vars.warning.backgroundSubtle,
							'Soft warning surface / banner fill.',
						),
					),
				],
			},
			{
				title: 'Alert',
				tokens: [
					named(
						'text',
						tok(
							color.alert.text,
							vars.alert.text,
							'Error text on white.',
						),
					),
					named(
						'foreground',
						tok(
							color.alert.foreground,
							vars.alert.foreground,
							'Error icons and accents.',
						),
					),
					named(
						'backgroundStrong',
						tok(
							color.alert.backgroundStrong,
							vars.alert.backgroundStrong,
							'Strong error surface — white text.',
						),
					),
					named(
						'backgroundSubtle',
						tok(
							color.alert.backgroundSubtle,
							vars.alert.backgroundSubtle,
							'Error banner / surface fill.',
						),
					),
				],
			},
		],
	},
	{
		group: 'button',
		title: 'Button',
		blurb: 'Fills, borders and text for the button variants.',
		sections: [
			{
				title: 'Primary — solid',
				tokens: [
					named(
						'default',
						tok(
							color.button.primary.solid.default,
							vars.button.primary.solid.default,
							'Resting fill.',
						),
					),
					named(
						'hover',
						tok(
							color.button.primary.solid.hover,
							vars.button.primary.solid.hover,
							'Hover fill.',
						),
					),
					named(
						'border',
						tok(
							color.button.primary.solid.border,
							vars.button.primary.solid.border,
							'Border colour.',
						),
					),
					named(
						'pressed',
						tok(
							color.button.primary.solid.pressed,
							vars.button.primary.solid.pressed,
							'Pressed fill.',
						),
					),
					named(
						'text',
						tok(
							color.button.primary.solid.text,
							vars.button.primary.solid.text,
							'Label colour.',
						),
					),
				],
			},
			{
				title: 'Primary — outlined',
				tokens: [
					named(
						'border',
						tok(
							color.button.primary.outlined.border,
							vars.button.primary.outlined.border,
							'Border colour.',
						),
					),
					named(
						'text',
						tok(
							color.button.primary.outlined.text,
							vars.button.primary.outlined.text,
							'Label colour.',
						),
					),
					named(
						'hover',
						tok(
							color.button.primary.outlined.hover,
							vars.button.primary.outlined.hover,
							'Hover fill.',
						),
					),
					named(
						'pressed',
						tok(
							color.button.primary.outlined.pressed,
							vars.button.primary.outlined.pressed,
							'Pressed fill.',
						),
					),
				],
			},
			{
				title: 'Critical — solid',
				tokens: [
					named(
						'default',
						tok(
							color.button.critical.solid.default,
							vars.button.critical.solid.default,
							'Resting fill.',
						),
					),
					named(
						'hover',
						tok(
							color.button.critical.solid.hover,
							vars.button.critical.solid.hover,
							'Hover fill.',
						),
					),
					named(
						'border',
						tok(
							color.button.critical.solid.border,
							vars.button.critical.solid.border,
							'Border colour.',
						),
					),
					named(
						'pressed',
						tok(
							color.button.critical.solid.pressed,
							vars.button.critical.solid.pressed,
							'Pressed fill.',
						),
					),
					named(
						'text',
						tok(
							color.button.critical.solid.text,
							vars.button.critical.solid.text,
							'Label colour.',
						),
					),
				],
			},
			{
				title: 'Critical — outlined',
				tokens: [
					named(
						'border',
						tok(
							color.button.critical.outlined.border,
							vars.button.critical.outlined.border,
							'Border colour.',
						),
					),
					named(
						'text',
						tok(
							color.button.critical.outlined.text,
							vars.button.critical.outlined.text,
							'Label colour.',
						),
					),
					named(
						'hover',
						tok(
							color.button.critical.outlined.hover,
							vars.button.critical.outlined.hover,
							'Hover fill.',
						),
					),
					named(
						'pressed',
						tok(
							color.button.critical.outlined.pressed,
							vars.button.critical.outlined.pressed,
							'Pressed fill.',
						),
					),
				],
			},
			{
				title: 'Secondary',
				tokens: [
					named(
						'border',
						tok(
							color.button.secondary.border,
							vars.button.secondary.border,
							'Border colour.',
						),
					),
					named(
						'hover',
						tok(
							color.button.secondary.hover,
							vars.button.secondary.hover,
							'Hover fill.',
						),
					),
					named(
						'pressed',
						tok(
							color.button.secondary.pressed,
							vars.button.secondary.pressed,
							'Pressed fill.',
						),
					),
					named(
						'text',
						tok(
							color.button.secondary.text,
							vars.button.secondary.text,
							'Label colour.',
						),
					),
				],
			},
			{
				title: 'Disabled',
				tokens: [
					named(
						'fill',
						tok(
							color.button.disabled.fill,
							vars.button.disabled.fill,
							'Disabled button fill.',
						),
					),
					named(
						'text',
						tok(
							color.button.disabled.text,
							vars.button.disabled.text,
							'Disabled button label.',
						),
					),
				],
			},
		],
	},
	{
		group: 'link',
		title: 'Link',
		blurb: 'Text link / anchor colours, separate from buttons.',
		sections: [
			{
				tokens: [
					named(
						'primary',
						tok(
							color.link.primary,
							vars.link.primary,
							'Default link colour.',
						),
					),
					named(
						'secondary',
						tok(
							color.link.secondary,
							vars.link.secondary,
							'Secondary link colour.',
						),
					),
					named(
						'hover',
						tok(
							color.link.hover,
							vars.link.hover,
							'Hover state — darkens.',
						),
					),
					named(
						'pressed',
						tok(
							color.link.pressed,
							vars.link.pressed,
							'Pressed state.',
						),
					),
					named(
						'critical',
						tok(
							color.link.critical,
							vars.link.critical,
							'Destructive link colour.',
						),
					),
					named(
						'criticalHover',
						tok(
							color.link.criticalHover,
							vars.link.criticalHover,
							'Destructive link — hover (darkens).',
						),
					),
					named(
						'criticalPressed',
						tok(
							color.link.criticalPressed,
							vars.link.criticalPressed,
							'Destructive link — pressed.',
						),
					),
				],
			},
		],
	},
	{
		group: 'illustration',
		title: 'Illustration',
		blurb: 'Fills and accents used inside AutoGuru spot illustrations.',
		sections: [
			{
				tokens: [
					named(
						'brightSide',
						tok(
							color.illustration.brightSide,
							vars.illustration.brightSide,
							'Lit side of a form.',
						),
					),
					named(
						'darkSide',
						tok(
							color.illustration.darkSide,
							vars.illustration.darkSide,
							'Shaded side of a form.',
						),
					),
					named(
						'lightFill',
						tok(
							color.illustration.lightFill,
							vars.illustration.lightFill,
							'Light neutral fill.',
						),
					),
					named(
						'mainFill',
						tok(
							color.illustration.mainFill,
							vars.illustration.mainFill,
							'Primary neutral fill.',
						),
					),
					named(
						'outline',
						tok(
							color.illustration.outline,
							vars.illustration.outline,
							'Outline / stroke colour.',
						),
					),
					named(
						'shadow',
						tok(
							color.illustration.shadow,
							vars.illustration.shadow,
							'Contact shadow (semi-transparent).',
						),
					),
					named(
						'white',
						tok(
							color.illustration.white,
							vars.illustration.white,
							'Highlight / white fill.',
						),
					),
					named(
						'yellowDarkSide',
						tok(
							color.illustration.yellowDarkSide,
							vars.illustration.yellowDarkSide,
							'Shaded side of a yellow accent.',
						),
					),
					named(
						'yellowMainFill',
						tok(
							color.illustration.yellowMainFill,
							vars.illustration.yellowMainFill,
							'Main yellow accent fill.',
						),
					),
				],
			},
		],
	},
];

/**
 * Reverse lookup: resolved hex → palette token name (e.g. `#212338` →
 * `gray-900`) so each card can show its palette equivalent, as the palette
 * page does. Alpha values (`#RRGGBBAA`) have no palette equivalent and return
 * `undefined`.
 */
const paletteName: Record<string, string> = {};
for (const [hue, steps] of Object.entries(colourMap)) {
	if (typeof steps === 'string') {
		paletteName[steps.toLowerCase()] = hue;
	} else {
		for (const [step, hex] of Object.entries(steps)) {
			paletteName[hex.toLowerCase()] = `${hue}-${step}`;
		}
	}
}

/** Plain-language note for each sub-group, so its purpose is obvious. */
const sectionGloss: Record<string, string> = {
	Info: 'Informational messages and hints.',
	Success: 'Positive confirmation messages.',
	Warning: 'Caution messages.',
	Alert: 'Errors and destructive warnings.',
	'Primary — solid': 'Filled primary button — default, hover, pressed fill & label.',
	'Primary — outlined': 'Outlined primary button — border/label, hover & pressed fills.',
	'Critical — solid': 'Filled destructive button.',
	'Critical — outlined': 'Outlined destructive button.',
	Secondary: 'Neutral, low-emphasis button.',
	Disabled: 'Disabled button fill & label.',
};

// Pick the readable text colour for a fill (alpha values use their opaque base).
const textOn = (value: string): string => {
	const hex = value.length > 7 ? value.slice(0, 7) : value;
	return getContrastRatio(colourMap.white, hex) <
		getContrastRatio(colourMap.gray['900'], hex)
		? colourMap.white
		: colourMap.gray['900'];
};

/**
 * One token: a colour card (like the palette "Core brand" tiles) with the
 * name, palette step and hex inside, and the CSS variable underneath it.
 */
const TokenCard = ({ name, value, cssVar, description }: Token) => {
	const palette = paletteName[value.toLowerCase()];
	return (
		<div
			className={swatchCell}
			title={description ? `${cssVar} — ${description}` : cssVar}
		>
			<div
				className={swatchCard}
				style={{ background: value, color: textOn(value) }}
			>
				<div className={swatchCardPalette}>
					{palette ?? value.toUpperCase()}
				</div>
				{palette && (
					<div className={swatchCardHex}>{value.toUpperCase()}</div>
				)}
			</div>
			<div className={swatchCardName}>{spacesFromCamelCase(name)}</div>
			<code className={swatchCardVar} title={cssVar}>
				{cssVar}
			</code>
		</div>
	);
};

export const ThemeColours: Story = {
	render: () => (
		<FlexStack gap="8">
			<hgroup>
				<p className={eyebrow}>AutoGuru Design System 2026</p>
				<Heading>Theme Colours</Heading>
				<p className={pageLead}>
					The semantic colour set, mirrored from Figma and organised
					by how each token is used.
				</p>
			</hgroup>
			<FlexStack gap="8">
				{themeColours.map(({ group, title, sections }) => {
					const count = sections.reduce(
						(total, section) => total + section.tokens.length,
						0,
					);
					return (
						<section key={group}>
							<div className={groupHeaderRow}>
								<h2 className={groupHeading}>{title}</h2>
								<span
									className={groupCount}
									aria-label={`${count} tokens`}
								>
									{count}
								</span>
							</div>
							<FlexStack gap="5">
								{sections.map((section, index) => (
									<FlexStack
										gap="3"
										key={section.title ?? `${group}-${index}`}
									>
										{section.title && (
											<div className={subGlossRow}>
												<span className={colourTableSub}>
													{section.title}
												</span>
												{sectionGloss[section.title] && (
													<span className={subGloss}>
														{
															sectionGloss[
																section.title
															]
														}
													</span>
												)}
											</div>
										)}
										<div className={swatchGrid}>
											{section.tokens.map((entry) => (
												<TokenCard
													key={`${section.title ?? ''}-${entry.name}`}
													{...entry}
												/>
											))}
										</div>
									</FlexStack>
								))}
							</FlexStack>
						</section>
					);
				})}
			</FlexStack>
		</FlexStack>
	),
};
