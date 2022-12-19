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
import {
	container,
	themeContractVars,
} from '../packages/overdrive/lib/themes/theme.css';
import { breakpoints } from '../packages/overdrive/lib/themes/makeTheme';

const dynamicColours = {
	bright: {
		primaryColourBackground: '#e5bc01',
		primaryColourForeground: '#1e1818',
	},
	dark: {
		primaryColourBackground: '#1e1818',
		primaryColourForeground: '#e5bc01',
	},
};

const ThemeProviderComponent = ({ children, context }) => {
	const { theme, overrideStyles, setThemeValues } = useThemeOverrides();

	useEffect(() => {
		console.log(context.globals);
		if (dynamicColours[context.globals.themeColours]) {
			setThemeValues({
				primaryColourBackground: null,
				primaryColourBackgroundMild: null,
				primaryColourBackgroundStrong: null,
				primaryColourBorder: null,
				primaryColourForeground: null,
				...dynamicColours[context.globals.themeColours],
			});
		} else {
			const tokens = theme.tokens;
			const primaryColourBackground =
				tokens.colours.intent.primary.background;
			const primaryColourBorder = tokens.colours.intent.primary.border;
			const primaryColourForeground =
				tokens.colours.intent.primary.foreground;
			setThemeValues({
				primaryColourBackground: primaryColourBackground.standard,
				primaryColourBackgroundMild: primaryColourBackground.mild,
				primaryColourBackgroundStrong: primaryColourBackground.stron,
				primaryColourBorder,
				primaryColourForeground,
			});
		}
	}, [theme, context.globals.themeColours]);

	return (
		<OverdriveProvider
			noBodyLevelTheming={false}
			vars={themeContractVars}
			breakpoints={breakpoints}
			themeClass={theme.themeRef}
		>
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
			theme={theme}
		>
			<Box className={theme.themeRef} padding="2">
				<ThemeProviderComponent context={context}>
					<Story {...context} />
				</ThemeProviderComponent>
			</Box>
		</ThemeOverrideProvider>
	) : (
		Object.keys(themes).map((theme) => (
			<div
				key={themes[theme].name}
				className={themes[theme].themeRef}
				data-theme={themes[theme].name}
			>
				<OverdriveProvider
					noBodyLevelTheming
					themeClass={themes[theme].themeRef}
					tokens={themes[theme].tokens}
					vars={themes[theme].vars}
				>
					<Box width="full" padding="5">
						<Stack width="full" space="3">
							<Heading is="h5" colour="light">
								Theme :: {themes[theme].name}
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
			icon: 'mirror',
			items: Object.keys(themes).map((theme) => themes[theme].name),
			showName: true,
			dynamicTitle: true,
		},
	},
	themeColours: {
		name: 'Set dynamic colours',
		description: 'Global primary background colour',
		defaultValue: 'defaults',
		toolbar: {
			icon: 'paintbrush',
			items: ['defaults', 'bright', 'dark'],
			showName: true,
			dynamicTitle: true,
			control: 'color',
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
