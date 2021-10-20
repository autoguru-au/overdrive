import * as React from 'react';
import { ComponentProps, FunctionComponent, useEffect } from 'react';

import { isBrowser } from '../../utils';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

export type Props = ComponentProps<typeof ThemeProvider>;

export const OverdriveProvider: FunctionComponent<Props> = ({
	theme,
	children,
}) => {
	useEffect(() => {
		if (isBrowser) {
			document.body.style.backgroundColor =
				theme.runtimeTokens.body.backgroundColour;
			document.body.style.color = theme.runtimeTokens.body.colour;
		}
	}, [theme]);

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
