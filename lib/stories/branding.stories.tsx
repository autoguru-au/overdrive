import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ReactNode } from 'react';

import { Alert } from '../components/Alert';
import { Badge } from '../components/Badge';
import { Box } from '../components/Box/Box';
import { Button } from '../components/Button/Button';
import { CheckBox } from '../components/CheckBox';
import { FlexInline } from '../components/Flex/FlexInline';
import { Heading } from '../components/Heading/Heading';
import { OverdriveProvider } from '../components/OverdriveProvider';
import type { ColorOverrides } from '../components/OverdriveProvider/useColorOverrides';
import { Radio, RadioGroup } from '../components/Radio';
import { Stack } from '../components/Stack';
import { Switch } from '../components/Switch';
import { Text } from '../components/Text/Text';
import { TextLink } from '../components/TextLink';

/* -------------------------------------------------------------------------
 * The brands shown side by side
 * ---------------------------------------------------------------------- */

interface Brand {
	/** Card heading. */
	name: string;
	/** `undefined` renders the theme untouched — the control case. */
	overrides?: Partial<ColorOverrides>;
	/** Why this brand is in the set. */
	note: string;
}

const BRANDS: Brand[] = [
	{
		name: 'No branding',
		note: 'The base theme as every unbranded consumer sees it.',
	},
	{
		name: 'Violet',
		overrides: {
			primaryBackground: '#6d39a8',
			primaryForeground: '#ffffff',
		},
		note: 'A dark brand, with its on-brand content supplied as white. Only two values passed — links and focus rings default from the brand.',
	},
	{
		name: 'Amber (one colour)',
		overrides: {
			primaryBackground: '#e5bc01',
		},
		note: 'The whole card from a single value. On-brand content derives as dark ink, and the link darkens to #705c00 to stay legible on pale surfaces while keeping the brand on dark ones.',
	},
	{
		name: 'Amber + explicit link',
		overrides: {
			primaryBackground: '#e5bc01',
			linkColor: '#0b5cd5',
		},
		note: 'An explicit linkColor wins over the brand — for a brand whose accent does not make a legible link.',
	},
];

/* -------------------------------------------------------------------------
 * The three groups
 * ---------------------------------------------------------------------- */

const GroupLabel = ({ children }: { children: ReactNode }) => (
	<Text size="2" colour="light">
		{children}
	</Text>
);

/**
 * Driven by `primaryBackground` alone — everything else derives from it.
 *
 * Both buttons now ride the DS-2026 `color.button.primary.*` sets: the solid
 * one `…/solid.*` (it used to read the legacy `colours.intent.primary.*`), the
 * outlined one `…/outlined.*`. From one supplied colour, `useColorOverrides`
 * produces nine button values — the fill verbatim, hover, pressed and border
 * shaded from it, and the label picked for contrast, so a pale brand gets dark
 * ink and a dark brand gets white.
 */
const ChangesWithBrand = () => (
	<Stack space="2">
		<GroupLabel>Buttons</GroupLabel>
		<FlexInline gap="3" justify="center">
			<Button variant="primary">Button</Button>
			<Button variant="primary" outlined>
				Button
			</Button>
		</FlexInline>
	</Stack>
);

/**
 * Driven by `color.brand.solid` / `color.brand.onSolid`. Off-states stay
 * neutral — only the "on" surface carries the brand, and the glyph on top of it
 * flips between white and dark ink for contrast.
 */
const SelectionControls = ({ idPrefix }: { idPrefix: string }) => (
	<Stack space="2">
		<GroupLabel>Selection controls (on / off)</GroupLabel>
		{/* Switch and CheckableBase have no common baseline, so centre them. */}
		<FlexInline gap="4" justify="center">
			<Switch isSelected aria-label="On" />
			<Switch aria-label="Off" />
			<CheckBox checked value="on" aria-label="Checked" />
			<CheckBox value="off" aria-label="Unchecked" />
			<Box display="inline-flex">
				<RadioGroup name={`${idPrefix}-on`} value="on">
					<Radio value="on" aria-label="Selected" />
				</RadioGroup>
			</Box>
			<Box display="inline-flex">
				<RadioGroup name={`${idPrefix}-off`} value="">
					<Radio value="off" aria-label="Not selected" />
				</RadioGroup>
			</Box>
		</FlexInline>
	</Stack>
);

/**
 * Defaults from `primaryBackground`, and `linkColor` overrides it. The colour
 * is not used verbatim: one inline var serves every surface, so it is shaded per
 * surface
 * until it clears 4.5:1 — darker for a pale card, lighter for a dark fill. The
 * dark Box below carries no extra class; `backgroundColor` picks the surface's
 * link colour on its own. The same token drives every focus ring in the
 * library, so both follow.
 */
const OptInGroup = () => (
	<Stack space="2">
		<GroupLabel>Links — from the brand, or linkColor</GroupLabel>
		<FlexInline gap="4" justify="center">
			<TextLink href="#branding">A link</TextLink>
			<Text colour="primary">colour=&quot;primary&quot;</Text>
		</FlexInline>
		<Box backgroundColor="gray900" borderRadius="1" padding="3">
			<FlexInline gap="4" justify="center">
				<TextLink href="#branding">A link on a dark surface</TextLink>
			</FlexInline>
			<Box
				backgroundColor="white"
				borderRadius="1"
				marginTop="3"
				padding="3"
			>
				<FlexInline gap="4" justify="center">
					<TextLink href="#branding">
						A link on a card inside it
					</TextLink>
				</FlexInline>
			</Box>
		</Box>
	</Stack>
);

/**
 * Status colours. These must render identically in every card — a tenant hue
 * must never make a success message look like the brand.
 */
const FixedAcrossBrands = () => (
	<Stack space="3">
		<GroupLabel>Fixed — status never follows a brand</GroupLabel>
		<FlexInline gap="2">
			<Badge label="Success" colour="green" />
			<Badge label="Critical" colour="red" />
			<Badge label="Info" colour="blue" />
			<Badge label="Caution" colour="yellow" />
		</FlexInline>
		<FlexInline gap="3">
			<Alert intent="success" inline>
				Success message
			</Alert>
			<Alert intent="information" inline>
				Info message
			</Alert>
		</FlexInline>
	</Stack>
);

/* -------------------------------------------------------------------------
 * One card per brand
 * ---------------------------------------------------------------------- */

const BrandCard = ({ name, overrides, note }: Brand) => {
	const idPrefix = name.toLowerCase().replaceAll(/\W+/g, '-');

	return (
		<Box padding="5" borderWidth="1" borderColour="light" borderRadius="lg">
			<OverdriveProvider colorOverrides={overrides}>
				<Stack space="4">
					<Stack space="1">
						<Heading as="h3">{name}</Heading>
						{/* Reserved so a two-line note can't shift the groups below it out of line with the next card. */}
						<div style={{ minHeight: '2.75rem' }}>
							<Text size="2" colour="light">
								{note}
							</Text>
						</div>
					</Stack>
					<ChangesWithBrand />
					<SelectionControls idPrefix={idPrefix} />
					<OptInGroup />
					<FixedAcrossBrands />
				</Stack>
			</OverdriveProvider>
		</Box>
	);
};

const meta: Meta = {
	title: 'Foundation/Branding',
};

export default meta;
type Story = StoryObj;

/**
 * What a tenant's brand colour reaches, and what it deliberately does not.
 *
 * Branding is delivered entirely through `OverdriveProvider`'s `colorOverrides`
 * prop — there is no separate tenant theming system. In production the value
 * arrives as one or two colours from a GraphQL `TenantBranding` field:
 *
 * ```tsx
 * <OverdriveProvider
 *   colorOverrides={{
 *     primaryBackground: brandColour,
 *     primaryForeground: brandTextColour, // optional — derived when absent
 *     linkColor: brandColour,             // optional — opt in per app
 *   }}
 * >
 * ```
 *
 * The control sits on its own row: no overrides at all, so it shows what every
 * unbranded consumer renders today. The brands share the row beneath it. In each
 * card the first three groups should differ from the control; the last group must
 * be identical in all three.
 *
 * Anything not shown here does **not** follow a brand yet — notably a text
 * input's active border, Tabs, ToggleButtons, a Calendar's selected day and an
 * OptionGrid's selected card, all of which still read the body-text token.
 */
export const Branding: Story = {
	render: () => {
		const [control, ...brands] = BRANDS;

		return (
			<div
				style={{ display: 'grid', gap: '24px', justifyItems: 'start' }}
			>
				<BrandCard {...control} />
				<div
					style={{
						display: 'grid',
						gap: '24px',
						gridTemplateColumns: `repeat(${brands.length}, minmax(26rem, max-content))`,
						alignItems: 'stretch',
					}}
				>
					{brands.map((brand) => (
						<BrandCard key={brand.name} {...brand} />
					))}
				</div>
			</div>
		);
	},
};
