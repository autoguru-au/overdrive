import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { FlexInline } from '../components/Flex/FlexInline';
import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading/Heading';
import { sprinkles, type Sprinkles } from '../styles/sprinkles.css';
import { tokens } from '../themes/base/tokens';
import { breakpoints } from '../themes/makeTheme';

import { labels, small, titles } from './helpers/styles.css';

const { space } = tokens;
const spaceItems = Object.keys(space).filter((val) => val !== 'none');

const SpaceScale = () => (
	<FlexStack gap="5">
		<Heading as="h2" className={titles}>
			Space scale
		</Heading>

		{spaceItems.map((space) => (
			<FlexInline gap="5" justify="center" key={space}>
				<p className={labels}>{space}</p>
				<div
					className={sprinkles({
						backgroundColour: 'black700',
						height: '5',
						width: space as Sprinkles['width'],
					})}
				/>
				<p className={small}>{tokens.space[space]}</p>
			</FlexInline>
		))}
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
