import { warning } from '@autoguru/utilities';
import React from 'react';

/**
 * @deprecated `<OverdriveProvider>` includes the theme context and theme overrides
 */
export const FallbackProvider = ({ children }: React.PropsWithChildren) => {
	warning(
		false,
		'This application is using a provider which is now deprecated. The theme context and overrides are available from <OverdriveProvider>',
	);
	return <>{children}</>;
};
