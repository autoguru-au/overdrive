import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { vi } from 'vitest';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { Text } from '../Text';
import { TextInput } from '../TextInput';

import { Tooltip } from './Tooltip';

describe('<Tooltip />', () => {
	const tooltipContentText = 'tooltip content';

	it('should not throw', () => {
		expect(() => {
			render(
				<Tooltip label={tooltipContentText}>
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

	it('should match snapshot when closed', () => {
		const { baseElement } = render(
			<Tooltip label={tooltipContentText} wrapper>
				<div>trigger</div>
			</Tooltip>,
		);

		expect(baseElement).toMatchSnapshot();
	});

	it('should match snapshot when opened', () => {
		const { baseElement, getByText } = render(
			<Tooltip label={tooltipContentText} wrapper>
				<div>trigger</div>
			</Tooltip>,
		);

		fireEvent.mouseEnter(getByText('trigger'));

		expect(baseElement).toMatchSnapshot();
	});

	describe('with string children', () => {
		it('should work with string content when using wrapper', () => {
			const { container, getByText } = render(
				<Tooltip label={tooltipContentText} wrapper>
					Simple text content
				</Tooltip>,
			);

			expect(container).toHaveTextContent('Simple text content');

			fireEvent.mouseEnter(getByText('Simple text content'));
			expect(container.parentNode).toHaveTextContent('tooltip content');
		});

		it('should fail with string content when not using wrapper', () => {
			// This should throw an invariant error since string children require wrapper
			expect(() => {
				render(
					<Tooltip label="tooltip content">
						Simple text content
					</Tooltip>,
				);
			}).toThrow();
		});
	});

	describe('with Text component children', () => {
		it('should work with Text component', () => {
			const { container } = render(
				<Tooltip label={tooltipContentText}>
					<Text>Text component content</Text>
				</Tooltip>,
			);

			expect(container).toHaveTextContent('Text component content');

			// Tooltip should wrap the Text component in a span
			const wrapper = container.querySelector('span');
			expect(wrapper).toBeInTheDocument();

			if (wrapper) fireEvent.mouseEnter(wrapper);
			expect(container.parentNode).toHaveTextContent(tooltipContentText);
		});
	});

	describe('with Badge component children', () => {
		it('should work with Badge component', async () => {
			const { container } = render(
				<Tooltip label={tooltipContentText} wrapper>
					<Badge label="Badge content" />
				</Tooltip>,
			);

			// Find the Badge element directly and trigger hover
			const badge = container.querySelector(
				'[data-od-component="badge"]',
			) as HTMLElement;

			expect(badge).toBeInTheDocument();
			expect(container).toHaveTextContent('Badge content');

			fireEvent.mouseEnter(badge);
			expect(document.body).toHaveTextContent(tooltipContentText);
		});
	});

	describe('multiple children support', () => {
		it('should work with multiple children when using wrapper', () => {
			const { container } = render(
				<Tooltip label={tooltipContentText} wrapper>
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
				<Tooltip label={tooltipContentText} wrapper>
					<div>First child</div>
					<div>Second child</div>
				</Tooltip>,
			);

			const wrapper = container.querySelector('span');
			if (wrapper) fireEvent.mouseEnter(wrapper);

			expect(container.parentNode).toHaveTextContent(tooltipContentText);
		});

		it('should fail with multiple children when not using wrapper', () => {
			expect(() => {
				render(
					<Tooltip label="Test">
						<div>First child</div>
						<div>Second child</div>
					</Tooltip>,
				);
			}).toThrow();
		});

		it('should work with React Fragment children when using wrapper', () => {
			const { container } = render(
				<Tooltip label={tooltipContentText} wrapper>
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

			if (wrapper) fireEvent.mouseEnter(wrapper);

			expect(container.parentNode).toHaveTextContent(tooltipContentText);
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

			// Should return children as-is without any wrapper
			expect(container).toHaveTextContent('trigger');
			expect(container.querySelector('span')).not.toBeInTheDocument();
		});
	});
});

describe('<Tooltip /> with interactive child', () => {
	it('should not throw with interactive components', () => {
		expect(() => {
			render(
				<Tooltip label="Interactive tooltip">
					<Button>Click me</Button>
				</Tooltip>,
			);
		}).not.toThrow();
	});

	describe('with Button component', () => {
		it('should work with Button component', () => {
			const { getByRole } = render(
				<Tooltip label="Button tooltip">
					<Button>Interactive Button</Button>
				</Tooltip>,
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
				<Tooltip label="Clickable button tooltip">
					<Button onClick={handleClick}>Clickable Button</Button>
				</Tooltip>,
			);

			const button = getByRole('button');
			fireEvent.click(button);
			expect(handleClick).toHaveBeenCalledTimes(1);
		});
	});

	describe('with TextInput component', () => {
		it('should work with TextInput component', () => {
			const { container, getByRole } = render(
				<Tooltip label="Input tooltip">
					<TextInput name="test-input" placeholder="Enter text" />
				</Tooltip>,
			);

			const input = getByRole('textbox');

			fireEvent.mouseEnter(input);
			expect(container.parentNode).toHaveTextContent('Input tooltip');
		});

		it('should preserve input functionality', () => {
			const handleChange = vi.fn();
			const { getByRole } = render(
				<Tooltip label="Interactive input tooltip">
					<TextInput
						name="test-input-2"
						placeholder="Test input"
						onChange={handleChange}
					/>
				</Tooltip>,
			);

			const input = getByRole('textbox');
			fireEvent.change(input, { target: { value: 'test' } });
			expect(handleChange).toHaveBeenCalled();
		});
	});

	describe('with native button element', () => {
		it('should work with native button', () => {
			const { container, getByRole } = render(
				<Tooltip label="Native button tooltip">
					<button type="button">Native Button</button>
				</Tooltip>,
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
				<Tooltip label="Native clickable tooltip">
					<button type="button" onClick={handleClick}>
						Native Clickable
					</button>
				</Tooltip>,
			);

			const button = getByRole('button');
			fireEvent.click(button);
			expect(handleClick).toHaveBeenCalledTimes(1);
		});
	});
});
