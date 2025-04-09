import { act, fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';

import { Switch } from './Switch';
import * as styles from './Switch.css.ts';

const InteractiveSwitch = ({
	onChange: incomingOnChange = () => void 0,
	value: incomingValue,
	...args
}) => {
	const [value, setValue] = useState(incomingValue);
	return (
		<Switch
			onChange={(stepValue) => {
				setValue(stepValue);
				incomingOnChange(stepValue);
			}}
			value={value}
			{...args}
		/>
	);
};

describe('<Switch />', () => {
	it('should not throw', () =>
		expect(() => render(<Switch />)).not.toThrow());

	it('should match snapshot without props', () => {
		expect(render(<Switch />).container.firstChild).toMatchSnapshot();
	});

	it('should match snapshot when un-toggled', () => {
		expect(
			render(<Switch isSelected={false} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when un-toggled and disabled', () => {
		expect(
			render(<Switch disabled isSelected={false} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when toggled', () => {
		expect(
			render(<Switch isSelected />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot when toggled and disabled', () => {
		expect(
			render(<Switch isSelected disabled />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		expect(
			render(<Switch className="toggleButton-class" value={10} />)
				.container.firstChild.firstChild,
		).toHaveClass('toggleButton-class');
	});

	it('should set toggle to false by default', () => {
		expect(
			render(<Switch />).container.firstChild.firstChild.childNodes[1],
		).not.toHaveAttribute('data-active');
	});

	it('should be toggled on when toggled prop is set to true', () => {
		expect(
			render(<Switch isSelected />).container.firstChild.firstChild
				.childNodes[1],
		).toHaveAttribute('data-active');
	});

	it('should be enabled by default', () => {
		expect(
			render(<Switch />).container.querySelector('[data-disabled]'),
		).not.toBeInTheDocument();
	});

	it('should have aria-disabled attribute when disabled', () => {
		const { container } = render(<Switch isDisabled />);
		expect(container.querySelector('input')).toHaveAttribute('disabled');
	});

	it('should fire change with the correct changed value when clicked', () => {
		const spyedCallback = vi.fn();

		const { container: toggledContainer } = render(
			<InteractiveSwitch isSelected={false} onChange={spyedCallback} />,
		);

		fireEvent.click(toggledContainer.firstChild.firstChild.childNodes[1]);

		expect(spyedCallback).toHaveBeenCalledWith(true);

		const { container: untoggledContainer } = render(
			<InteractiveSwitch isSelected={true} onChange={spyedCallback} />,
		);
		fireEvent.click(untoggledContainer.firstChild.firstChild.childNodes[1]);

		expect(spyedCallback).toHaveBeenCalledWith(false);

		expect(spyedCallback).toHaveBeenCalledTimes(2);
	});

	it('should not fire change if clicked while disabled', () => {
		const spyedCallback = vi.fn();

		const { container } = render(
			<InteractiveSwitch
				isDisabled
				isSelected={false}
				onChange={spyedCallback}
			/>,
		);

		fireEvent.click(container.firstChild.firstChild.childNodes[1]);

		expect(spyedCallback).not.toHaveBeenCalled();
	});

	it('should update its value when and a value prop comes in', () => {
		const ToggleButtonWrapper = ({ setter }) => {
			const [toggled, toggledValue] = useState(false);

			setter(toggledValue);

			return <Switch isSelected={toggled} />;
		};

		let setToggledValue;
		const { container } = render(
			<ToggleButtonWrapper
				setter={(setter) => {
					setToggledValue = setter;
				}}
			/>,
		);

		expect(
			container.firstChild.firstChild.childNodes[1],
		).not.toHaveAttribute('data-active');

		act(() => setToggledValue(true));

		expect(container.firstChild.firstChild.childNodes[1]).toHaveAttribute(
			'data-active',
		);

		act(() => setToggledValue(false));

		expect(
			container.firstChild.firstChild.childNodes[1],
		).not.toHaveAttribute('data-active');
	});
});
