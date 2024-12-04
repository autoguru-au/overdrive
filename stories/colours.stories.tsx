import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import React from 'react';

import { Heading } from '../lib/components/Heading';
import { sprinkles } from '../lib/styles/sprinkles.css';
import { stack, type RecipeStackProps } from '../lib/styles/stack.css';
import { baseThemeColours } from '../lib/themes/base/tokens';
import type { ColourGamut, ColourValue } from '../lib/themes/tokens';

import { labels, hexPill, swatch } from './styles.css';

const Stack = ({
	children,
	...props
}: RecipeStackProps & { children: React.ReactNode }) => (
	<div className={stack(props)}>{children}</div>
);

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
		<div
			className={clsx([
				sprinkles({
					background: colour,
					borderRadius: 'full',
				}),
				swatch,
			])}
		>
			<div className={hexPill}>{hex}</div>
		</div>
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

const Palette = () => {
	return (
		<Stack horizontal space="lg">
			{['green', 'blue', 'yellow', 'red', 'gray', 'black'].map((hue) => (
				<div key={hue}>
					<Heading
						is="h3"
						className={clsx([
							labels,
							sprinkles({ marginBottom: '5' }),
						])}
					>
						{hue}
					</Heading>
					<PaletteSwatches hue={hue} shades={baseThemeColours[hue]} />
				</div>
			))}
		</Stack>
	);
};

const meta: Meta = {
	title: 'Foundation/Colours',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const Colours: Story = {
	render: () => (
		<Stack space="md">
			<Heading is="h1">Colours</Heading>
			<Heading is="h2">Full palette</Heading>
			<Palette />
		</Stack>
	),
};
