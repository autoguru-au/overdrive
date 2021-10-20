import '../packages/overdrive/lib/reset/globalFonts.css';
import '../packages/overdrive/lib/reset';

import * as React from 'react';
import { StrictMode } from 'react';
import { OverdriveLegacyProvider } from '@autoguru/overdrive';

export default ({ theme, children }) =>
	<StrictMode>
		<OverdriveLegacyProvider theme={theme}>
			{children}
		</OverdriveLegacyProvider>
	</StrictMode>
