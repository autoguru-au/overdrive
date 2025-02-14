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
				.container.firstChild.childNodes[1],
		).toHaveClass('toggleButton-class');
	});

	it('should set toggle to false by default', () => {
		expect(
			render(<Switch />).container.firstChild.childNodes[1],
		).not.toHaveClass(styles.toggled);
	});

	it('should be toggled on when toggled prop is set to true', () => {
		expect(
			render(<Switch isSelected />).container.firstChild.childNodes[1],
		).toHaveClass(styles.toggled);
	});

	it('should be enabled by default', () => {
		expect(
			render(<Switch />).container.querySelector('.disabled'),
		).not.toBeInTheDocument();
	});

	it('should have aria-disabled attribute when disabled', () => {
		const { container } = render(<Switch isDisabled />);

		expect(container.firstChild.childNodes[1]).toHaveClass(
			styles.disabled.default,
		);
		expect(container.firstChild.childNodes[1]).toHaveAttribute(
			'aria-disabled',
			'true',
		);
	});

	it('should have aria-disabled attribute when isSelected and disabled', () => {
		const { container } = render(<Switch isSelected isDisabled />);

		expect(container.firstChild.childNodes[1]).toHaveClass(
			styles.disabled.toggled,
		);
		expect(container.firstChild.childNodes[1]).toHaveAttribute(
			'aria-disabled',
			'true',
		);
	});

	it('should fire change with the correct changed value when clicked', () => {
		const spyedCallback = vi.fn();

		const { container: toggledContainer } = render(
			<InteractiveSwitch isSelected={false} onChange={spyedCallback} />,
		);

		fireEvent.click(toggledContainer.firstChild.childNodes[1]);

		expect(spyedCallback).toHaveBeenCalledWith(true);

		const { container: untoggledContainer } = render(
			<InteractiveSwitch isSelected={true} onChange={spyedCallback} />,
		);
		fireEvent.click(untoggledContainer.firstChild.childNodes[1]);

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

		fireEvent.click(container.firstChild.childNodes[1]);

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

		expect(container.firstChild.childNodes[1]).not.toHaveClass(
			styles.toggled,
		);

		act(() => setToggledValue(true));

		expect(container.firstChild.childNodes[1]).toHaveClass(styles.toggled);

		act(() => setToggledValue(false));

		expect(container.firstChild.childNodes[1]).not.toHaveClass(
			styles.toggled,
		);
	});
});
