import '@autoguru/overdrive/lib/reset/globalFonts.css';
import '@autoguru/overdrive/lib/reset/globalReset.css';
import * as themes from '@autoguru/overdrive/lib/themes';
import isChromatic from 'chromatic/isChromatic';
import {
	Box,
	Heading,
	OverdriveProvider,
	Stack,
	ThemeOverrideProvider,
	useThemeOverrides,
} from '@autoguru/overdrive/lib';
import * as React from 'react';
import { useEffect } from 'react';
import { DocsContainer, DocsPage } from '@storybook/addon-docs';
import { container, themeContractVars } from '../packages/overdrive/lib/themes/theme.css';
import { breakpoints } from '../packages/overdrive/lib/themes/makeTheme';

const ThemeProviderComponent = ({ children }) => {
	const {
		theme,
		overrideStyles,
		setThemeValues,
	} = useThemeOverrides();
	useEffect(() => {
		const tokens = theme.tokens;
		const primaryColourBackground = tokens.colours.intent.primary.background;
		const primaryColourBorder = tokens.colours.intent.primary.border;
		const primaryColourForeground = tokens.colours.intent.primary.foreground;
		setThemeValues({
			primaryColourBackground: primaryColourBackground.standard,
			primaryColourBackgroundMild: primaryColourBackground.mild,
			primaryColourBackgroundStrong: primaryColourBackground.stron,
			primaryColourBorder,
			primaryColourForeground,
		});
	}, [theme]);

	return (
		<OverdriveProvider
			noBodyLevelTheming={false}
			vars={themeContractVars}
			breakpoints={breakpoints}
			themeClass={theme.themeRef}>
			<Box className={container} style={overrideStyles}>
				{children}
			</Box>
		</OverdriveProvider>
	);
};
const withThemeProvider = (Story, context) => {
	const theme = themes[context.globals.theme];
	const tokens = theme.tokens;
	const primaryColourBackground = tokens.colours.intent.primary.background;
	const primaryColourBorder = tokens.colours.intent.primary.border;
	const primaryColourForeground = tokens.colours.intent.primary.foreground;
	return !isChromatic() ? (
		<ThemeOverrideProvider
			primaryColourBackground={primaryColourBackground.standard}
			primaryColourForeground={primaryColourForeground}
			primaryColourBackgroundMild={primaryColourBackground.mild}
			primaryColourBackgroundStrong={primaryColourBackground.strong}
			primaryColourBorder={primaryColourBorder}
			theme={theme}>
			<Box className={theme.themeRef} padding='2'>
				<ThemeProviderComponent>
					<Story {...context} />
				</ThemeProviderComponent>
			</Box>
		</ThemeOverrideProvider>
	) : (
		Object.entries(themes).map(([_, theme]) => (
			<div
				key={theme.name}
				className={theme.themeRef}
				data-theme={theme.name}
			>
				<OverdriveProvider
					noBodyLevelTheming
					themeClass={theme.themeRef}
					tokens={tokens}
					vars={vars}
				>
					<Box width="full" padding="5">
						<Stack width="full" space="3">
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
		name: 'theme',
		description: 'Global theme for components',
		defaultValue: themes.baseTheme.name,
		title: 'theme',
		toolbar: {
			icon: 'circlehollow',
			items: Object.keys(themes).map((theme) => (themes[theme].name)),
			showName: true,
			dynamicTitle: true,
		},
	},
	themePrimaryBackground: {
		name: 'Set primary background',
		description: 'Global primary background colour',
		defaultValue: 'light',
		toolbar: {
			icon: 'paintbrush',
			items: ['light', 'dark'],
			showName: true,
			dynamicTitle: true,
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
