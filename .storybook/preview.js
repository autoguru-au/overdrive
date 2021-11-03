import '@autoguru/overdrive/lib/reset/globalFonts.css';
import '@autoguru/overdrive/reset';
import * as themes from '../packages/overdrive/themes';
import isChromatic from 'chromatic/isChromatic';
import { Box, Heading, OverdriveProvider, Stack } from '@autoguru/overdrive';
import * as React from 'react';
import { DocsContainer, DocsPage } from '@storybook/addon-docs';

const withThemeProvider = (Story, context) => {
	const { themeRef, tokens, vars } = context.globals.theme;

	return !isChromatic() ? (
		<OverdriveProvider
			noBodyLevelTheming
			themeClass={themeRef}
			tokens={tokens}
			vars={vars}>
			<Box className={themeRef} padding="2">
				<Story {...context} />
			</Box>
		</OverdriveProvider>
	) : (
		Object.entries(themes).map(([, theme], i) => (
			<div key={i} data-theme={theme.name}>
				<OverdriveProvider
					themeClass={themeRef}
					tokens={tokens}
					vars={vars}>
					<Box className={context.globals.theme.themeRef} padding="5">
						<Stack space="3">
							<Heading is="h5" colour="light">
								Theme :: {theme.name}
							</Heading>

							<Story {...context} />
						</Stack>
					</Box>
					<hr
						style={{
							margin: 0,
							border: 0,
							height: 1,
							background: '#eee',
						}}
					/>
				</OverdriveProvider>
			</div>
		))
	);
};

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: themes.baseTheme,
		toolbar: {
			icon: 'grid',
			items: Object.entries(themes).map(([key, theme]) => ({
				key,
				value: theme,
				title: theme.name,
			})),
		},
	},
};

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: {
		container: DocsContainer,
		page: DocsPage,
	},
	chromatic: {
		// Mobile and large table and up
		viewports: [320, 1024],
	},
};

export const decorators = [withThemeProvider];
