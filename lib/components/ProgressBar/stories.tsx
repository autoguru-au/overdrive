import React from 'react';

import { Stack } from '../Stack';
import { ProgressBar } from '.';

export default { title: 'Components|ProgressBar' };

export const standard = () => (
	<>
		<Stack spacing={2}>
			<ProgressBar percentage={0.5} prefixText="5" />
			<ProgressBar percentage={0.4} suffixText="4" />
			<ProgressBar percentage={0.1} prefixText="5" suffixText="5" />
			<ProgressBar percentage={15} />
		</Stack>
	</>
);
