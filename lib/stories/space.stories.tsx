import type { Meta, StoryObj } from '@storybook/react-vite';
import clsx from 'clsx';
import React from 'react';

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
} from './helpers/styles.css';

interface SpaceStep {
	/** The rendered pixel value — cross-checked against `tokens.space` below. */
	px: string;
	/** The token key consumers pass as `space="…"`. */
	tokenKey: keyof typeof tokens.space;
}

/**
 * The complete DS-2026 spacing ladder, in visual order. This is an explicit
 * array rather than `Object.keys(tokens.space)` because JS auto-sorts
 * integer-like object keys, which would scramble the `40px`/`64px`/
 * `80px` entries relative to the ordinal keys.
 */
const SPACE_SCALE: SpaceStep[] = [
	{ px: '0px', tokenKey: 'none' },
	{ px: '2px', tokenKey: '0' },
	{ px: '4px', tokenKey: '1' },
	{ px: '8px', tokenKey: '2' },
	{ px: '12px', tokenKey: '3' },
	{ px: '16px', tokenKey: '4' },
	{ px: '20px', tokenKey: '5' },
	{ px: '24px', tokenKey: '6' },
	{ px: '32px', tokenKey: '7' },
	{ px: '40px', tokenKey: '40px' },
	{ px: '48px', tokenKey: '8' },
	{ px: '64px', tokenKey: '64px' },
	{ px: '80px', tokenKey: '80px' },
	{ px: '96px', tokenKey: '9' },
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

const SpaceRow = ({ px, tokenKey }: SpaceStep) => (
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
	</>
);

const SpaceScale = () => (
	<FlexStack gap="5">
		<div className={sprinkles({ maxWidth: 'medium' })}>
			<Text as="p">
				The complete spacing scale. Pass any of these keys to a{' '}
				<code className={tokenCode}>space</code> prop.
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
		<FlexStack gap="8">
			<Heading as="h1">Space</Heading>
			<SpaceScale />
			<Breakpoints />
		</FlexStack>
	),
};
