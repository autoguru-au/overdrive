import '@autoguru/overdrive/lib/reset/globalFonts.css';
import '@autoguru/overdrive/reset';
import * as themes from '../packages/overdrive/themes';
import isChromatic from 'chromatic/isChromatic';
import { Box, Heading, OverdriveProvider, Stack } from '@autoguru/overdrive';
import * as React from 'react';
import { DocsContainer, DocsPage } from '@storybook/addon-docs';

const withThemeProvider = (Story, context) => {
	return !isChromatic() ? (
		<OverdriveProvider theme={context.globals.theme}>
			<Box padding="2">
				<Story {...context} />
			</Box>
		</OverdriveProvider>
	) : (
		Object.entries(themes).map(([, theme], i) => (
			<div key={i} data-theme={theme.name}>
				<OverdriveProvider theme={theme}>
					<Box padding="5">
						<Stack space="3">
							<Heading is="h5" colour="light">
								Theme :: {theme.name}
							</Heading>

							<Story {...context} />
						</Stack>
					</Box>
				</OverdriveProvider>
				<hr
					style={{
						margin: 0,
						border: 0,
						height: 1,
						background: '#eee',
					}}
				/>
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
			items: Object.entries(themes).map(([, theme]) => ({
				value: theme,
				title: theme.name,
				right: theme.themeRef,
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
