import type { Meta, StoryObj } from '@storybook/react-vite';
import clsx from 'clsx';
import React from 'react';

import { FlexInline } from '../components/Flex/FlexInline';
import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading/Heading';
import { Text } from '../components/Text/Text';
import { sprinkles, type Sprinkles } from '../styles/sprinkles.css';
import { tokens } from '../themes/base/tokens';
import { breakpoints } from '../themes/makeTheme';

import {
	labels,
	small,
	titles,
	tokenCode,
	tokenDescription,
} from './helpers/styles.css';

interface SpaceStep {
	/** Position in the DS-2026 Figma spacing scale (0–12), or `null` for the legacy zero value. */
	figmaIndex: number | null;
	/** The rendered pixel value — cross-checked against `tokens.space` below. */
	px: string;
	/** The token key consumers pass as `space="…"`. */
	tokenKey: keyof typeof tokens.space;
	/** `true` for the frozen ordinal keys (`1`–`9`, `none`); `false` for the new DS-2026 px-named keys. */
	legacy: boolean;
}

/**
 * The complete DS-2026 spacing ladder, in visual order. This is an explicit
 * array rather than `Object.keys(tokens.space)` because JS auto-sorts
 * integer-like object keys, which would scramble the `2px`/`40px`/`64px`/
 * `80px` entries relative to the ordinal keys.
 */
const SPACE_SCALE: SpaceStep[] = [
	{ figmaIndex: null, px: '0px', tokenKey: 'none', legacy: true },
	{ figmaIndex: 0, px: '2px', tokenKey: '2px', legacy: false },
	{ figmaIndex: 1, px: '4px', tokenKey: '1', legacy: true },
	{ figmaIndex: 2, px: '8px', tokenKey: '2', legacy: true },
	{ figmaIndex: 3, px: '12px', tokenKey: '3', legacy: true },
	{ figmaIndex: 4, px: '16px', tokenKey: '4', legacy: true },
	{ figmaIndex: 5, px: '20px', tokenKey: '5', legacy: true },
	{ figmaIndex: 6, px: '24px', tokenKey: '6', legacy: true },
	{ figmaIndex: 7, px: '32px', tokenKey: '7', legacy: true },
	{ figmaIndex: 8, px: '40px', tokenKey: '40px', legacy: false },
	{ figmaIndex: 9, px: '48px', tokenKey: '8', legacy: true },
	{ figmaIndex: 10, px: '64px', tokenKey: '64px', legacy: false },
	{ figmaIndex: 11, px: '80px', tokenKey: '80px', legacy: false },
	{ figmaIndex: 12, px: '96px', tokenKey: '9', legacy: true },
];

// Fail loudly if the curated scale above ever drifts from the real tokens,
// rather than silently rendering a mismatched ladder.
if (process.env.NODE_ENV !== 'production') {
	SPACE_SCALE.forEach(({ tokenKey, px }) => {
		if (tokens.space[tokenKey] !== px) {
			throw new Error(
				`Foundation/Space: tokens.space.${tokenKey} is "${tokens.space[tokenKey]}", expected "${px}". Update SPACE_SCALE in space.stories.tsx to match.`,
			);
		}
	});
}

const isOrdinalKey = (key: keyof typeof tokens.space) => /^[1-9]$/.test(key);
const legacyOrdinals = SPACE_SCALE.filter((step) =>
	isOrdinalKey(step.tokenKey),
);

const SpaceRow = ({ figmaIndex, px, tokenKey, legacy }: SpaceStep) => (
	<FlexInline gap="5" justify="center">
		<span className={clsx(labels, small)}>
			{figmaIndex === null ? '—' : figmaIndex}
		</span>
		<span className={small}>{px}</span>
		{tokenKey === 'none' ? (
			<span className={small}>—</span>
		) : (
			<div
				className={sprinkles({
					backgroundColor: 'gray900',
					height: '5',
					width: tokenKey as Sprinkles['width'],
				})}
			/>
		)}
		<code className={tokenCode}>space=&quot;{tokenKey}&quot;</code>
		{!legacy && (
			<span className={clsx(small, tokenDescription)}>DS-2026</span>
		)}
	</FlexInline>
);

const SpaceScale = () => (
	<FlexStack gap="5">
		<Heading as="h2" className={titles}>
			DS-2026 spacing scale
		</Heading>
		<div className={sprinkles({ maxWidth: 'medium' })}>
			<Text as="p">
				The ladder below is the complete DS-2026 spacing system,
				delivered by a mix of frozen legacy ordinal keys (
				<code className={tokenCode}>1</code>–
				<code className={tokenCode}>9</code>, never renumbered, so
				existing consumers are unaffected) and new px-named keys added
				for DS-2026 (<code className={tokenCode}>2px</code>,{' '}
				<code className={tokenCode}>40px</code>,{' '}
				<code className={tokenCode}>64px</code>,{' '}
				<code className={tokenCode}>80px</code>). The Figma column maps
				each step to the design file&apos;s 0–12 numbering.
			</Text>
		</div>
		<FlexStack gap="3">
			{SPACE_SCALE.map((step) => (
				<SpaceRow key={step.tokenKey} {...step} />
			))}
		</FlexStack>
	</FlexStack>
);

const LegacyOrdinals = () => (
	<FlexStack gap="3">
		<Heading as="h3" className={titles}>
			Legacy ordinal keys
		</Heading>
		<Text as="p" className={small}>
			The ordinal keys 1–9 (and none) are retained unchanged for backwards
			compatibility until the DS-2026 major. Where values overlap, ordinal
			and px-named keys render identically.
		</Text>
		<FlexInline gap="3">
			{legacyOrdinals.map(({ tokenKey, px }) => (
				<code
					key={tokenKey}
					className={clsx(tokenCode, tokenDescription)}
				>
					{tokenKey} → {px}
				</code>
			))}
		</FlexInline>
	</FlexStack>
);

const breakpointItems = Object.entries(breakpoints);
const Breakpoints = () => {
	return (
		<FlexStack gap="5">
			<Heading as="h2" className={titles}>
				Breakpoints
			</Heading>

			{breakpointItems.map(([name, width], idx) => (
				<div key={name}>
					<span className={labels}>{name}</span>: {width}
					{idx < breakpointItems.length - 1
						? ` to ${breakpointItems[idx + 1][1]}`
						: ' and up'}
				</div>
			))}
		</FlexStack>
	);
};

const meta: Meta = {
	title: 'Foundation/Space',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const Space: Story = {
	render: () => (
		<FlexInline gap="8">
			<Heading as="h1">Space</Heading>
			<SpaceScale />
			<LegacyOrdinals />
			<Breakpoints />
		</FlexInline>
	),
};
