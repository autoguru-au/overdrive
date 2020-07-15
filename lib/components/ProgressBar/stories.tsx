import * as React from 'react';
import { useEffect, useState } from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';

import { ProgressBar } from './ProgressBar';
import { Stack } from '../Stack/Stack';

export default {
	title: 'Components|Progress/ProgressBar',
	component: ProgressBar,
};

export const Standard = () => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const i = setInterval(() => {
			setWidth(Math.random());
		}, 1e3);

		return () => clearInterval(i);
	}, []);

	return (
		<Stack space={2}>
			{!isChromatic() && <ProgressBar value={width} colour="green" />}
			<ProgressBar value={0.5} colour="green" />
			<ProgressBar value={0.4} colour="blue" />
			<ProgressBar value={0.1} colour="neutral" />
			<ProgressBar value={15} colour="red" />
			<ProgressBar value={0.156} colour="yellow" />
		</Stack>
	);
};
