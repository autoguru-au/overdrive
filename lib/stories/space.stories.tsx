import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Heading } from '../components/Heading';
import { overdriveTokens } from '../themes';
import { globalTokens } from '../themes/base/tokens';
import { breakpoints } from '../themes/makeTheme';

import { Box, Stack, type Sprinkles } from './helpers';
import { labels, small, titles } from './helpers/styles.css';

const { space } = globalTokens;
const spaceItems = Object.keys(space).filter((val) => val !== 'none');

const SpaceScale = () => (
	<Stack space="sm">
		<Heading is="h2" className={titles}>
			Space scale
		</Heading>

		{spaceItems.map((space) => (
			<Stack space="sm" alignItems="center" horizontal key={space}>
				<p className={labels}>{space}</p>
				<Box
					height="5"
					width={space as Sprinkles['width']}
					style={{
						backgroundColor: overdriveTokens.color.gamut.black[700],
					}}
				/>
				<p className={small}>{globalTokens.space[space]}</p>
			</Stack>
		))}
	</Stack>
);

const breakpointItems = Object.entries(breakpoints);
const Breakpoints = () => {
	return (
		<Stack space="sm">
			<Heading is="h2" className={titles}>
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
		</Stack>
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
		<Stack gap="8" horizontal>
			<Heading is="h1">Space</Heading>
			<SpaceScale />
			<Breakpoints />
		</Stack>
	),
};
