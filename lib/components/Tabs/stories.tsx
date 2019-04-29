import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Tab, Tabs } from '.';

storiesOf('Components|Tabs', module)
	.addDecorator(story => (
		<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
	))
	.add('default', () => (
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
	))
	.add('with external active', () => (
		<Tabs active={number('Active', 0)}>
			<Tab title={'A'}>a</Tab>
			<Tab title={'B'}>b</Tab>
		</Tabs>
	))
	.add('with number', () => (
		<Tabs>
			<Tab title="Leads" indication="10">
				Content a
			</Tab>
			<Tab title="Claimed" indication="3">
				Content b
			</Tab>
			<Tab title="Expired">Content c</Tab>
		</Tabs>
	));
