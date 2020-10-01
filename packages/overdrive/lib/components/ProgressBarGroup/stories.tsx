import isChromatic from 'chromatic/isChromatic';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { ProgressBarGroup } from '.';

export default {
	title: 'Components/Progress/ProgressBarGroup',
	component: ProgressBarGroup,
};

export const Standard = () => {
	const [things, setThings] = useState([48, 16, 24, 0, 3]);

	useEffect(() => {
		const i = setInterval(() => {
			const collect: number[] = [];
			const outOf = Math.round(Math.random() * 45);

			for (let x = 0; x <= 4; x++) {
				collect.push(Math.round(Math.random() * outOf));
			}

			if (!isChromatic()) setThings(collect);
		}, 1e3);

		return () => clearInterval(i);
	}, []);

	return (
		<ProgressBarGroup
			values={things}
			prefixLabels={['5 star', '4 star', '3 star', '2 star', '1 star']}
			suffixLabels={things.map((item) => item.toString())}
		/>
	);
};
