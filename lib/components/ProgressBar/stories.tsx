import React, { useEffect, useState } from 'react';
import isChromatic from 'storybook-chromatic/isChromatic';

import { Stack } from '../Stack';
import { ProgressBar } from '.';

export default { title: 'Components|Progress/ProgressBar' };

export const Standard = () => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const i = setInterval(() => {
			setWidth(Math.random());
		}, 1e3);

		return () => clearInterval(i);
	}, []);

	return (
		<>
			<Stack spacing={2}>
				{!isChromatic() && <ProgressBar value={width} colour="green" />}
				<ProgressBar value={0.5} prefixText="5" colour="green" />
				<ProgressBar value={0.4} suffixText="4" colour="blue" />
				<ProgressBar
					value={0.1}
					prefixText="5"
					suffixText="5"
					colour="neutral"
				/>
				<ProgressBar value={15} colour="red" />
				<ProgressBar value={0.156} colour="yellow" />
			</Stack>
		</>
	);
};
