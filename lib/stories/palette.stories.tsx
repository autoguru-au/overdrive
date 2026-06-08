import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading';
import { sprinkles } from '../styles/sprinkles.css';
import { type ColourValue } from '../themes';
import { colourMapWithoutWhite } from '../themes/base/colours';

import {
	hueGroup,
	labels,
	paletteGrid,
	rampBar,
	rampHex,
	rampSegment,
	rampShade,
} from './helpers/styles.css';

/**
 * Picks black or white text for legibility against a given hex background,
 * using the perceived (sRGB-weighted) luminance of the colour.
 */
const readableTextColour = (hex: string): string => {
	const value = hex.replace('#', '');
	const r = parseInt(value.slice(0, 2), 16);
	const g = parseInt(value.slice(2, 4), 16);
	const b = parseInt(value.slice(4, 6), 16);
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
	return luminance > 0.6 ? '#1A1A1A' : '#FFFFFF';
};

interface SwatchProps {
	shade: string;
	hex: string;
}
const Swatch = ({ shade, hex }: SwatchProps) => {
	const [copied, setCopied] = React.useState(false);

	const handleCopy = () => {
		navigator.clipboard?.writeText(hex);
		setCopied(true);
		setTimeout(() => setCopied(false), 1200);
	};

	return (
		<button
			className={rampSegment}
			onClick={handleCopy}
			style={{ backgroundColor: hex, color: readableTextColour(hex) }}
			title={`Copy ${hex}`}
			type="button"
		>
			<span className={rampShade}>{shade}</span>
			<span className={rampHex}>{copied ? 'Copied' : hex}</span>
		</button>
	);
};

interface ColourRampProps {
	hue: string;
	shades: ColourValue;
}
const ColourRamp = ({ hue, shades }: ColourRampProps) => (
	<section className={hueGroup}>
		<Heading as="h3" className={labels}>
			{hue}
		</Heading>
		<div className={rampBar}>
			{Object.entries(shades).map(([shade, hex]) => (
				<Swatch hex={hex} key={shade} shade={shade} />
			))}
		</div>
	</section>
);

const Palettes = () => (
	<div className={paletteGrid}>
		{Object.keys(colourMapWithoutWhite).map((hue) => (
			<ColourRamp
				hue={hue}
				key={hue}
				shades={colourMapWithoutWhite[hue]}
			/>
		))}
	</div>
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
				<FlexStack gap="2">
					<Heading as="h1">Palette</Heading>
					<Heading
						as="h4"
						className={sprinkles({ colour: 'secondary' })}
					>
						The full colour gamut, from lightest (100) to darkest
						(900) per hue. Click any swatch to copy its hex.
					</Heading>
				</FlexStack>
				<Palettes />
			</FlexStack>
		);
	},
};
