import * as React from 'react';
import { ComponentProps, FunctionComponent, ReactNode, useEffect } from 'react';

import { isBrowser } from '../../utils';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

export interface Props extends ComponentProps<typeof ThemeProvider> {
	// When set to true theme className must be present in a
	// parent dom element of your components including portals.
	// OD Portal component automatically adds theme class to the mounting node
	noBodyLevelTheming: boolean;
	children?: ReactNode;
}

export const OverdriveProvider: FunctionComponent<Props> = ({
	noBodyLevelTheming = false,
	vars,
	themeClass,
	tokens,
	breakpoints,
	children,
}) => {
	useEffect(() => {
		if (!isBrowser) return;
		if (!noBodyLevelTheming) {
			// Body has theme class applied to it so we use css vars to apply body styles
			document.body.classList.add(themeClass);
			document.body.style.backgroundColor = vars.body.backgroundColour;
			document.body.style.color = vars.body.colour;
		} else {
			document.body.style.backgroundColor = tokens.body.backgroundColour;
			document.body.style.color = tokens.body.colour;
		}
	}, [vars, tokens]);

	return (
		<ThemeProvider
			vars={vars}
			themeClass={themeClass}
			tokens={tokens}
			breakpoints={breakpoints}
		>
			{children}
		</ThemeProvider>
	);
};

export default OverdriveProvider;
