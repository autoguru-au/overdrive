import '../lib/reset/font-face.css';
import '../lib/reset';

import * as React from 'react';
import { OverdriveProvider } from '../lib/components/OverdriveProvider';

export default ({ theme, children }) =>
	<OverdriveProvider theme={theme}>
		{children}
	</OverdriveProvider>
