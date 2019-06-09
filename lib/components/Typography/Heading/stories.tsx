import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Heading } from '.';

storiesOf('Foundation|Typography/Heading', module)
	.addDecorator(story => (
		<div style={{ maxWidth: '350px', width: '100%' }}>{story()}</div>
	))
	.add('default', () => (
		<Heading
			is={select('Tag', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1')}
			size={select('Size', [1, 2, 3, 4, 5, 6, 7, 8, 9])}>
			Hello World
		</Heading>
	));
