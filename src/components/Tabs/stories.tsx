import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Tab, Tabs } from '.';

storiesOf('Components|Tabs', module).add('default', () => (
	<Tabs>
		{(text('Tabs', 'Tab 1, Tab 2') as string)
			.split(',')
			.map(item => item.trim())
			.map(item => (
				<Tab title={item} key={item}>
					Some Content for the <i>{item}</i> tab.
				</Tab>
			))}
	</Tabs>
));
