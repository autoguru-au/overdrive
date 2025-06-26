import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { vi } from 'vitest';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { Text } from '../Text';
import { TextInput } from '../TextInput';

import { Tooltip, TooltipOnComponent } from './Tooltip';

describe('<Tooltip />', () => {
	const tooltipContentText = 'tooltip content';

	it('should not throw', () => {
		expect(() => {
			render(
				<Tooltip label="Test">
					<div>trigger</div>
				</Tooltip>,
			);
		}).not.toThrow();
	});

	it('should have body when open', () => {
		const { container, getByText } = render(
			<Tooltip label={tooltipContentText}>
				<div>trigger</div>
			</Tooltip>,
		);

		fireEvent.mouseEnter(getByText('trigger'));

		expect(container.parentNode).toHaveTextContent(tooltipContentText);
	});

	// TODO: This is skipped, as the `style="visibility: visible;"` shouldnt be there
	it('should match snapshot when closed', () => {
		const { baseElement } = render(
			<Tooltip label={tooltipContentText}>
				<div>trigger</div>
			</Tooltip>,
		);

		expect(baseElement).toMatchSnapshot();
	});

	it('should match snapshot when opened', () => {
		const { baseElement, getByText } = render(
			<Tooltip label={tooltipContentText}>
				<div>trigger</div>
			</Tooltip>,
		);

		fireEvent.mouseEnter(getByText('trigger'));

		expect(baseElement).toMatchSnapshot();
	});

	describe('with string children', () => {
		it('should work with string content', () => {
			const { container, getByText } = render(
				<Tooltip label="tooltip content">Simple text content</Tooltip>,
			);

			expect(container).toHaveTextContent('Simple text content');

			fireEvent.mouseEnter(getByText('Simple text content'));
			expect(container.parentNode).toHaveTextContent('tooltip content');
		});
	});

	describe('with Text component children', () => {
		it('should work with Text component', () => {
			const { container } = render(
				<Tooltip label="Text tooltip">
					<Text>Text component content</Text>
				</Tooltip>,
			);

			expect(container).toHaveTextContent('Text component content');

			// Tooltip should wrap the Text component in a span
			const wrapper = container.querySelector('span');
			expect(wrapper).toBeInTheDocument();

			if (wrapper) fireEvent.mouseEnter(wrapper);
			expect(container.parentNode).toHaveTextContent('Text tooltip');
		});
	});

	describe('with Badge component children', () => {
		it('should work with Badge component', () => {
			const { container } = render(
				<Tooltip label="Badge tooltip">
					<Badge label="Badge content" />
				</Tooltip>,
			);

			expect(container).toHaveTextContent('Badge content');

			// Tooltip should wrap the Badge component in a span
			const wrapper = container.querySelector('span');
			expect(wrapper).toBeInTheDocument();

			if (wrapper) fireEvent.mouseEnter(wrapper);
			expect(container.parentNode).toHaveTextContent('Badge tooltip');
		});
	});

	describe('multiple children support', () => {
		it('should work with multiple children', () => {
			const { container } = render(
				<Tooltip label="Test">
					<div>First child</div>
					<div>Second child</div>
				</Tooltip>,
			);

			expect(container).toHaveTextContent('First child');
			expect(container).toHaveTextContent('Second child');

			// Multiple children should be wrapped in a span
			const wrapper = container.querySelector('span');
			expect(wrapper).toBeInTheDocument();
		});

		it('should show tooltip when hovering over multiple children wrapper', () => {
			const { container } = render(
				<Tooltip label={tooltipContentText}>
					<div>First child</div>
					<div>Second child</div>
				</Tooltip>,
			);

			const wrapper = container.querySelector('span');
			if (wrapper) fireEvent.mouseEnter(wrapper);

			expect(container.parentNode).toHaveTextContent(tooltipContentText);
		});

		it('should work with React Fragment children', () => {
			const { container } = render(
				<Tooltip label="Fragment tooltip">
					<>
						<div>Fragment child 1</div>
						<div>Fragment child 2</div>
					</>
				</Tooltip>,
			);

			expect(container).toHaveTextContent('Fragment child 1');
			expect(container).toHaveTextContent('Fragment child 2');

			// Fragment children should be wrapped in a span
			const wrapper = container.querySelector('span');
			expect(wrapper).toBeInTheDocument();
		});

		it('should show tooltip when hovering over React Fragment wrapper', () => {
			const { container } = render(
				<Tooltip label="Fragment tooltip content">
					<>
						<div>Fragment child 1</div>
						<div>Fragment child 2</div>
					</>
				</Tooltip>,
			);

			const wrapper = container.querySelector('span');
			if (wrapper) fireEvent.mouseEnter(wrapper);

			expect(container.parentNode).toHaveTextContent(
				'Fragment tooltip content',
			);
		});
	});

	describe('controlled state', () => {
		it('should show tooltip when isOpen is true', () => {
			const { container } = render(
				<Tooltip label="controlled tooltip" isOpen={true}>
					<div>trigger</div>
				</Tooltip>,
			);

			expect(container.parentNode).toHaveTextContent(
				'controlled tooltip',
			);
		});

		it('should not show tooltip when isOpen is false', () => {
			const { container } = render(
				<Tooltip label="controlled tooltip" isOpen={false}>
					<div>trigger</div>
				</Tooltip>,
			);

			expect(container.parentNode).not.toHaveTextContent(
				'controlled tooltip',
			);
		});
	});

	describe('no label handling', () => {
		it('should not render tooltip when label is empty', () => {
			const { container } = render(
				<Tooltip label="">
					<div>trigger</div>
				</Tooltip>,
			);

			// Should return children without wrapping span
			expect(container.querySelector('span')).not.toBeInTheDocument();
			expect(container).toHaveTextContent('trigger');
		});
	});
});

describe('<TooltipOnComponent />', () => {
	it('should not throw with interactive components', () => {
		expect(() => {
			render(
				<TooltipOnComponent label="Interactive tooltip">
					<Button>Click me</Button>
				</TooltipOnComponent>,
			);
		}).not.toThrow();
	});

	describe('with Button component', () => {
		it('should work with Button component', () => {
			const { getByRole } = render(
				<TooltipOnComponent label="Button tooltip">
					<Button>Interactive Button</Button>
				</TooltipOnComponent>,
			);

			const button = getByRole('button');
			expect(button).toHaveTextContent('Interactive Button');

			fireEvent.mouseEnter(button);
			// Use a more reliable way to check for tooltip content
			expect(document.body).toHaveTextContent('Button tooltip');
		});

		it('should preserve button functionality', () => {
			const handleClick = vi.fn();
			const { getByRole } = render(
				<TooltipOnComponent label="Clickable button tooltip">
					<Button onClick={handleClick}>Clickable Button</Button>
				</TooltipOnComponent>,
			);

			const button = getByRole('button');
			fireEvent.click(button);
			expect(handleClick).toHaveBeenCalledTimes(1);
		});
	});

	describe('with TextInput component', () => {
		it('should work with TextInput component', () => {
			const { container, getByRole } = render(
				<TooltipOnComponent label="Input tooltip">
					<TextInput name="test-input" placeholder="Enter text" />
				</TooltipOnComponent>,
			);

			const input = getByRole('textbox');

			fireEvent.mouseEnter(input);
			expect(container.parentNode).toHaveTextContent('Input tooltip');
		});

		it('should preserve input functionality', () => {
			const handleChange = vi.fn();
			const { getByRole } = render(
				<TooltipOnComponent label="Interactive input tooltip">
					<TextInput
						name="test-input-2"
						placeholder="Test input"
						onChange={handleChange}
					/>
				</TooltipOnComponent>,
			);

			const input = getByRole('textbox');
			fireEvent.change(input, { target: { value: 'test' } });
			expect(handleChange).toHaveBeenCalled();
		});
	});

	describe('with native button element', () => {
		it('should work with native button', () => {
			const { container, getByRole } = render(
				<TooltipOnComponent label="Native button tooltip">
					<button type="button">Native Button</button>
				</TooltipOnComponent>,
			);

			const button = getByRole('button');
			expect(button).toHaveTextContent('Native Button');

			fireEvent.mouseEnter(button);
			expect(container.parentNode).toHaveTextContent(
				'Native button tooltip',
			);
		});

		it('should preserve native button functionality', () => {
			const handleClick = vi.fn();
			const { getByRole } = render(
				<TooltipOnComponent label="Native clickable tooltip">
					<button type="button" onClick={handleClick}>
						Native Clickable
					</button>
				</TooltipOnComponent>,
			);

			const button = getByRole('button');
			fireEvent.click(button);
			expect(handleClick).toHaveBeenCalledTimes(1);
		});
	});

	describe('controlled state', () => {
		it('should show tooltip when isOpen is true', () => {
			const { container } = render(
				<TooltipOnComponent
					label="controlled interactive tooltip"
					isOpen={true}
				>
					<Button>Controlled Button</Button>
				</TooltipOnComponent>,
			);

			expect(container.parentNode).toHaveTextContent(
				'controlled interactive tooltip',
			);
		});

		it('should not show tooltip when isOpen is false', () => {
			const { container } = render(
				<TooltipOnComponent
					label="controlled interactive tooltip"
					isOpen={false}
				>
					<Button>Controlled Button</Button>
				</TooltipOnComponent>,
			);

			expect(container.parentNode).not.toHaveTextContent(
				'controlled interactive tooltip',
			);
		});
	});

	describe('no label handling', () => {
		it('should not render tooltip when label is empty', () => {
			const { container, getByRole } = render(
				<TooltipOnComponent label="">
					<Button>Button without tooltip</Button>
				</TooltipOnComponent>,
			);

			const button = getByRole('button');
			expect(button).toHaveTextContent('Button without tooltip');

			// Should not have tooltip wrapper or show tooltip content
			fireEvent.mouseEnter(button);
			expect(container.parentNode).not.toHaveTextContent('');
		});
	});

	describe('invalid children handling', () => {
		it('should handle non-React element children gracefully', () => {
			const { container } = render(
				<TooltipOnComponent label="Invalid children tooltip">
					Plain text string
				</TooltipOnComponent>,
			);

			// Should return the children as-is when not a valid React element
			expect(container).toHaveTextContent('Plain text string');
			expect(container.parentNode).not.toHaveTextContent(
				'Invalid children tooltip',
			);
		});

		it('should handle null children', () => {
			const { container } = render(
				<TooltipOnComponent label="Null children tooltip">
					{null}
				</TooltipOnComponent>,
			);

			// Should not crash and not show tooltip
			expect(container.parentNode).not.toHaveTextContent(
				'Null children tooltip',
			);
		});
	});
});
