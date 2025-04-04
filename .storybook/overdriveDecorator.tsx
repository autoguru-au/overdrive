import isChromatic from 'chromatic/isChromatic';
import React, { useRef } from 'react';

import { Box } from '../lib/components/Box';
import { Heading } from '../lib/components/Heading';
import { OverdriveProvider } from '../lib/components/OverdriveProvider';
import { Stack } from '../lib/components/Stack';
import * as allThemes from '../lib/themes';
import { breakpoints } from '../lib/themes/makeTheme';
import { container } from '../lib/themes/theme.css';

const themes = allThemes;
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

	return (
		<OverdriveProvider
			theme={themes[context.globals.theme]}
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
			{Object.keys(themes).map((themeName) => (
				<div
					key={themes[themeName].name}
					className={themes[themeName].themeRef}
					data-theme={themes[themeName].name}
				>
					<OverdriveProvider
						noBodyLevelTheming
						theme={themes[themeName]}
					>
						<Box width="full" padding="5">
							<Stack width="full" space="3">
								<Heading is="h5" colour="light">
									Theme :: {themes[themeName].name}
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
