import * as React from 'react';

import { Button } from '../Button';
import { OutsideClick } from '.';

export default {
	title: 'Utility|OutsideClick',
	component: OutsideClick,
	parameters: {
		chromatic: { disable: true },
	},
};

export const standard = () => (
	<OutsideClick
		onOutsideClick={() => {
			// eslint-disable-next-line no-alert
			alert('clicking outside');
		}}>
		<Button>Click anywhere but here</Button>
	</OutsideClick>
);
