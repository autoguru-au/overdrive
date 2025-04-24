import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Heading } from '../components/Heading';
import { overdriveTokens } from '../themes';
import { tokens } from '../themes/base/tokens';

import { Box, Stack, type Sprinkles } from './helpers';
import { titles } from './helpers/styles.css';

const { border, elevation } = tokens;
const elevationItems = Object.keys(elevation);
const widthItems = Object.keys(border.width);
const radiusItems = Object.keys(border.radius);

const Elevation = () => (
	<Stack>
		<Heading as="h2" className={titles}>
			Elevation
		</Heading>

		{elevationItems.map((elevation) => (
			<Stack space="sm" alignItems="center" horizontal key={elevation}>
				<Box
					borderRadius="1"
					boxShadow={elevation as Sprinkles['boxShadow']}
					size="9"
					style={{
						backgroundColor: overdriveTokens.color.gamut.gray[100],
					}}
				/>
				<p>{elevation}</p>
			</Stack>
		))}
	</Stack>
);

const Widths = () => {
	return (
		<Stack>
			<Heading as="h2" className={titles}>
				Width
			</Heading>

			{widthItems.map((width) => (
				<Stack space="sm" alignItems="center" horizontal key={width}>
					<Box
						borderColor="dark"
						borderRadius="1"
						borderStyle="solid"
						borderWidth={width as Sprinkles['borderWidth']}
						size="9"
						style={{
							backgroundColor:
								overdriveTokens.color.gamut.black[100],
						}}
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
			<Heading as="h2" className={titles}>
				Radius
			</Heading>

			{radiusItems.map((radius) => (
				<Stack space="sm" alignItems="center" horizontal key={radius}>
					<Box
						alignItems="center"
						borderColor="gray"
						borderRadius={radius as Sprinkles['borderRadius']}
						display="flex"
						justifyContent="center"
						size="9"
						style={{
							backgroundColor:
								overdriveTokens.color.gamut.black[700],
							color: overdriveTokens.color.gamut.white,
							fontSize:
								overdriveTokens.typography.size[3].fontSize,
							...(radius === 'pill'
								? { height: '64px' }
								: undefined),
						}}
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
			<Heading as="h1">
				Borders &amp; <br /> Elevation
			</Heading>
			<Widths />
			<Radius />
			<Elevation />
		</Stack>
	),
};
