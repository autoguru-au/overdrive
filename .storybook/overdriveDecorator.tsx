import isChromatic from 'chromatic/isChromatic';
import React, { useEffect, useRef } from 'react';

import { Box } from '../lib/components/Box';
import { Heading } from '../lib/components/Heading';
import { OverdriveProvider } from '../lib/components/OverdriveProvider';
import { Stack } from '../lib/components/Stack';
import * as themeConfig from '../lib/themes';
import { breakpoints } from '../lib/themes/makeTheme';
import { container } from '../lib/themes/theme.css';

const { themes } = themeConfig;
const overrideColors = {
	bright: {
		primaryBackground: '#e5bc01',
		primaryForeground: '#1e1818',
		primaryBorder: '#e5bc01',
	},
	dark: {
		primaryBackground: '#1e1818',
		primaryForeground: '#e5bc01',
		primaryBorder: '#1e1818',
	},
};

export const useStorybookDecorator = (Story, context) => {
	const portalRef = useRef<HTMLDivElement>(null);
	const customColours =
		context.globals.overrideColours in overrideColors
			? overrideColors[context.globals.overrideColours]
			: {};

	useEffect(() => {
		document.documentElement.dataset.odTheme = 'ag';
	}, []);

	return (
		<OverdriveProvider
			// eslint-disable-next-line import/namespace
			theme={themeConfig[context.globals.theme]}
			breakpoints={breakpoints}
			colorOverrides={customColours}
			portalMountPoint={portalRef}
			noBodyLevelTheming
		>
			<Box className={container} ref={portalRef}>
				<Story />
			</Box>
		</OverdriveProvider>
	);
};

/** For Chromatic, render all available themes for visual testing */
export const useChromaticDecorator = (Story, context) => {
	return (
		<>
			{themes.map((theme) => (
				<div key={theme.name} data-theme={theme.name}>
					<OverdriveProvider noBodyLevelTheming theme={theme}>
						<Box width="full" padding="5">
							<Stack width="full" space="3">
								<Heading as="h5" colour="light">
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
			))}
		</>
	);
};

export const withOverdriveTheme = isChromatic()
	? useChromaticDecorator
	: useStorybookDecorator;
