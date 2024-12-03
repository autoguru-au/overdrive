import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box, type BoxStyleProps } from '../lib/components/Box';
import { Heading } from '../lib/components/Heading';
import { tokens } from '../lib/themes/base/tokens';
import { BorderWidthScale } from '../lib/themes/tokens';

import {
	boxSize,
	labels,
	styleStack,
	titles,
	type StyleStackProps,
} from './styles.css';

const widthItems = Object.keys(tokens.border.width);
const radiusItems = Object.keys(tokens.border.radius);

type StackProps = StyleStackProps & { children: React.ReactNode };
const Stack = ({ children, ...props }: StackProps) => (
	<div className={styleStack(props)}>{children}</div>
);

const Widths = () => {
	return (
		<Stack gap="md" vertical>
			<Heading is="h2" className={titles}>
				Border width
			</Heading>

			{widthItems.map((width) => (
				<Stack gap="sm" key={width}>
					<Box
						backgroundColour="black100"
						borderColour="neutral"
						borderRadius="1"
						borderWidth={width as BorderWidthScale}
						className={boxSize}
					/>
					<p className={labels}>{width}</p>
				</Stack>
			))}
		</Stack>
	);
};

const Radius = () => {
	return (
		<Stack gap="md" vertical>
			<Heading is="h2" className={titles}>
				Border radius
			</Heading>

			{radiusItems.sort().map((radius) => (
				<Stack gap="sm" key={radius}>
					<Box
						backgroundColour="black100"
						borderColour="neutral"
						borderRadius={radius}
						borderWidth="2"
						className={boxSize}
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
		<Stack gap="lg">
			<Heading is="h1">Borders</Heading>
			<Widths />
			<Radius />
		</Stack>
	),
};
