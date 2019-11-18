import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

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
storiesOf('Components|Pagination/Numbered', module)
	.add('standard', () => {
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
	})
	.add('loading', () => <Pagination {...baseProps(null)} />)
	.add('less than max pages', () => (
		<Pagination {...baseProps(1, 20, 10, 5)} />
	))
	.add('all pages fit', () => <Pagination {...baseProps(1, 45, 10, 5)} />)
	.add('jump forward start', () => (
		<Pagination {...baseProps(1, 638, 10, 5)} />
	))
	.add('jump forward middle', () => (
		<Pagination {...baseProps(4, 638, 10, 5)} />
	))
	.add('last chunk start', () => (
		<Pagination {...baseProps(60, 638, 10, 5)} />
	))
	.add('last chunk middle', () => (
		<Pagination {...baseProps(61, 638, 10, 5)} />
	))
	.add('jump back start', () => <Pagination {...baseProps(62, 638, 10, 5)} />)
	.add('jump back middle', () => (
		<Pagination {...baseProps(63, 638, 10, 5)} />
	))
	.add('jump back end', () => <Pagination {...baseProps(64, 638, 10, 5)} />);
