import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box, type BoxStyleProps } from '../lib/components/Box';
import { Heading } from '../lib/components/Heading';

import { boxSize } from './styles.css';

// import { useTheme } from '../lib/components/ThemeProvider/ThemeProvider';

const baseBorderProps: BoxStyleProps = {
	backgroundColour: 'transparent',
	borderColour: 'neutral',
	borderRadius: 'none',
	borderWidth: 'none'
}

const Borders = () => {
	return (
		<div>
			<Heading is="h1">Borders</Heading>
			<Heading is="h2">Border width</Heading>

			<p>None</p>
			<Box
				{...baseBorderProps}
				className={boxSize}
			/>

			<p>1</p>
			<Box
				{...baseBorderProps}
				borderWidth="1"
				className={boxSize}
			/>

			<p>2</p>
			<Box
				{...baseBorderProps}
				borderWidth="2"
				className={boxSize}
			/>

			<p>3</p>
			<Box
				{...baseBorderProps}
				borderWidth="3"
				className={boxSize}
			/>
		</div>
	)
}

const meta: Meta = {
	title: 'Foundation/Colours',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const Colours: Story = {
	render: () => <Borders />
};
