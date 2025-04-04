/* eslint-disable import/namespace */
import isChromatic from 'chromatic/isChromatic';
import clsx from 'clsx';
import React, { useRef } from 'react';

import { Box } from '../lib/components/Box';
import { Heading } from '../lib/components/Heading';
import { OverdriveProvider } from '../lib/components/OverdriveProvider';
import { Stack } from '../lib/components/Stack';
import { useDocumentBodyStyles } from '../lib/hooks/useDocumentBodyStyles';
import * as themes from '../lib/themes';
import { breakpoints } from '../lib/themes/makeTheme';
import { container, themeContractVars } from '../lib/themes/theme.css';

export const useStorybookDecorator = (Story, context) => {
	useDocumentBodyStyles();
	const portalRef = useRef<HTMLDivElement>(null);
	const theme = themes[context.globals.theme];

	return (
		<OverdriveProvider
			portalMountPoint={portalRef}
			noBodyLevelTheming={false}
			vars={themeContractVars}
			breakpoints={breakpoints}
			themeClass={theme.themeRef}
		>
			<Box ref={portalRef} className={clsx(container, theme.themeRef)}>
				<Story {...context} />
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
