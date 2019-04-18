import { storiesOf } from '@storybook/react';
import React from 'react';

import { LinearProgressIndicator } from '.';

storiesOf('Components|Progress/Linear', module)
	.addDecorator(story => (
		<div style={{ width: '100%', height: '100%' }}>{story()}</div>
	))
	.add('default', () => <LinearProgressIndicator />);
