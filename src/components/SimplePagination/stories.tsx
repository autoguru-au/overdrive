import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { SimplePagination } from './SimplePagination';

const baseProps = (hasNext: boolean = true, hasPrevious: boolean = true) => ({
	hasNext: boolean('hasNext', hasNext),
	hasPrevious: boolean('hasPrevious', hasPrevious),
});
storiesOf('Components|Pagination/Simple', module)
	.add('default', () => {
		const Example = () => {
			const onChangeHandler = e => {
				console.log(e);
			};

			return (
				<SimplePagination {...baseProps()} onChange={onChangeHandler} />
			);
		};

		return <Example />;
	})
	.add('middle page', () => {
		const Example = () => {
			const onChangeHandler = e => {
				console.log(e);
			};

			return (
				<SimplePagination
					hasNext={true}
					hasPrevious={true}
					onChange={onChangeHandler}
				/>
			);
		};

		return <Example />;
	})
	.add('first page', () => {
		const Example = () => {
			const onChangeHandler = e => {
				console.log(e);
			};

			return (
				<SimplePagination
					hasNext={true}
					hasPrevious={false}
					onChange={onChangeHandler}
				/>
			);
		};

		return <Example />;
	})
	.add('last page', () => {
		const Example = () => {
			const onChangeHandler = e => {
				console.log(e);
			};

			return (
				<SimplePagination
					hasNext={false}
					hasPrevious={true}
					onChange={onChangeHandler}
				/>
			);
		};

		return <Example />;
	});
