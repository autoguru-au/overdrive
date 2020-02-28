import { storiesOf } from '@storybook/react';
import React from 'react';

import { LinearProgressIndicator } from '.';

storiesOf('Components|Progress/Linear', module)
	.addParameters({ chromatic: { disable: true } })
	.addDecorator(story => (
		<div style={{ width: '100vw', height: '100%' }}>{story()}</div>
	))
	.add('Standard', () => <LinearProgressIndicator />);
