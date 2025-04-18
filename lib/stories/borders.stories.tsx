import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Heading } from '../components/Heading';
import { tokens } from '../themes/base/tokens';

import { Box, Stack, type Sprinkles } from './helpers';
import { titles } from './helpers/styles.css';

const { border, elevation } = tokens;
const elevationItems = Object.keys(elevation);
const widthItems = Object.keys(border.width);
const radiusItems = Object.keys(border.radius);

const Elevation = () => (
	<Stack>
		<Heading is="h2" className={titles}>
			Elevation
		</Heading>

		{elevationItems.map((elevation) => (
			<Stack space="sm" alignItems="center" horizontal key={elevation}>
				<Box
					background="gray100"
					borderRadius="1"
					boxShadow={elevation as Sprinkles['boxShadow']}
					size="9"
				/>
				<p>{elevation}</p>
			</Stack>
		))}
	</Stack>
);

const Widths = () => {
	return (
		<Stack>
			<Heading is="h2" className={titles}>
				Width
			</Heading>

			{widthItems.map((width) => (
				<Stack space="sm" alignItems="center" horizontal key={width}>
					<Box
						background="black100"
						borderColor="dark"
						borderRadius="1"
						borderStyle="solid"
						borderWidth={width as Sprinkles['borderWidth']}
						size="9"
					/>
					<p>{width}</p>
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

			{radiusItems.map((radius) => (
				<Stack space="sm" alignItems="center" horizontal key={radius}>
					<Box
						alignItems="center"
						background="black700"
						borderColor="gray"
						borderRadius={radius as Sprinkles['borderRadius']}
						color={'white'}
						display="flex"
						fontSize="3"
						justifyContent="center"
						size="9"
						style={
							radius === 'pill' ? { height: '64px' } : undefined
						}
					>
						{tokens.border.radius[radius]}
					</Box>
					<p>{radius}</p>
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
		<Stack gap="8" horizontal>
			<Heading is="h1">
				Borders &amp; <br /> Elevation
			</Heading>
			<Widths />
			<Radius />
			<Elevation />
		</Stack>
	),
};
