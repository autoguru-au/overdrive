import * as React from 'react';

import { ProgressSpinner } from '.';

export default {
	title: 'Components|Progress/Spinner',
	component: ProgressSpinner,
	decorators: [
		story => (
			<div
				style={{
					width: '100%',
					height: '100%',
					flexDirection: 'row',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				{story()}
			</div>
		),
	],
	parameters: { chromatic: { disable: true } },
};

export const Standard = () => (
	<ProgressSpinner colour="primary" size="medium" />
);
