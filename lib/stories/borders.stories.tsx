import { WarningIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import clsx from 'clsx';
import React from 'react';

import { Box, type BoxProps } from '../components/Box/Box';
import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading/Heading';
import { Icon } from '../components/Icon';
import { Text } from '../components/Text/Text';
import { overdriveTokens } from '../themes';
import { tokens } from '../themes/base/tokens';

import {
	labels,
	ladderRow,
	ladderRowDeprecated,
	radiusLadderGrid,
	small,
	spaceLadderHeaderCell,
	titles,
	tokenCode,
	tokenDescription,
	widthLadderGrid,
} from './helpers/styles.css';

const { gamut } = overdriveTokens.color;

/** Tag values used across the ladders. */
const TAG_DEPRECATED = 'deprecated';

/** Column headers, shared across the ladder tables. */
const COL = {
	px: 'Px',
	scale: 'Scale',
	value: 'Value',
	level: 'Level',
	shape: 'Shape',
	token: 'Token',
	use: 'Use',
	tag: 'Tag',
};

// ── Width ───────────────────────────────────────────────────────────────
// Single Space-style ladder: Px · Scale (line of that thickness) · Token ·
// Use · Shape (a rectangle with the border applied) · Tag. `1`/`2` are the
// documented Default/Emphasis weights; `3` (4px) is deprecated (on its way
// out — removal implied once the migration completes).
const WIDTH_LADDER: {
	tokenKey: keyof typeof tokens.border.width;
	use: string;
	tag?: string;
}[] = [
	{ tokenKey: 'none', use: 'No border' },
	{ tokenKey: '1', use: 'Default' },
	{ tokenKey: '2', use: 'Emphasis' },
	{ tokenKey: '3', use: '', tag: TAG_DEPRECATED },
];

// ── Radius ──────────────────────────────────────────────────────────────
// One table: the named scale on top, then the old aliases (deprecated —
// yellow row + warning tag) below.
interface RadiusRow {
	tokenKey: keyof typeof tokens.border.radius;
	value: string;
	use: string;
	tag?: string;
}
const RADIUS_LADDER: RadiusRow[] = [
	{ tokenKey: 'xsmall', value: '4px', use: 'XS' },
	{ tokenKey: 'small', value: '8px', use: 'S' },
	{ tokenKey: 'medium', value: '12px', use: 'M' },
	{ tokenKey: 'large', value: '16px', use: 'L' },
	{ tokenKey: 'xlarge', value: '20px', use: 'XL' },
	{ tokenKey: 'min', value: '2px', use: '', tag: TAG_DEPRECATED },
	{ tokenKey: 'sm', value: '4px', use: '', tag: TAG_DEPRECATED },
	{ tokenKey: '1', value: '4px', use: '', tag: TAG_DEPRECATED },
	{ tokenKey: 'md', value: '8px', use: '', tag: TAG_DEPRECATED },
	{ tokenKey: 'lg', value: '12px', use: '', tag: TAG_DEPRECATED },
	{ tokenKey: 'xl', value: '16px', use: '', tag: TAG_DEPRECATED },
	{ tokenKey: '2xl', value: '24px', use: '', tag: TAG_DEPRECATED },
];

// ── Shadow ──────────────────────────────────────────────────────────────
// One table: z1–z4 on top, then legacy 1–5 (deprecated). Legacy 1–4 are
// the same values as z1–z4; 5 is dropped.
interface ShadowRow {
	tokenKey: keyof typeof tokens.elevation;
	value: string;
	use: string;
	tag?: string;
}
const SHADOW_LADDER: ShadowRow[] = [
	{ tokenKey: 'none', value: 'Off', use: 'On-page / flat' },
	{
		tokenKey: 'z1',
		value: 'Shadow 1',
		use: 'Resting cards, buttons, fields',
	},
	{
		tokenKey: 'z2',
		value: 'Shadow 2',
		use: 'Pop-out cards, modals',
	},
	{ tokenKey: 'z3', value: 'Shadow 3', use: 'Popovers' },
	{ tokenKey: 'z4', value: 'Shadow 4', use: 'Large modals' },
	{ tokenKey: '1', value: '1', use: '', tag: TAG_DEPRECATED },
	{ tokenKey: '2', value: '2', use: '', tag: TAG_DEPRECATED },
	{ tokenKey: '3', value: '3', use: '', tag: TAG_DEPRECATED },
	{ tokenKey: '4', value: '4', use: '', tag: TAG_DEPRECATED },
	{ tokenKey: '5', value: '5', use: '', tag: TAG_DEPRECATED },
];

// ── Swatch renderers per section ──────────────────────────────────────────
const radiusSwatch = (tokenKey: string) => (
	<Box
		borderRadius={tokenKey as BoxProps['borderRadius']}
		style={{
			backgroundColor: gamut.gray[700],
			height: 40,
			width: tokenKey === 'pill' ? 68 : 40,
		}}
	/>
);
const shadowSwatch = (tokenKey: string) => (
	<Box
		borderColor="soft"
		borderRadius="medium"
		borderStyle="solid"
		borderWidth="1"
		boxShadow={tokenKey as BoxProps['boxShadow']}
		style={{ backgroundColor: gamut.white, height: 40, width: 64 }}
	/>
);

/** Small warning triangle; colour inherits unless overridden. */
const WarningGlyph = ({ color }: { color?: string }) => (
	<span
		style={{ color, display: 'inline-flex', height: 15, width: 15 }}
	>
		<Icon icon={WarningIcon} size="100%" />
	</span>
);

/** A ladder row (subgrid); amber-washed when `deprecated`. */
const LadderRow = ({
	deprecated,
	children,
}: {
	deprecated?: boolean;
	children: React.ReactNode;
}) => (
	<div className={clsx(ladderRow, deprecated && ladderRowDeprecated)}>
		{children}
	</div>
);

/**
 * Tag cell for the single ladders. `deprecated` gets a yellow warning icon and
 * a "do not use" hint; other tags render as plain muted text.
 */
const TagCell = ({ tag }: { tag?: string }) =>
	tag ? (
		<span style={{ alignItems: 'center', display: 'inline-flex', gap: 6 }}>
			{tag === TAG_DEPRECATED && (
				<WarningGlyph color={gamut.yellow[500]} />
			)}
			<span className={clsx(small, tokenDescription)}>
				{tag === TAG_DEPRECATED ? 'deprecated · do not use' : tag}
			</span>
		</span>
	) : (
		<span className={small} aria-hidden="true" />
	);

/** Space-style single ladder for the Width section. */
const WidthSection = () => (
	<FlexStack gap="5">
		<Heading as="h2" className={titles}>
			Width
		</Heading>
		<div className={widthLadderGrid}>
			<LadderRow>
				{[
					COL.px,
					COL.scale,
					COL.token,
					COL.use,
					COL.shape,
					COL.tag,
				].map((h) => (
					<span
						className={clsx(labels, small, spaceLadderHeaderCell)}
						key={h}
					>
						{h}
					</span>
				))}
			</LadderRow>
			{WIDTH_LADDER.map(({ tokenKey, use, tag }) => {
				const px = tokens.border.width[tokenKey];
				const thickness = Number.parseInt(px, 10);
				return (
					<LadderRow
						deprecated={tag === TAG_DEPRECATED}
						key={tokenKey}
					>
						<span className={small}>
							{tokenKey === 'none' ? '0px' : px}
						</span>
						{thickness === 0 ? (
							<span className={small} aria-hidden="true" />
						) : (
							<div
								style={{
									backgroundColor: gamut.gray[900],
									height: thickness,
									width: 160,
								}}
							/>
						)}
						<code className={tokenCode}>
							borderWidth=&quot;{tokenKey}&quot;
						</code>
						<span className={small}>{use}</span>
						<Box
							borderColor="hard"
							borderRadius="small"
							borderStyle="solid"
							borderWidth={tokenKey as BoxProps['borderWidth']}
							style={{
								backgroundColor: gamut.gray[100],
								height: 28,
								width: 44,
							}}
						/>
						<TagCell tag={tag} />
					</LadderRow>
				);
			})}
		</div>
	</FlexStack>
);

/** Radius: one table — the named scale on top, deprecated aliases below. */
const RadiusSection = () => (
	<FlexStack gap="5">
		<Heading as="h2" className={titles}>
			Radius
		</Heading>
		<Text as="p">
			The named scale (<code className={tokenCode}>xsmall</code>–
			<code className={tokenCode}>xlarge</code>) replaces the old
			abbreviated aliases, which resolve to the same px.
		</Text>

		<div className={radiusLadderGrid}>
			<LadderRow>
				{[COL.value, COL.shape, COL.token, COL.use, COL.tag].map(
					(h) => (
						<span
							className={clsx(
								labels,
								small,
								spaceLadderHeaderCell,
							)}
							key={h}
						>
							{h}
						</span>
					),
				)}
			</LadderRow>
			{RADIUS_LADDER.map(({ tokenKey, value, use, tag }) => (
				<LadderRow
					deprecated={tag === TAG_DEPRECATED}
					key={tokenKey}
				>
					<span className={small}>{value}</span>
					{radiusSwatch(tokenKey)}
					<code className={tokenCode}>
						borderRadius=&quot;{tokenKey}&quot;
					</code>
					<span className={small}>{use}</span>
					<TagCell tag={tag} />
				</LadderRow>
			))}
		</div>
	</FlexStack>
);

/** Shadow: one table — z1–z4 on top, legacy 1–5 (deprecated) below. */
const ShadowSection = () => (
	<FlexStack gap="5">
		<Heading as="h2" className={titles}>
			Shadow
		</Heading>
		<Text as="p">
			Four elevation levels <code className={tokenCode}>z1</code>–
			<code className={tokenCode}>z4</code> replace legacy{' '}
			<code className={tokenCode}>1</code>–
			<code className={tokenCode}>4</code> (identical values);{' '}
			<code className={tokenCode}>5</code> is dropped.
		</Text>

		<div className={radiusLadderGrid}>
			<LadderRow>
				{[COL.level, COL.shape, COL.token, COL.use, COL.tag].map(
					(h) => (
						<span
							className={clsx(
								labels,
								small,
								spaceLadderHeaderCell,
							)}
							key={h}
						>
							{h}
						</span>
					),
				)}
			</LadderRow>
			{SHADOW_LADDER.map(({ tokenKey, value, use, tag }) => (
				<LadderRow
					deprecated={tag === TAG_DEPRECATED}
					key={tokenKey}
				>
					<span className={small}>{value}</span>
					{shadowSwatch(tokenKey)}
					<code className={tokenCode}>
						boxShadow=&quot;{tokenKey}&quot;
					</code>
					<span className={small}>{use}</span>
					<TagCell tag={tag} />
				</LadderRow>
			))}
		</div>
	</FlexStack>
);

const meta: Meta = {
	title: 'Foundation/Borders',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const Borders: Story = {
	render: () => (
		<FlexStack gap="8">
			<Heading as="h1">Borders &amp; Shadows</Heading>

			<WidthSection />

			<RadiusSection />

			<ShadowSection />
		</FlexStack>
	),
};
