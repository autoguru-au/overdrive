import { number } from '@storybook/addon-knobs';
import * as React from 'react';
import { useState } from 'react';

import { Pagination } from '.';

const defaultNumberOptions = {
	min: 1,
	max: 9999,
	step: 1,
};

const baseProps = (
	activePage = 3,
	total = 99,
	pageSize = 10,
	numPagesDisplayed = 5,
) => ({
	activePage: number('Active Page', activePage, defaultNumberOptions),
	total: number('Total Records', total, defaultNumberOptions),
	pageSize: number('Page Size', pageSize, defaultNumberOptions),
	numPagesDisplayed: number(
		'Displayed Page Bubbles Number',
		numPagesDisplayed,
		defaultNumberOptions,
	),
});

export default {
	title: 'Components|Pagination/Numbered',
	component: Pagination,
};

export const standard = () => {
	const Example = () => {
		const [activePage, setActivePage] = useState(1);

		const onChangeHandler = e => {
			setActivePage(e.pageNumber);
		};

		return (
			<Pagination
				activePage={activePage}
				pageSize={10}
				total={100}
				onChange={onChangeHandler}
			/>
		);
	};

	return <Example />;
};

export const loading = () => <Pagination loading />;
export const lessThanMaxPages = () => (
	<Pagination {...baseProps(1, 20, 10, 5)} />
);
export const allPagesFit = () => <Pagination {...baseProps(1, 45, 10, 5)} />;
export const jumpForwardStart = () => (
	<Pagination {...baseProps(1, 638, 10, 5)} />
);
export const jumpForwardMiddle = () => (
	<Pagination {...baseProps(4, 638, 10, 5)} />
);
export const lastChunkStart = () => (
	<Pagination {...baseProps(60, 638, 10, 5)} />
);
export const lastChunkMiddle = () => (
	<Pagination {...baseProps(61, 638, 10, 5)} />
);
export const jumpBackStart = () => (
	<Pagination {...baseProps(62, 638, 10, 5)} />
);
export const jumpBackMiddle = () => (
	<Pagination {...baseProps(63, 638, 10, 5)} />
);
export const jumpBackEnd = () => <Pagination {...baseProps(64, 638, 10, 5)} />;
