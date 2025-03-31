/* eslint-disable import/namespace */
import isChromatic from 'chromatic/isChromatic';
import clsx from 'clsx';
import React, { useRef } from 'react';

import { Box } from '../lib/components/Box';
import { Heading } from '../lib/components/Heading';
import { OverdriveProvider } from '../lib/components/OverdriveProvider';
import { Stack } from '../lib/components/Stack';
import { UnifiedThemeProvider } from '../lib/components/UnifiedThemeProvider/UnifiedThemeProvider';
import { useDocumentBodyStyles } from '../lib/hooks/useDocumentBodyStyles';
import * as themes from '../lib/themes';
import { breakpoints } from '../lib/themes/makeTheme';
import { container } from '../lib/themes/theme.css';

const overrideColours = {
	bright: {
		primaryColourBackground: '#e5bc01',
		primaryColourForeground: '#1e1818',
	},
	dark: {
		primaryColourBackground: '#1e1818',
		primaryColourForeground: '#e5bc01',
	},
};

export const useStorybookDecorator = (Story, context) => {
	useDocumentBodyStyles();
	const portalRef = useRef<HTMLDivElement>(null);
	const theme = themes[context.globals.theme];
	// const { setThemeValues } = useThemeOverrides();

	// useEffect(() => {
	// 	if (context.globals.overrideColours in overrideColours) {
	// 		setThemeValues({
	// 			...overrideColours[context.globals.overrideColours]
	// 		})
	// 	}
	// }, [context.globals.overrideColours, setThemeValues])

	return (
		<UnifiedThemeProvider
			portalMountPoint={portalRef}
			noBodyLevelTheming={false}
			breakpoints={breakpoints}
			theme={theme}
			// primaryColourBackground={
			// 	hasOverride ? customColours.primaryColourBackground : undefined
			// }
			// primaryColourForeground={
			// 	overrideColours
			// 		? customColours.primaryColourForeground
			// 		: undefined
			// }
			// primaryColourBackgroundMild={
			// 	overrideColours ? null : primaryColourBackground.mild
			// }
			// primaryColourBackgroundStrong={
			// 	overrideColours ? null : primaryColourBackground.strong
			// }
			// primaryColourBorder={overrideColours ? null : primaryColourBorder}
		>
			<Box ref={portalRef} className={clsx(container, theme.themeRef)}>
				<Story {...context} />
			</Box>
		</UnifiedThemeProvider>
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
						themeClass={themes[themeName].themeRef}
						vars={themes[themeName].vars}
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
