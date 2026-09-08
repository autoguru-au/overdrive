import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';

import { Switch, type SwitchProps } from './Switch';
import * as styles from './Switch.css';

const trackSelector = `.${styles.toggle.trim().split(/\s+/).join('.')}`;

const trackIn = (container: HTMLElement) => {
	const track = container.querySelector<HTMLElement>(trackSelector);
	if (!track) throw new Error('Switch track not found');
	return track;
};

const InteractiveSwitch = ({
	onChange,
	isSelected: initiallySelected = false,
	...props
}: SwitchProps) => {
	const [isSelected, setIsSelected] = useState(initiallySelected);
	return (
		<Switch
			{...props}
			isSelected={isSelected}
			onChange={(next) => {
				setIsSelected(next);
				onChange?.(next);
			}}
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

	it('should stamp odComponent and testId on the root element', () => {
		const root = render(<Switch testId="my-switch" />).getByTestId(
			'my-switch',
		);

		expect(root).toHaveAttribute('data-od-component', 'switch');
	});

	it('should pass on className to the root element', () => {
		expect(
			render(<Switch className="toggleButton-class" value="10" />)
				.container.firstChild?.firstChild,
		).toHaveClass('toggleButton-class');
	});

	it('should render the medium size by default', () => {
		const { container } = render(<Switch />);

		expect(trackIn(container)).toHaveClass(styles.size.medium);
	});

	it.each(['medium', 'small'] as const)(
		'should render the %s size',
		(size) => {
			const { container } = render(<Switch size={size} />);

			expect(trackIn(container)).toHaveClass(styles.size[size]);
		},
	);

	it('should carry both state attributes when disabled and selected', () => {
		const { container } = render(<Switch isSelected isDisabled />);
		const track = trackIn(container);

		expect(track).toHaveAttribute('data-active');
		expect(track).toHaveAttribute('data-disabled');
	});

	it('should be un-toggled by default', () => {
		render(<Switch />);

		expect(screen.getByRole('switch')).not.toBeChecked();
	});

	it('should be toggled on when isSelected is set', () => {
		render(<Switch isSelected />);

		expect(screen.getByRole('switch')).toBeChecked();
	});

	it('should be enabled by default', () => {
		render(<Switch />);

		expect(screen.getByRole('switch')).toBeEnabled();
	});

	it('should disable the input when isDisabled is set', () => {
		render(<Switch isDisabled />);

		expect(screen.getByRole('switch')).toBeDisabled();
	});

	it('should fire change with the changed value on every click', () => {
		const onChange = vi.fn();
		const { container } = render(<InteractiveSwitch onChange={onChange} />);
		const track = trackIn(container);

		fireEvent.click(track);
		expect(onChange).toHaveBeenCalledWith(true);

		fireEvent.click(track);
		expect(onChange).toHaveBeenLastCalledWith(false);

		expect(onChange).toHaveBeenCalledTimes(2);
	});

	it('should not fire change if clicked while disabled', () => {
		const onChange = vi.fn();
		const { container } = render(
			<InteractiveSwitch isDisabled onChange={onChange} />,
		);

		fireEvent.click(trackIn(container));

		expect(onChange).not.toHaveBeenCalled();
	});

	it('should reflect a changed isSelected prop', () => {
		const { rerender } = render(<Switch isSelected={false} />);

		expect(screen.getByRole('switch')).not.toBeChecked();

		rerender(<Switch isSelected />);
		expect(screen.getByRole('switch')).toBeChecked();

		rerender(<Switch isSelected={false} />);
		expect(screen.getByRole('switch')).not.toBeChecked();
	});
});
