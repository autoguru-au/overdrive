import React, { useEffect, useRef } from 'react';

import '../lib/reset/globalFonts.css';
import '../lib/reset/globalReset.css';
import * as themes from '../lib/themes';
import isChromatic from 'chromatic/isChromatic';
import {
	Box,
	Heading,
	OverdriveProvider,
	Stack,
	ThemeOverrideProvider,
	useThemeOverrides,
} from '../lib';
import { container, themeContractVars } from '../lib/themes/theme.css';
import { breakpoints } from '../lib/themes/makeTheme';
import { useDocumentBodyStyles } from '../lib/hooks/useDocumentBodyStyles';

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
	const { theme, overrideStyles, setThemeValues } = useThemeOverrides({
		primaryColourBackground:
			dynamicColours[context.globals.themeColours]
				?.primaryColourBackground,
		primaryColourForeground:
			dynamicColours[context.globals.themeColours]
				?.primaryColourForeground,
	});
	useDocumentBodyStyles();
	useEffect(() => {
		if (dynamicColours[context.globals.themeColours]) {
			setThemeValues({
				primaryColourBackground: null,
				primaryColourBackgroundMild: null,
				primaryColourBackgroundStrong: null,
				primaryColourBorder: null,
				primaryColourForeground: null,
				...dynamicColours[context.globals.themeColours],
			});
		}
	}, [theme, context.globals.themeColours]);
	const ref = useRef();
	return (
		<OverdriveProvider
			portalMountPoint={ref}
			noBodyLevelTheming={false}
			vars={themeContractVars}
			breakpoints={breakpoints}
			themeClass={theme.themeRef}>
			<Box ref={ref} className={container} style={overrideStyles}>
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
	const overrideColours = dynamicColours[context.globals.themeColours];
	return !isChromatic() ? (
		<ThemeOverrideProvider
			primaryColourBackground={
				overrideColours
					? overrideColours.primaryColourBackground
					: primaryColourBackground.standard
			}
			primaryColourForeground={
				overrideColours
					? overrideColours.primaryColourForeground
					: primaryColourForeground
			}
			primaryColourBackgroundMild={
				overrideColours ? null : primaryColourBackground.mild
			}
			primaryColourBackgroundStrong={
				overrideColours ? null : primaryColourBackground.strong
			}
			primaryColourBorder={overrideColours ? null : primaryColourBorder}
			theme={theme}>
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
				data-theme={themes[theme].name}>
				<OverdriveProvider
					noBodyLevelTheming
					themeClass={themes[theme].themeRef}
					tokens={themes[theme].tokens}
					vars={themes[theme].vars}>
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

/** @type { import('@storybook/react').Preview } */
const preview = {
	decorators: [withThemeProvider],

	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		chromatic: {
			// Mobile and large table and up
			viewports: [320, 1024],
		},
		options: {
			storySort: {
				order: ['Overdrive'],
			},
		},
	},

	tags: ['autodocs'],
};

export default preview;
