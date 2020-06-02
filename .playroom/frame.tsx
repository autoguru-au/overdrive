import '../lib/reset/font-face.css';
import '../lib/reset';

import * as React from 'react';
import * as Icons from '@autoguru/icons';
import { OverdriveProvider } from '../lib/components/OverdriveProvider';

// @ts-ignore
global.Icons = Icons;

export default ({ theme, children }) =>
	<OverdriveProvider theme={theme}>
		{children}
	</OverdriveProvider>
