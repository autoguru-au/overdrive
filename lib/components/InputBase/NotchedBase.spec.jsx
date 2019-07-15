import React from 'react';
import { render } from '@testing-library/react';
import { NotchedBase } from './NotchedBase';

describe('<NotchedBase />', () => {
	it('should not throw', () => {
		expect(() =>
			render(<NotchedBase placeholder="placeholder something" />),
		).not.toThrow();
	});

	it('should pass on className to dom element', () => {
		expect(
			render(
				<NotchedBase
					className="notched-class"
					placeholder="placeholder something"
				/>,
			).container.firstChild,
		).toHaveClass('notched-class');
	});

	it('should match snapshot for default notch', () => {
		expect(
			render(<NotchedBase placeholder="placeholder something" />)
				.container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for dirty notch', () => {
		expect(
			render(<NotchedBase isDirty placeholder="placeholder something" />)
				.container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for active notch', () => {
		expect(
			render(<NotchedBase isActive placeholder="placeholder something" />)
				.container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for dirty and active notch', () => {
		expect(
			render(
				<NotchedBase
					isActive
					isDirty
					placeholder="placeholder something"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should display children', () => {
		expect(
			render(
				<NotchedBase placeholder="placeholder something">
					something children
				</NotchedBase>,
			).container,
		).toHaveTextContent('something children');
	});

	it('should display placeholder text inside a label element', () => {
		expect(
			render(
				<NotchedBase
					placeholder="placeholder something"
					className="notched-class"
				/>,
			).container.querySelector('label'),
		).toHaveTextContent('placeholder something');
	});

	it('should add shifted classname to dom element when isEmpty is false', () => {
		expect(
			render(
				<NotchedBase
					isEmpty={false}
					className="notched-class"
					placeholder="placeholder something"
				/>,
			).container.firstChild,
		).toHaveClass('notchedBaseShift');
	});

	it('should not shifted classname to dom element when isEmpty is true', () => {
		expect(
			render(
				<NotchedBase
					isEmpty
					className="notched-class"
					placeholder="placeholder something"
				/>,
			).container.firstChild,
		).not.toHaveClass('notchedBaseShift');
	});

	it('should add active style to dom element when isActive prop is true', () => {
		expect(
			render(
				<NotchedBase
					isActive
					className="notched-class"
					placeholder="placeholder something"
				/>,
			).container.firstChild,
		).toHaveClass('notchedBaseActive');
	});
});
