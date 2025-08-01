import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { FlexInline } from '../components/Flex/FlexInline';
import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading';
import { overdriveTokens } from '../themes/theme.css';

import { labels, variantColourSwatch } from './helpers/styles.css';

const ThemeSwatch = ({ label, cssVar }) => (
	<FlexStack gap="1" key={label}>
		<div
			className={variantColourSwatch({ shape: 'rectangle' })}
			style={{ background: cssVar }}
		></div>
		<span className={labels}>{label}</span>
	</FlexStack>
);

const SemanticSwatches = ({ vars }: { vars: Record<string, string> }) => (
	<FlexInline gap="5">
		{Object.entries(vars).map(([colour, cssVar]) => (
			<FlexStack gap="1" key={colour}>
				<div
					className={variantColourSwatch({ shape: 'rectangle' })}
					style={{ background: cssVar }}
				></div>
				<span className={labels}>{colour}</span>
			</FlexStack>
		))}
	</FlexInline>
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
	<FlexStack gap="5">
		<FlexInline gap="5">
			<ThemeSwatch label="Border" cssVar={vars.border} />
			<ThemeSwatch label="Foreground" cssVar={vars.foreground} />
		</FlexInline>
		<FlexInline gap="5">
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
		</FlexInline>
	</FlexStack>
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
			<FlexStack gap="7">
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
				<FlexInline gap="8">
					<FlexStack gap="6">
						<Heading as="h2">Body</Heading>
						<SemanticSwatches vars={overdriveTokens.body} />
					</FlexStack>
					<FlexStack gap="6">
						<Heading as="h2">Foreground</Heading>
						<SemanticSwatches
							vars={overdriveTokens.colours.foreground}
						/>
					</FlexStack>
					<FlexStack gap="6">
						<Heading as="h2">Background</Heading>
						<SemanticSwatches
							vars={overdriveTokens.colours.background}
						/>
					</FlexStack>
					<FlexStack gap="6">
						<Heading as="h2">Border</Heading>
						<SemanticSwatches
							vars={overdriveTokens.border.colours}
						/>
					</FlexStack>
				</FlexInline>
				<FlexStack gap="6">
					<Heading as="h2">Typography</Heading>
					<SemanticSwatches
						vars={overdriveTokens.typography.colour}
					/>
				</FlexStack>
				<FlexStack gap="6">
					<Heading as="h2" mt="4">
						Intentional colour sets
					</Heading>
					<FlexInline gap="8">
						{Object.entries(overdriveTokens.colours.intent).map(
							([title, vars]) => (
								<div key={title}>
									<Heading as="h4" mb="4" className={labels}>
										{title}
									</Heading>
									<IntentionalSwatches vars={vars} />
								</div>
							),
						)}
					</FlexInline>
				</FlexStack>
			</FlexStack>
		);
	},
};
