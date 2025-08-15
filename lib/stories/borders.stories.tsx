import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box, type BoxProps } from '../components/Box/Box';
import { FlexInline } from '../components/Flex/FlexInline';
import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading/Heading';
import { overdriveTokens } from '../themes';
import { tokens } from '../themes/base/tokens';

import { titles } from './helpers/styles.css';

const { border, elevation } = tokens;
const elevationItems = Object.keys(elevation);
const widthItems = Object.keys(border.width);
const radiusItems = Object.keys(border.radius);

const Elevation = () => (
	<FlexStack gap="6">
		<Heading as="h2" className={titles}>
			Elevation
		</Heading>

		{elevationItems.map((elevation) => (
			<FlexInline gap="5" justify="center" key={elevation}>
				<Box
					borderRadius="1"
					boxShadow={elevation as BoxProps['boxShadow']}
					size="9"
					style={{
						backgroundColor: overdriveTokens.color.gamut.gray[100],
					}}
				/>
				<p>{elevation}</p>
			</FlexInline>
		))}
	</FlexStack>
);

const Widths = () => {
	return (
		<FlexStack gap="6">
			<Heading as="h2" className={titles}>
				Width
			</Heading>

			{widthItems.map((width) => (
				<FlexInline gap="5" justify="center" key={width}>
					<Box
						borderColor="hard"
						borderRadius="1"
						borderStyle="solid"
						borderWidth={width as BoxProps['borderWidth']}
						size="9"
						style={{
							backgroundColor:
								overdriveTokens.color.gamut.black[100],
						}}
					/>
					<p>{width}</p>
				</FlexInline>
			))}
		</FlexStack>
	);
};

const Radius = () => {
	return (
		<FlexStack gap="6">
			<Heading as="h2" className={titles}>
				Radius
			</Heading>

			{radiusItems.map((radius) => (
				<FlexInline gap="5" justify="center" key={radius}>
					<Box
						alignItems="center"
						borderColor="soft"
						borderRadius={radius as BoxProps['borderRadius']}
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
				</FlexInline>
			))}
		</FlexStack>
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
		<FlexInline gap="8">
			<Heading as="h1">
				Borders &amp; <br /> Elevation
			</Heading>
			<Widths />
			<Radius />
			<Elevation />
		</FlexInline>
	),
};
