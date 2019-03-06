import { storiesOf } from '@storybook/react';
import React from 'react';

import { LinearProgressIndicator } from '.';

storiesOf('Components|Progress/Linear', module)
	.addDecorator(story => (
		<div style={{ width: '100vw', height: '100vh' }}>{story()}</div>
	))
	.add('default', () => <LinearProgressIndicator />);
