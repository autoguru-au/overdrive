import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Text } from './index';

const baseProps = () => ({
	size: select('Size', [1, 2, 3, 4, 5, 6, 7, 8, 9], 3),
	muted: boolean('Muted', false),
	strong: boolean('Strong', false),
});

storiesOf('Foundation|Typography/Text', module)
	.addDecorator(story => (
		<div style={{ maxWidth: '350px', width: '100%' }}>{story()}</div>
	))
	.add('default', () => <Text {...baseProps()}>Hello World</Text>, {
		notes: 'Used for single text lines.',
	});
