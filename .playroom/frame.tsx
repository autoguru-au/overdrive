import '../packages/overdrive/lib/reset/globalFonts.css';
import '../packages/overdrive/lib/reset';

import * as React from 'react';
import { StrictMode } from 'react';
import { OverdriveProvider } from '@autoguru/overdrive';

export default ({ theme, children }) =>
	<StrictMode>
		<OverdriveProvider theme={theme}>
			{children}
		</OverdriveProvider>
	</StrictMode>
