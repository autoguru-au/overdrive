import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { OutsideClick } from '.';

storiesOf('Utility|OutsideClick', module)
	.addParameters({ chromatic: { disable: true } })
	.add('default', () => (
		<OutsideClick
			onOutsideClick={() => {
				// eslint-disable-next-line no-alert
				alert('clicking outside');
			}}>
			<Button>Click anywhere but here</Button>
		</OutsideClick>
	));
