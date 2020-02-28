import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { SimplePagination } from './SimplePagination';

const baseProps = (hasNext = true, hasPrevious = true) => ({
	hasNext: boolean('hasNext', hasNext),
	hasPrevious: boolean('hasPrevious', hasPrevious),
});
storiesOf('Components|Pagination/Simple', module)
	.add('Standard', () => (
		<SimplePagination {...baseProps()} onChange={action('onChange')} />
	))
	.add('Middle Page', () => (
		<SimplePagination hasNext hasPrevious onChange={action('onChange')} />
	))
	.add('First Page', () => (
		<SimplePagination
			hasNext
			hasPrevious={false}
			onChange={action('onChange')}
		/>
	))
	.add('Last Page', () => (
		<SimplePagination
			hasPrevious
			hasNext={false}
			onChange={action('onChange')}
		/>
	));
