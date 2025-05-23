import type { Meta, StoryObj } from '@storybook/react-vite';
import clsx from 'clsx';
import React from 'react';

import { Heading } from '../components/Heading';
import { overdriveTokens, type ColourValue } from '../themes';
import { colourMapWithoutWhite } from '../themes/base/colours';

import { ColourSwatch, Stack } from './helpers';
import { sprinkles } from './helpers/sprinkles.css';
import { labels, hexPill } from './helpers/styles.css';

interface SwatchProps {
	colour: string;
	hex?: string;
	hue?: string;
}
const Swatch = ({ colour, hex, hue }: SwatchProps) => (
	<Stack
		horizontal
		alignItems="center"
		style={{
			gap: '10px',
			position: 'relative',
		}}
	>
		<ColourSwatch
			size="lg"
			style={{
				backgroundColor: overdriveTokens.color.gamut[hue!][colour],
			}}
		>
			<div className={hexPill}>{hex}</div>
		</ColourSwatch>
		{hue && colour.replace(hue, '')}
	</Stack>
);

interface PaletteSwatchesProps {
	hue: string;
	shades: ColourValue;
}
const PaletteSwatches = ({ hue, shades }: PaletteSwatchesProps) => (
	<Stack space="sm">
		{Object.entries(shades)
			.reverse()
			.map(([colour, hex]) => (
				<Swatch colour={colour} hex={hex} hue={hue} key={hex} />
			))}
	</Stack>
);

const Palettes = () => (
	<Stack horizontal space="md">
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
	</Stack>
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
			<Stack space="md">
				<Heading as="h1">Palette</Heading>
				<Heading as="h2">Colours</Heading>
				<Palettes />
			</Stack>
		);
	},
};
