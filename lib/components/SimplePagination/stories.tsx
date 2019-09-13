import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { SimplePagination } from './SimplePagination';

const baseProps = (hasNext: boolean = true, hasPrevious: boolean = true) => ({
	hasNext: boolean('hasNext', hasNext),
	hasPrevious: boolean('hasPrevious', hasPrevious),
});
storiesOf('Components|Pagination/Simple', module)
	.add('default', () => (
		<SimplePagination {...baseProps()} onChange={action('onChange')} />
	))
	.add('middle page', () => (
		<SimplePagination hasNext hasPrevious onChange={action('onChange')} />
	))
	.add('first page', () => (
		<SimplePagination
			hasNext
			hasPrevious={false}
			onChange={action('onChange')}
		/>
	))
	.add('last page', () => (
		<SimplePagination
			hasPrevious
			hasNext={false}
			onChange={action('onChange')}
		/>
	));
