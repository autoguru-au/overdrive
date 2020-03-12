import { act, fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';

import { Switch } from './Switch';

describe('<Switch />', () => {
	it('should not throw', () =>
		expect(() => render(<Switch />)).not.toThrow());

	it('should match snapshot without props', () => {
		expect(render(<Switch />).container.firstChild).toMatchSnapshot();
	});

	it('should match snapshot when un-toggled', () => {
		expect(
			render(<Switch toggled={false} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when un-toggled and disabled', () => {
		expect(
			render(<Switch disabled toggled={false} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when toggled', () => {
		expect(
			render(<Switch toggled />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when toggled and disabled', () => {
		expect(
			render(<Switch toggled disabled />).container.firstChild,
		).toMatchSnapshot();
	});

	it.skip('should pass on className to dom element', () => {
		expect(
			render(
				<Switch className="toggleButton-class" value={10} />,
			).container.querySelector('div'),
		).toHaveClass('toggleButton-class');
	});

	it.skip('should set toggle to false by default', () => {
		expect(render(<Switch />).container.firstChild).not.toHaveClass(
			'toggled',
		);
	});

	it.skip('should be toggled on when toggled prop is set to true', () => {
		expect(render(<Switch toggled />).container.firstChild).toHaveClass(
			'toggled',
		);
	});

	it('should be enabled by default', () => {
		expect(
			render(<Switch />).container.querySelector('.disabled'),
		).not.toBeInTheDocument();
	});

	it.skip('should have aria-disabled attribute when disabled', () => {
		const { container } = render(<Switch disabled />);

		expect(container.firstChild).toHaveClass('disabled');
		expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
	});

	it('should fire change with the correct changed value when clicked', () => {
		const spyedCallback = jest.fn();

		const { container } = render(
			<Switch toggled={false} onChange={spyedCallback} />,
		);

		fireEvent.click(container.firstChild);

		expect(spyedCallback).toHaveBeenCalledWith(true);

		fireEvent.click(container.firstChild);

		expect(spyedCallback).toHaveBeenCalledWith(false);

		fireEvent.click(container.firstChild);

		expect(spyedCallback).toHaveBeenCalledWith(true);
		expect(spyedCallback).toHaveBeenCalledTimes(3);
	});

	it('should not fire change if clicked while disabled', () => {
		const spyedCallback = jest.fn();

		const { container } = render(
			<Switch disabled toggled={false} onChange={spyedCallback} />,
		);

		fireEvent.click(container.firstChild);

		expect(spyedCallback).not.toHaveBeenCalled();
	});

	it.skip('should update its value when and a value prop comes in', () => {
		const ToggleButtonWrapper = ({ setter }) => {
			const [toggled, toggledValue] = useState(false);

			setter(toggledValue);

			return <Switch toggled={toggled} />;
		};

		let setToggledValue;
		const { container } = render(
			<ToggleButtonWrapper
				setter={setter => {
					setToggledValue = setter;
				}}
			/>,
		);

		expect(container.firstChild).not.toHaveClass('toggled');

		act(() => setToggledValue(true));

		expect(container.firstChild).toHaveClass('toggled');

		act(() => setToggledValue(false));

		expect(container.firstChild).not.toHaveClass('toggled');
	});
});
