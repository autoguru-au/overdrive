import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Heading } from '../components/Heading';
import { themeContractVars } from '../themes/theme.css';

import { Stack } from './helpers';
import { labels, variantColourSwatch } from './helpers/styles.css';

const ThemeSwatch = ({ label, cssVar }) => (
	<Stack horizontal alignItems="center" style={{ gap: '10px' }} key={label}>
		<div
			className={variantColourSwatch()}
			style={{ background: cssVar }}
		></div>
		<span className={labels}>{label}</span>
	</Stack>
);

const SemanticSwatches = ({ vars }: { vars: Record<string, string> }) => (
	<Stack space="lg" horizontal>
		{Object.entries(vars).map(([colour, cssVar]) => (
			<Stack
				horizontal
				alignItems="center"
				style={{ gap: '10px' }}
				key={colour}
			>
				<div
					className={variantColourSwatch()}
					style={{ background: cssVar }}
				></div>
				<span className={labels}>{colour}</span>
			</Stack>
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
	title: 'Foundation/Theme Colours',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const ThemeColours: Story = {
	render: () => {
		return (
			<Stack>
				<hgroup>
					<Heading is="h1">Theme Colours</Heading>
					<p>
						Use the theme selection menu options in the top bar to
						view alternate colour mappings.
					</p>
				</hgroup>
				<Stack>
					<Heading is="h2">Body</Heading>
					<SemanticSwatches vars={themeContractVars.body} />
				</Stack>
				<Stack>
					<Heading is="h2">Foreground</Heading>
					<SemanticSwatches
						vars={themeContractVars.colours.foreground}
					/>
				</Stack>
				<Stack>
					<Heading is="h2">Background</Heading>
					<SemanticSwatches
						vars={themeContractVars.colours.background}
					/>
				</Stack>
				<Stack>
					<Heading is="h2">Border</Heading>
					<SemanticSwatches vars={themeContractVars.border.colours} />
				</Stack>

				<Stack>
					<Heading is="h2">Intentional colour sets</Heading>
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
				</Stack>
			</Stack>
		);
	},
};
