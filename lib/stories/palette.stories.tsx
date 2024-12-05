import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import React from 'react';

import { Heading } from '../components/Heading';
import { sprinkles } from '../styles/sprinkles.css';
import { baseThemeColours } from '../themes/base/tokens';
import type { ColourGamut, ColourValue } from '../themes/tokens';

import { ColourSwatch, Stack } from './helpers';
import { labels, hexPill } from './helpers/styles.css';

interface SwatchProps {
	colour: ColourGamut;
	hex?: string;
	hue?: string;
}
const Swatch = ({ colour, hex, hue }: SwatchProps) => (
	<div
		style={{
			display: 'flex',
			gap: '10px',
			alignItems: 'center',
			position: 'relative',
		}}
	>
		<ColourSwatch background={colour} size="lg">
			<div className={hexPill}>{hex}</div>
		</ColourSwatch>
		{hue && colour.replace(hue, '')}
	</div>
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
				<Swatch
					colour={`${hue}${colour}` as ColourGamut}
					hex={hex}
					hue={hue}
					key={colour}
				/>
			))}
	</Stack>
);

const Palettes = () => (
	<Stack horizontal space="md">
		{['green', 'blue', 'yellow', 'red', 'gray', 'black'].map((hue) => (
			<div key={hue}>
				<Heading
					is="h3"
					className={clsx([labels, sprinkles({ marginBottom: '5' })])}
				>
					{hue}
				</Heading>
				<PaletteSwatches hue={hue} shades={baseThemeColours[hue]} />
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
				<Heading is="h1">Palette</Heading>
				<Heading is="h2">Colours</Heading>
				<Palettes />
			</Stack>
		);
	},
};
