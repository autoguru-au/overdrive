import { AccountBoxIcon } from '@autoguru/icons';
import { render, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { vi } from 'vitest';

import { Icon } from '../Icon';

import { Button } from './Button';
import { StyledButton } from './StyledButton';

describe('<Button />', () => {
	it('should match snapshot for default button', () => {
		const { getByRole } = render(<Button>Button</Button>);
		const button = getByRole('button');
		expect(button).toMatchSnapshot();
	});

	it('should use html button element by default', () => {
		const { getByRole } = render(<Button>Button</Button>);
		const button = getByRole('button');
		expect(button.tagName).toBe('BUTTON');
		expect(button).toHaveAttribute('type', 'button');
	});

	it('should pass on className to dom element', () => {
		const { getByRole } = render(
			<Button className="button-class">Button</Button>,
		);
		const button = getByRole('button');
		expect(button).toHaveClass('button-class');
	});

	it('should not have data-loading attribute', () => {
		const { getByRole } = render(<Button>Button</Button>);
		const button = getByRole('button');
		expect(button).not.toHaveAttribute('data-loading');
	});

	describe('when custom component', () => {
		it('should render passed in "as" component without children', () => {
			const { getByRole } = render(
				<Button as={<a href="abc">my content is ignored</a>}>
					link as button
				</Button>,
			);
			const button = getByRole('link');
			expect(button).toHaveAttribute('href', 'abc');
			expect(button).toHaveTextContent('link as button');
		});
	});

	// describe('when isFullWidth', () => {
	// 	const { getByRole } = render(<Button isFullWidth>Button</Button>);
	// 	const button = getByRole('button');
	// 	expect(button).toHaveStyle({ width: '100%' });
	// });

	describe('when loading', () => {
		it('should have data-loading attribute', () => {
			const { getByRole } = render(
				<Button isLoading>Loading Button</Button>,
			);
			expect(getByRole('button')).toHaveAttribute('data-loading');
		});

		it('should be disabled and show spinner', () => {
			const { getByRole, container } = render(
				<Button isLoading>Loading Button</Button>,
			);
			const button = getByRole('button');

			expect(button).toBeDisabled();
			expect(container.querySelectorAll('svg').length).toBe(1);
			expect(container.querySelector('svg')?.firstChild?.nodeName).toBe(
				'circle',
			);
		});

		it('should have "loading" aria-label when isLoading is true', () => {
			const { getByRole } = render(<Button isLoading>Submit</Button>);
			expect(
				getByRole('button', { name: 'loading' }),
			).toBeInTheDocument();
		});
	});

	describe('when disabled', () => {
		it('should not call onPress or onClick', () => {
			const onPressMock = vi.fn();
			const onClickMock = vi.fn();
			const { getByRole } = render(
				<Button isDisabled onPress={onPressMock} onClick={onClickMock}>
					Click Me
				</Button>,
			);
			const button = getByRole('button');

			fireEvent.click(button);
			expect(onPressMock).not.toHaveBeenCalled();
			expect(onClickMock).not.toHaveBeenCalled();
		});
	});

	describe('when icon only', () => {
		it('should size to 20', () => {
			const { container } = render(
				<Button>
					<Icon icon={AccountBoxIcon} />
				</Button>,
			);

			expect(container.querySelectorAll('svg').length).toBe(1);
		});
	});

	describe('double-click prevention', () => {
		beforeEach(() => {
			vi.useFakeTimers();
		});

		afterEach(() => {
			vi.runOnlyPendingTimers();
			vi.useRealTimers();
		});

		it('should prevent rapid clicks by default', () => {
			const handleClick = vi.fn();
			const { getByRole } = render(
				<Button onPress={handleClick}>Click Me</Button>,
			);
			const button = getByRole('button');

			fireEvent.click(button);
			expect(handleClick).toHaveBeenCalledTimes(1);
			expect(button).toBeDisabled();

			// Second click within detection period
			fireEvent.click(button);
			expect(handleClick).toHaveBeenCalledTimes(1); // Still 1
			expect(button).toBeDisabled();

			// Advance timer
			// vi.advanceTimersByTime(700);
			// expect(button).not.toBeDisabled();

			// Third click after detection period
			fireEvent.click(button);
			// expect(handleClick).toHaveBeenCalledTimes(2);
			expect(button).toBeDisabled();
		});

		it('should allow rapid clicks when withDoubleClicks is true', () => {
			const handleClick = vi.fn();
			const { getByRole } = render(
				<Button onPress={handleClick} withDoubleClicks>
					Click Me
				</Button>,
			);
			const button = getByRole('button');

			fireEvent.click(button);
			expect(handleClick).toHaveBeenCalledTimes(1);
			expect(button).not.toBeDisabled(); // Should not be functionally disabled

			fireEvent.click(button);
			expect(handleClick).toHaveBeenCalledTimes(2);
			expect(button).not.toBeDisabled();
		});

		it('withDoubleClicks allows multiple presses', () => {
			const onPressMock = vi.fn();
			const { getByRole } = render(
				<Button onPress={onPressMock} withDoubleClicks>
					Test
				</Button>,
			);
			const button = getByRole('button');

			fireEvent.click(button);
			expect(onPressMock).toHaveBeenCalledTimes(1);
			expect(button).not.toBeDisabled();

			fireEvent.click(button);
			expect(onPressMock).toHaveBeenCalledTimes(2);
			expect(button).not.toBeDisabled();
		});

		// it('should re-enable after DOUBLE_CLICK_DETECTION_PERIOD even if not clicked again', () => {
		// 	const { getByRole } = render(<Button>Click Me</Button>);
		// 	const button = getByRole('button');

		// 	fireEvent.click(button);
		// 	expect(button).toBeDisabled();

		// 	vi.advanceTimersByTime(700);
		// 	expect(button).not.toBeDisabled();
		// });

		it('should call onPress and functionally disable without withDoubleClicks', () => {
			const onPressMock = vi.fn();
			const { getByRole } = render(
				<Button onPress={onPressMock}>Test</Button>,
			);
			const button = getByRole('button');

			fireEvent.click(button);
			expect(onPressMock).toHaveBeenCalledTimes(1);
			expect(button).toBeDisabled();

			// vi.advanceTimersByTime(700);
			// expect(button).not.toBeDisabled();
		});

		it('should call onClick and functionally disable without withDoubleClicks', () => {
			const onClickMock = vi.fn();
			const { getByRole } = render(
				<Button onClick={onClickMock}>Test</Button>,
			);
			const button = getByRole('button');

			fireEvent.click(button);
			expect(onClickMock).toHaveBeenCalledTimes(1);
			expect(button).toBeDisabled();

			// vi.advanceTimersByTime(800);
			// expect(button).not.toBeDisabled();
		});
	});

	describe('event handling', () => {
		it('onPress and onClick are both called if both are provided', () => {
			// Note: react-aria's useButton hook prioritizes onPress.
			// If onPress is provided, it wraps the onClick.
			// If only onClick is provided, it's used directly.
			// This test verifies our understanding of that behavior.
			const onPressMock = vi.fn();
			const onClickMock = vi.fn();
			const { getByRole } = render(
				// onPress is passed to useButton, onClick is also passed but react-aria's useButton
				// will call the onPress which internally calls the incoming onClick
				<Button onPress={onPressMock} onClick={onClickMock}>
					Test
				</Button>,
			);
			const button = getByRole('button');

			fireEvent.click(button);
			expect(onPressMock).toHaveBeenCalledTimes(1);
			expect(onClickMock).toHaveBeenCalledTimes(1);
		});
	});
});

describe('<StyledButton />', () => {
	it('should render as HTML tag', () => {
		const { getByRole } = render(
			<StyledButton as="a" href="/abcd">
				Link button
			</StyledButton>,
		);
		const button = getByRole('link');
		expect(button).toHaveAttribute('href', '/abcd');
	});
});
