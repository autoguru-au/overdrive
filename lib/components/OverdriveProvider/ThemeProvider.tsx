import { warning } from '@autoguru/utilities';
import React from 'react';

/**
 * @deprecated `<OverdriveProvider>` now includes the theme context, instances of `<ThemeProvider>` can be removed
 */
export const ThemeProvider = ({ children }) => {
	warning(
		false,
		'This application is using <ThemeProvider> which is now deprecated. The theme context is available from <OverdriveProvider>',
	);
	return <>{children}</>;
};
