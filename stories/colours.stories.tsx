import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import React from 'react';

import { Heading } from '../lib/components/Heading';
import { useTheme } from '../lib/components/ThemeProvider';
import { sprinkles } from '../lib/styles/sprinkles.css';
import { stack, type RecipeStackProps } from '../lib/styles/stack.css';
import { baseThemeColours, tokens } from '../lib/themes/base/tokens';
import { themeContractVars } from '../lib/themes/theme.css';
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

const Palette = () => (
	<Stack horizontal space="lg">
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

const ThemeSwatch = ({ label, cssVar }) => (
	<div
		key={label}
		style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
	>
		<div
			className={swatch}
			style={{ background: cssVar, borderRadius: '100%' }}
		></div>
		<span className={labels}>{label}</span>
	</div>
);

const SemanticSwatches = ({ vars }: { vars: Record<string, string> }) => (
	<Stack space="lg" horizontal>
		{Object.entries(vars).map(([colour, cssVar]) => (
			<div
				key={colour}
				style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
			>
				<div
					className={swatch}
					style={{ background: cssVar, borderRadius: '100%' }}
				></div>
				<span className={labels}>{colour}</span>
			</div>
		))}
	</Stack>
);

const IntentionalSwatches = ({
	vars,
}: {
	vars: {
		background: { mild: string; standard: string; strong: string };
		foreground: string;
		border: string;
	};
}) => (
	<Stack space="lg" horizontal>
		<Stack space="sm">
			<ThemeSwatch
				label="Background standard"
				cssVar={vars.background.standard}
			/>
			<ThemeSwatch
				label="Background mild"
				cssVar={vars.background.mild}
			/>
			<ThemeSwatch
				label="Background strong"
				cssVar={vars.background.strong}
			/>
		</Stack>
		<ThemeSwatch label="Foreground" cssVar={vars.foreground} />
		<ThemeSwatch label="Border" cssVar={vars.border} />
	</Stack>
);

const meta: Meta = {
	title: 'Foundation/Colours',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const Colours: Story = {
	render: () => {
		return (
			<Stack space="md">
				<Heading is="h1">Colours</Heading>

				<Heading is="h2">Semantic</Heading>
				<Heading is="h3">Foreground</Heading>
				<SemanticSwatches vars={themeContractVars.colours.foreground} />
				<Heading is="h3">Background</Heading>
				<SemanticSwatches vars={themeContractVars.colours.background} />

				<Heading is="h3">Intentional</Heading>
				<Stack>
					{Object.entries(themeContractVars.colours.intent).map(
						([title, vars]) => (
							<>
								<Heading is="h4" className={labels}>
									{title}
								</Heading>
								<IntentionalSwatches vars={vars} />
							</>
						),
					)}
				</Stack>

				<Heading is="h2">Full palette</Heading>
				<Palette />
			</Stack>
		);
	},
};
