import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import * as React from 'react';

import { SimplePagination } from '.';

const baseProps = (hasNext = true, hasPrevious = true) => ({
	hasNext: boolean('hasNext', hasNext),
	hasPrevious: boolean('hasPrevious', hasPrevious),
});

export default {
	title: 'Components|Pagination/Simple',
	component: SimplePagination,
};

export const standard = () => (
	<SimplePagination {...baseProps()} onChange={action('onChange')} />
);
export const middlePage = () => (
	<SimplePagination hasNext hasPrevious onChange={action('onChange')} />
);
export const firstPage = () => (
	<SimplePagination
		hasNext
		hasPrevious={false}
		onChange={action('onChange')}
	/>
);
export const lastPage = () => (
	<SimplePagination
		hasPrevious
		hasNext={false}
		onChange={action('onChange')}
	/>
);
