import * as React from 'react';
import { ComponentProps, FunctionComponent, useEffect } from 'react';

import { isBrowser } from '../../utils';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

export interface Props extends ComponentProps<typeof ThemeProvider> {
	noBodyLevelTheming: boolean; // When set to false theme className must be present in a parent dom element of your app including portals.
}

export const OverdriveProvider: FunctionComponent<Props> = ({
																noBodyLevelTheming = false,
																vars,
																themeClass,
																tokens,
																children,
															}) => {
	console.log({
		vars,
		themeClass,
		tokens,
	});
	useEffect(() => {
		if (isBrowser) {
			if (!noBodyLevelTheming)
				document.body.classList.add(themeClass);
			document.body.style.backgroundColor = vars.body.backgroundColour;
			document.body.style.color = vars.body.colour;
		}
	}, [vars]);

	return <ThemeProvider vars={vars} themeClass={themeClass} tokens={tokens}>{children}</ThemeProvider>;
};
