import * as React from 'react';
import { ComponentProps, FunctionComponent, ReactNode, useEffect } from 'react';

import { tokens } from '../../themes/base/tokens';
import { isBrowser } from '../../utils';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

export interface Props extends ComponentProps<typeof ThemeProvider> {
	// When set to true theme className must be present in a
	// parent dom element of your components including portals.
	// OD Portal component automatically adds theme class to the mounting node
	noBodyLevelTheming?: boolean;
	children?: ReactNode;
}

export const OverdriveProvider: FunctionComponent<Props> = ({
	noBodyLevelTheming = false,
	vars,
	themeClass,
	breakpoints,
	portalMountPoint,
	children,
}) => {
	useEffect(() => {
		if (!isBrowser) return;
		document.body.style.backgroundColor = tokens.body.backgroundColour;
		document.body.style.color = tokens.body.colour;
		if (!noBodyLevelTheming) {
			// Body has theme class applied to it, so we use css vars to apply body styles
			document.body.classList.add(themeClass);
		}
	}, [vars, themeClass]);

	return (
		<ThemeProvider
			vars={vars}
			themeClass={themeClass}
			breakpoints={breakpoints}
			portalMountPoint={portalMountPoint}
		>
			{children}
		</ThemeProvider>
	);
};

export default OverdriveProvider;
