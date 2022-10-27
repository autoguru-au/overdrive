import * as React from 'react';
import { StrictMode } from 'react';
import { OverdriveProvider } from '@autoguru/overdrive/lib';
import { themeRef } from '@autoguru/overdrive/lib/themes/base/vars.css';
import '@autoguru/overdrive/lib/reset/globalFonts.css';
import '@autoguru/overdrive/lib/reset/globalReset.css';
import { themeContractVars } from '../packages/overdrive/lib/themes/theme.css';

export default ({ children }) =>
	<StrictMode>
		<OverdriveProvider themeClass={themeRef} vars={themeContractVars}>
			{children}
		</OverdriveProvider>
	</StrictMode>
