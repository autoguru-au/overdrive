/* eslint-disable import/namespace */
import isChromatic from 'chromatic/isChromatic';
import React, { useEffect, useRef } from 'react';

import { Box } from '../lib/components/Box';
import { Heading } from '../lib/components/Heading';
import { OverdriveProvider } from '../lib/components/OverdriveProvider';
import { Stack } from '../lib/components/Stack';
import {
	ThemeOverrideProvider,
	useThemeOverrides,
} from '../lib/components/ThemeOverrideProvider';
import { useDocumentBodyStyles } from '../lib/hooks/useDocumentBodyStyles';
import * as themes from '../lib/themes';
import { breakpoints } from '../lib/themes/makeTheme';
import { container, themeContractVars } from '../lib/themes/theme.css';

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
	// @ts-expect-error expecting 0 arguments
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
	}, [theme, context.globals.themeColours, setThemeValues]);
	const ref = useRef(null);
	return (
		<OverdriveProvider
			// @ts-expect-error Type 'RefObject<null>' is not assignable to type 'MutableRefObject<{ new (): HTMLElement; prototype: HTMLElement; }>'.
			portalMountPoint={ref}
			noBodyLevelTheming={false}
			vars={themeContractVars}
			breakpoints={breakpoints}
			themeClass={theme.themeRef}
		>
			<Box ref={ref} className={container} style={overrideStyles}>
				{children}
			</Box>
		</OverdriveProvider>
	);
};

export const withThemeProvider = (Story, context) => {
	const theme = themes[context.globals.theme];
	const tokens = theme.tokens;
	const primaryColourBackground = tokens.colours.intent.primary.background;
	const primaryColourBorder = tokens.colours.intent.primary.border;
	const primaryColourForeground = tokens.colours.intent.primary.foreground;
	const overrideColours = dynamicColours[context.globals.themeColours];
	// eslint-disable-next-line unicorn/no-negated-condition
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
