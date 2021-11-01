import '../packages/overdrive/lib/reset/globalFonts.css';
import '../packages/overdrive/lib/reset';

import * as React from 'react';
import { StrictMode } from 'react';
import { OverdriveProvider } from '@autoguru/overdrive';
import { vars } from '@autoguru/overdrive/lib/themes/base/vars.css';

export default ({ children }) =>
	<StrictMode>
		<OverdriveProvider theme={vars}>
			{children}
		</OverdriveProvider>
	</StrictMode>
