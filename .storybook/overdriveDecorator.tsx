import isChromatic from 'chromatic/isChromatic';
import React, { useEffect, useRef } from 'react';

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

export const useStorybookDecorator = (Story, context) => {
	const portalRef = useRef<HTMLDivElement>(null);
	const customColours =
		context.globals.overrideColours in overrideColors
			? overrideColors[context.globals.overrideColours]
			: {};

	// Foundation reference pages read as documents, so give them the exact
	// same page margins the Storybook docs pages have (64px top/bottom, centred
	// with a 1000px max-width) rather than sitting flush to the top-left.
	const isFoundationPage = context.title?.startsWith('Foundation/');

	useEffect(() => {
		document.documentElement.dataset.odTheme = 'ag';
	}, []);

	const story = (
		<div
			ref={portalRef}
			style={
				isFoundationPage
					? { maxWidth: 1000, width: '100%' }
					: undefined
			}
		>
			<Story />
		</div>
	);

	return (
		<OverdriveProvider
			// eslint-disable-next-line import/namespace
			theme={themeConfig[context.globals.theme]}
			breakpoints={breakpoints}
			colorOverrides={customColours}
			portalMountPoint={portalRef}
			noBodyLevelTheming
		>
			{isFoundationPage ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						padding: '64px 20px',
					}}
				>
					{story}
				</div>
			) : (
				story
			)}
		</OverdriveProvider>
	);
};

/** For Chromatic, render all available themes for visual testing */
export const useChromaticDecorator = (Story, context) => {
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
