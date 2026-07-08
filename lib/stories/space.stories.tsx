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
	spaceLadderGrid,
	spaceLadderHeaderCell,
	titles,
	tokenCode,
	tokenDescription,
} from './helpers/styles.css';

interface SpaceStep {
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
 * integer-like object keys, which would scramble the `40px`/`64px`/
 * `80px` entries relative to the ordinal keys.
 */
const SPACE_SCALE: SpaceStep[] = [
	{ px: '0px', tokenKey: 'none', legacy: true },
	{ px: '2px', tokenKey: '0', legacy: false },
	{ px: '4px', tokenKey: '1', legacy: true },
	{ px: '8px', tokenKey: '2', legacy: true },
	{ px: '12px', tokenKey: '3', legacy: true },
	{ px: '16px', tokenKey: '4', legacy: true },
	{ px: '20px', tokenKey: '5', legacy: true },
	{ px: '24px', tokenKey: '6', legacy: true },
	{ px: '32px', tokenKey: '7', legacy: true },
	{ px: '40px', tokenKey: '40px', legacy: false },
	{ px: '48px', tokenKey: '8', legacy: true },
	{ px: '64px', tokenKey: '64px', legacy: false },
	{ px: '80px', tokenKey: '80px', legacy: false },
	{ px: '96px', tokenKey: '9', legacy: true },
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

const SpaceRow = ({ px, tokenKey, legacy }: SpaceStep) => (
	<>
		<span className={small}>{px}</span>
		{tokenKey === 'none' ? (
			<span className={small} aria-hidden="true" />
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
		{legacy ? (
			<span className={small} aria-hidden="true" />
		) : (
			<span className={clsx(small, tokenDescription)}>new-DS</span>
		)}
	</>
);

const SpaceScale = () => (
	<FlexStack gap="5">
		<div className={sprinkles({ maxWidth: 'medium' })}>
			<Text as="p">
				The ladder below is the complete spacing system, delivered by a
				mix of frozen legacy ordinal keys (
				<code className={tokenCode}>1</code>–
				<code className={tokenCode}>9</code>, never renumbered, so
				existing consumers are unaffected) and new px-named keys (
				<code className={tokenCode}>0</code>,{' '}
				<code className={tokenCode}>40px</code>,{' '}
				<code className={tokenCode}>64px</code>,{' '}
				<code className={tokenCode}>80px</code>).
			</Text>
		</div>
		<div className={spaceLadderGrid}>
			<span className={clsx(labels, small, spaceLadderHeaderCell)}>
				Px
			</span>
			<span className={clsx(labels, small, spaceLadderHeaderCell)}>
				Scale
			</span>
			<span className={clsx(labels, small, spaceLadderHeaderCell)}>
				Token
			</span>
			<span className={clsx(labels, small, spaceLadderHeaderCell)}>
				Tag
			</span>
			{SPACE_SCALE.map((step) => (
				<SpaceRow key={step.tokenKey} {...step} />
			))}
		</div>
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
			<Breakpoints />
		</FlexInline>
	),
};
