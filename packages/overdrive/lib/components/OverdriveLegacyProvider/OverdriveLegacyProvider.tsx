import * as React from 'react';
import { ComponentProps, FunctionComponent, useEffect } from 'react';

import { isBrowser } from '../../utils';
import { ThemeLegacyProvider } from '../ThemeLegacyProvider/ThemeLegacyProvider';

export type Props = ComponentProps<typeof ThemeLegacyProvider>;

export const OverdriveLegacyProvider: FunctionComponent<Props> = ({
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

	return <ThemeLegacyProvider theme={theme}>{children}</ThemeLegacyProvider>;
};
