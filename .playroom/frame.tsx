import '../packages/overdrive/lib/reset/font-face.css';
import '../packages/overdrive/lib/reset';

import * as React from 'react';
import { StrictMode } from 'react';
import * as Icons from '@autoguru/icons';
import { OverdriveProvider } from '@autoguru/overdrive';

// @ts-ignore
global.Icons = Icons;

export default ({ theme, children }) =>
	<StrictMode>
		<OverdriveProvider theme={theme}>
			{children}
		</OverdriveProvider>
	</StrictMode>
