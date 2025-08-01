import type { Meta, StoryObj } from '@storybook/react-vite';
import clsx from 'clsx';
import React from 'react';

import { FlexInline } from '../components/Flex/FlexInline';
import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading';
import { sprinkles } from '../styles/sprinkles.css';
import { overdriveTokens, type ColourValue } from '../themes';
import { colourMapWithoutWhite } from '../themes/base/colours';

import { ColourSwatch } from './helpers';
import { labels, hexPill } from './helpers/styles.css';

interface SwatchProps {
	colour: string;
	hex?: string;
	hue?: string;
}
const Swatch = ({ colour, hex, hue }: SwatchProps) => (
	<FlexInline justify="center">
		<ColourSwatch
			size="lg"
			style={{
				backgroundColor: overdriveTokens.color.gamut[hue!][colour],
			}}
		>
			<div className={hexPill}>{hex}</div>
		</ColourSwatch>
		{hue && colour.replace(hue, '')}
	</FlexInline>
);

interface PaletteSwatchesProps {
	hue: string;
	shades: ColourValue;
}
const PaletteSwatches = ({ hue, shades }: PaletteSwatchesProps) => (
	<FlexStack gap="5">
		{Object.entries(shades)
			.reverse()
			.map(([colour, hex]) => (
				<Swatch colour={colour} hex={hex} hue={hue} key={hex} />
			))}
	</FlexStack>
);

const Palettes = () => (
	<FlexInline gap="8">
		{Object.keys(colourMapWithoutWhite).map((hue) => (
			<div key={hue}>
				<Heading
					as="h3"
					className={clsx([labels, sprinkles({ marginBottom: '5' })])}
				>
					{hue}
				</Heading>
				<PaletteSwatches
					hue={hue}
					shades={colourMapWithoutWhite[hue]}
				/>
			</div>
		))}
	</FlexInline>
);

const meta: Meta = {
	title: 'Foundation/Palette',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const Palette: Story = {
	render: () => {
		return (
			<FlexStack gap="7">
				<Heading as="h1">Palette</Heading>
				<Heading as="h2">Colours</Heading>
				<Palettes />
			</FlexStack>
		);
	},
};
