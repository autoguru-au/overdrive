import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Heading } from '../components/Heading';
import { overdriveTokens } from '../themes/theme.css';

import { Stack } from './helpers';
import { labels, variantColourSwatch } from './helpers/styles.css';

const ThemeSwatch = ({ label, cssVar }) => (
	<Stack space="xxs" key={label}>
		<div
			className={variantColourSwatch({ shape: 'rectangle' })}
			style={{ background: cssVar }}
		></div>
		<span className={labels}>{label}</span>
	</Stack>
);

const SemanticSwatches = ({ vars }: { vars: Record<string, string> }) => (
	<Stack space="sm" horizontal>
		{Object.entries(vars).map(([colour, cssVar]) => (
			<Stack space="xxs" key={colour}>
				<div
					className={variantColourSwatch({ shape: 'rectangle' })}
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
	<Stack space="sm">
		<Stack space="sm" horizontal>
			<ThemeSwatch label="Border" cssVar={vars.border} />
			<ThemeSwatch label="Foreground" cssVar={vars.foreground} />
		</Stack>
		<Stack space="sm" horizontal>
			<ThemeSwatch
				label="Background strong"
				cssVar={vars.background.strong}
			/>
			<ThemeSwatch
				label="Background standard"
				cssVar={vars.background.standard}
			/>
			<ThemeSwatch
				label="Background mild"
				cssVar={vars.background.mild}
			/>
		</Stack>
	</Stack>
);

const meta: Meta = {
	title: 'Foundation/Legacy Coloursets',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const LegacyColoursets: Story = {
	render: () => {
		return (
			<Stack>
				<hgroup>
					<Heading as="h1">Intentional Colours</Heading>
					<p>
						These colours are being phased out but include use with
						flat-red and neutral themes plus colour overrides.
					</p>
					<p>
						Use the theme selection menu options in the top bar to
						view alternate colour mappings.
					</p>
				</hgroup>
				<Stack space="md" horizontal>
					<Stack>
						<Heading as="h2">Body</Heading>
						<SemanticSwatches vars={overdriveTokens.body} />
					</Stack>
					<Stack>
						<Heading as="h2">Foreground</Heading>
						<SemanticSwatches
							vars={overdriveTokens.colours.foreground}
						/>
					</Stack>
					<Stack>
						<Heading as="h2">Background</Heading>
						<SemanticSwatches
							vars={overdriveTokens.colours.background}
						/>
					</Stack>
					<Stack>
						<Heading as="h2">Border</Heading>
						<SemanticSwatches
							vars={overdriveTokens.border.colours}
						/>
					</Stack>
				</Stack>
				<Stack>
					<Heading as="h2">Typography</Heading>
					<SemanticSwatches
						vars={overdriveTokens.typography.colour}
					/>
				</Stack>
				<Stack>
					<Heading as="h2">Intentional colour sets</Heading>
					<Stack space="lg" horizontal>
						{Object.entries(overdriveTokens.colours.intent).map(
							([title, vars]) => (
								<div key={title}>
									<Heading as="h4" className={labels}>
										{title}
									</Heading>
									<IntentionalSwatches vars={vars} />
								</div>
							),
						)}
					</Stack>
				</Stack>
			</Stack>
		);
	},
};
