import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '../components/Box';
import { Heading } from '../components/Heading';
import { tokens } from '../themes/base/tokens';
import { BorderWidthScale } from '../themes/tokens';

import { Stack } from './helpers';
import { labels, swatch, titles } from './styles.css';

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
						backgroundColour="black100"
						borderColour="neutral"
						borderRadius="1"
						borderWidth={width as BorderWidthScale}
						className={swatch}
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
						backgroundColour="black100"
						borderColour="neutral"
						borderRadius={radius}
						borderWidth="2"
						className={swatch}
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
