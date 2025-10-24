import isChromatic from 'chromatic/isChromatic';
import React, { useEffect, useRef } from 'react';
import type { Renderer, StoryContext } from 'storybook/internal/types';

import { Box } from '../lib/components/Box';
import { Heading } from '../lib/components/Heading';
import { OverdriveProvider } from '../lib/components/OverdriveProvider';
import { Stack } from '../lib/components/Stack';
import * as themeConfig from '../lib/themes';
import { breakpoints } from '../lib/themes/makeTheme';

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

export const useStorybookDecorator = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Story: any,
	context: StoryContext<Renderer>,
) => {
	const portalRef = useRef<HTMLDivElement>(null);
	const colorMode =
		(context.globals.colorMode as 'light' | 'dark') || 'light';
	const overrideKey = context.globals.overrideColours as string;
	const customColours =
		overrideKey in overrideColors ? overrideColors[overrideKey] : {};

	useEffect(() => {
		document.documentElement.dataset.odTheme = 'ag';
	}, []);

	return (
		<OverdriveProvider
			theme={
				themes.find((t) => t.name === context.globals.theme) ??
				themes[0]
			}
			breakpoints={breakpoints}
			colorMode={colorMode}
			colorOverrides={customColours}
			portalMountPoint={portalRef}
			noBodyLevelTheming
		>
			<div ref={portalRef}>
				<Story />
			</div>
		</OverdriveProvider>
	);
};

/** For Chromatic, render all available themes for visual testing */
export const useChromaticDecorator = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Story: any,
	context: StoryContext<Renderer>,
) => {
	const portalRef = useRef<HTMLDivElement>(null);

	// Check if the 'skip-themes' tag is present in the story's tags, render the story once
	if (context?.tags.includes('skip-themes')) {
		return (
			<OverdriveProvider
				theme={themes[0]}
				portalMountPoint={portalRef}
				noBodyLevelTheming
			>
				<div ref={portalRef}>
					<Story {...context} />
				</div>
			</OverdriveProvider>
		);
	}

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
