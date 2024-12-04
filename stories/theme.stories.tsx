import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Heading } from '../lib/components/Heading';
import { stack, type RecipeStackProps } from '../lib/styles/stack.css';
import { themeContractVars } from '../lib/themes/theme.css';

import { labels, swatch } from './styles.css';

// TODO: find a home for new recipe components
const Stack = ({
	children,
	...props
}: RecipeStackProps & { children: React.ReactNode }) => (
	<div className={stack(props)}>{children}</div>
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
					<Heading is="h1">Themed Colours</Heading>
					<p>
						Use the theme selection menu options in the top bar to
						view alternate colour mappings.
					</p>
				</hgroup>
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
