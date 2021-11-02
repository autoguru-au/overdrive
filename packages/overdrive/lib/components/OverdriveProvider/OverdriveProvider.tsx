import * as React from 'react';
import { ComponentProps, FunctionComponent, useEffect } from 'react';

import { isBrowser } from '../../utils';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

export type Props = ComponentProps<typeof ThemeProvider>;

export const OverdriveProvider: FunctionComponent<Props> = ({
																vars,
																themeClass,
																tokens,
																children,
															}) => {
	useEffect(() => {
		if (isBrowser) {
			document.body.style.backgroundColor = vars.body.backgroundColour;
			document.body.style.color = vars.body.colour;
		}
	}, [vars]);

	return <ThemeProvider vars={vars} themeClass={themeClass} tokens={tokens}>{children}</ThemeProvider>;
};
