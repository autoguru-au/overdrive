import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading';
import { colourMap } from '../themes/base/colours';
import { tokens } from '../themes/base/tokens';
import { getContrastRatio } from '../themes/helpers';
import { overdriveTokens } from '../themes/theme.css';

import {
	labels,
	tokenCard,
	tokenCode,
	tokenDescription,
	tokenGrid,
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
						'tertiaryInactive',
						tok(
							color.foreground.tertiaryInactive,
							vars.foreground.tertiaryInactive,
							'Inactive / disabled text and icons.',
						),
					),
					named(
						'tertiaryInactiveLight',
						tok(
							color.foreground.tertiaryInactiveLight,
							vars.foreground.tertiaryInactiveLight,
							'Inactive text on lighter surfaces — the softest step.',
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
						'background',
						tok(
							color.info.background,
							vars.info.background,
							'Informational banner / surface fill.',
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
						'backgroundDark',
						tok(
							color.success.backgroundDark,
							vars.success.backgroundDark,
							'Strong success surface — white text.',
						),
					),
					named(
						'backgroundLight',
						tok(
							color.success.backgroundLight,
							vars.success.backgroundLight,
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
						'backgroundDark',
						tok(
							color.warning.backgroundDark,
							vars.warning.backgroundDark,
							'Strong warning surface — use gray-900 text.',
						),
					),
					named(
						'backgroundLight',
						tok(
							color.warning.backgroundLight,
							vars.warning.backgroundLight,
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
						'background',
						tok(
							color.alert.background,
							vars.alert.background,
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
						'borderPressed',
						tok(
							color.button.primary.solid.borderPressed,
							vars.button.primary.solid.borderPressed,
							'Border, and pressed fill.',
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
						'borderText',
						tok(
							color.button.primary.outlined.borderText,
							vars.button.primary.outlined.borderText,
							'Border and label colour.',
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
						'borderPressed',
						tok(
							color.button.critical.solid.borderPressed,
							vars.button.critical.solid.borderPressed,
							'Border, and pressed fill.',
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
						'borderText',
						tok(
							color.button.critical.outlined.borderText,
							vars.button.critical.outlined.borderText,
							'Border and label colour.',
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
				title: 'Linked text',
				tokens: [
					named(
						'primary',
						tok(
							color.button.linkedText.primary,
							vars.button.linkedText.primary,
							'Default link colour.',
						),
					),
					named(
						'secondary',
						tok(
							color.button.linkedText.secondary,
							vars.button.linkedText.secondary,
							'Secondary link colour.',
						),
					),
					named(
						'hover',
						tok(
							color.button.linkedText.hover,
							vars.button.linkedText.hover,
							'Hover state.',
						),
					),
					named(
						'pressed',
						tok(
							color.button.linkedText.pressed,
							vars.button.linkedText.pressed,
							'Pressed state.',
						),
					),
					named(
						'critical',
						tok(
							color.button.linkedText.critical,
							vars.button.linkedText.critical,
							'Destructive link colour.',
						),
					),
					named(
						'criticalHover',
						tok(
							color.button.linkedText.criticalHover,
							vars.button.linkedText.criticalHover,
							'Destructive link — hover.',
						),
					),
					named(
						'criticalPressed',
						tok(
							color.button.linkedText.criticalPressed,
							vars.button.linkedText.criticalPressed,
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

// smaller inverted ratio = higher contrast
const textOn = (value: string): string => {
	// alpha (#RRGGBBAA) can't be measured; use its opaque base for the label.
	const hex = value.length > 7 ? value.slice(0, 7) : value;
	return getContrastRatio(colourMap.white, hex) <
		getContrastRatio(colourMap.gray['900'], hex)
		? colourMap.white
		: colourMap.gray['900'];
};

const ThemeToken = ({ name, value, cssVar, description }: Token) => (
	<div className={tokenCard}>
		<div
			style={{
				background: value,
				borderRadius: 8,
				boxShadow: `inset 0 0 0 1px ${colourMap.gray['300']}`,
				height: 80,
				padding: '10px 12px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				color: textOn(value),
			}}
		>
			{paletteName[value.toLowerCase()] && (
				<div
					style={{ fontWeight: 700, fontSize: 13, lineHeight: 1.4 }}
				>
					{paletteName[value.toLowerCase()]}
				</div>
			)}
			<div style={{ fontSize: 11, opacity: 0.85, lineHeight: 1.4 }}>
				{value.toUpperCase()}
			</div>
		</div>
		<div className={labels} style={{ fontWeight: 600, fontSize: 14 }}>
			{spacesFromCamelCase(name)}
		</div>
		<div className={tokenDescription}>{description}</div>
		<code className={tokenCode}>{cssVar}</code>
	</div>
);

export const ThemeColours: Story = {
	render: () => (
		<FlexStack gap="7">
			<hgroup>
				<Heading>Theme Colours</Heading>
				<p style={{ maxWidth: 720 }}>
					The AutoGuru Design System 2026 semantic colour set, mirrored
					from Figma and organised by usage.
				</p>
			</hgroup>
			<FlexStack gap="7">
				{themeColours.map(({ group, title, blurb, sections }) => (
					<FlexStack gap="4" key={group}>
						<hgroup>
							<Heading as="h2" className={labels}>
								{title}
							</Heading>
							<p
								style={{
									margin: '4px 0 0',
									fontSize: 14,
									color: colourMap.gray['600'],
								}}
							>
								{blurb}
							</p>
						</hgroup>
						{sections.map((section, index) => (
							<FlexStack
								gap="3"
								key={section.title ?? `${group}-${index}`}
							>
								{section.title && (
									<div
										style={{
											fontSize: 13,
											fontWeight: 700,
											color: colourMap.gray['900'],
											borderBottom: `1px solid ${colourMap.gray['200']}`,
											paddingBottom: 4,
										}}
									>
										{section.title}
									</div>
								)}
								<div className={tokenGrid}>
									{section.tokens.map((entry) => (
										<ThemeToken key={entry.name} {...entry} />
									))}
								</div>
							</FlexStack>
						))}
					</FlexStack>
				))}
			</FlexStack>
		</FlexStack>
	),
};
