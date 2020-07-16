import * as React from 'react';

import { LoadingBox } from '.';

export default {
	title: 'Components|Loading/Box',
	component: LoadingBox,
	decorators: [
		(story) => (
			<div style={{ width: '50%', height: '100%', margin: '0 auto' }}>
				{story()}
			</div>
		),
	],
	parameters: { chromatic: { disable: true } },
};

export const standard = () => <LoadingBox />;
export const blinkingOff = () => <LoadingBox blinking={false} />;
export const randumWidth = () => <LoadingBox randomWidth />;
