import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Heading } from '../components/Heading';
import { tokens } from '../themes/base/tokens';

import { Box, Stack, type Sprinkles } from './helpers';
import { labels, titles } from './helpers/styles.css';

const widthItems = Object.keys(tokens.border.width);
const radiusItems = Object.keys(tokens.border.radius);

const Widths = () => {
	return (
		<Stack>
			<Heading is="h2" className={titles}>
				Width
			</Heading>

			{widthItems.map((width) => (
				<Stack space="sm" horizontal key={width}>
					<Box
						background="black100"
						borderColor="dark"
						borderRadius="1"
						borderStyle="solid"
						borderWidth={width as Sprinkles['borderWidth']}
						size="9"
					/>
					<p className={labels}>{width}</p>
				</Stack>
			))}
		</Stack>
	);
};

const Radius = () => {
	return (
		<Stack>
			<Heading is="h2" className={titles}>
				Radius
			</Heading>

			{radiusItems.sort().map((radius) => (
				<Stack space="sm" horizontal key={radius}>
					<Box
						background="black500"
						borderColor="gray"
						borderRadius={radius as Sprinkles['borderRadius']}
						size="9"
						style={
							radius === 'pill' ? { height: '74px' } : undefined
						}
					/>
					<p className={labels}>{radius}</p>
				</Stack>
			))}
		</Stack>
	);
};

const meta: Meta = {
	title: 'Foundation/Borders',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const Borders: Story = {
	render: () => (
		<Stack space="lg" horizontal>
			<Heading is="h1">Borders</Heading>
			<Widths />
			<Radius />
		</Stack>
	),
};
