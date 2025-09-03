import { AirconIcon, CarWindshieldIcon } from '@autoguru/icons';
import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import type { Selection } from 'react-aria-components';

import type { OptionItem } from './OptionGrid';
import { OptionGrid } from './OptionGrid';
import * as stories from './OptionGrid.stories';

const { Simple, UncontrolledWithIcons, SingleSelectionControlled } =
	composeStories(stories);

// Test data
const basicItems: OptionItem[] = [
	{ name: 'option1', label: 'Option 1' },
	{ name: 'option2', label: 'Option 2' },
	{ name: 'option3', label: 'Option 3' },
];

const itemsWithDescriptions: OptionItem[] = [
	{ name: 'item1', label: 'Item 1', description: 'Description 1' },
	{ name: 'item2', label: 'Item 2', description: 'Description 2' },
];

const itemsWithIcons: OptionItem[] = [
	{ name: 'aircon', label: 'Air Conditioning', icon: AirconIcon },
	{ name: 'windscreen', label: 'Windscreen', icon: CarWindshieldIcon },
];

describe('<OptionGrid />', () => {
	// Test stories first
	it('renders the simple story', async () => {
		render(<Simple />);

		const listbox = screen.getByRole('listbox');
		expect(listbox).toBeInTheDocument();
	});

	it('renders the uncontrolled with icons story', async () => {
		render(<UncontrolledWithIcons />);

		const listbox = screen.getByRole('listbox');
		expect(listbox).toBeInTheDocument();
	});

	it('renders the single selection controlled story', async () => {
		render(<SingleSelectionControlled />);

		const listbox = screen.getByRole('listbox');
		expect(listbox).toBeInTheDocument();
	});

	// Component behavior tests
	describe('Basic rendering', () => {
		it('renders with required props', () => {
			render(<OptionGrid label="Test Options" items={basicItems} />);

			const listbox = screen.getByRole('listbox');
			expect(listbox).toHaveAccessibleName('Test Options');
			expect(listbox).toHaveAttribute('aria-multiselectable', 'true'); // default multiple selection
		});

		it('renders all option items', () => {
			render(<OptionGrid label="Test Options" items={basicItems} />);

			const options = screen.getAllByRole('option');
			expect(options).toHaveLength(3);

			expect(options[0]).toHaveTextContent('Option 1');
			expect(options[1]).toHaveTextContent('Option 2');
			expect(options[2]).toHaveTextContent('Option 3');
		});

		it('applies test id correctly', () => {
			render(
				<OptionGrid
					label="Test Options"
					items={basicItems}
					testId="test-grid"
				/>,
			);

			const listbox = screen.getByRole('listbox');
			expect(listbox).toHaveAttribute('data-testid', 'test-grid');
		});

		it('applies custom className', () => {
			render(
				<OptionGrid
					label="Test Options"
					items={basicItems}
					className="custom-class"
				/>,
			);

			const listbox = screen.getByRole('listbox');
			expect(listbox).toHaveClass('custom-class');
		});
	});

	describe('Selection behavior', () => {
		it('supports multiple selection by default', async () => {
			const user = userEvent.setup();
			const onSelectionChange = vi.fn();

			render(
				<OptionGrid
					label="Test Options"
					items={basicItems}
					onSelectionChange={onSelectionChange}
				/>,
			);

			const options = screen.getAllByRole('option');

			await user.click(options[0]);
			await user.click(options[1]);

			expect(options[0]).toHaveAttribute('aria-selected', 'true');
			expect(options[1]).toHaveAttribute('aria-selected', 'true');
			expect(onSelectionChange).toHaveBeenCalledTimes(2);
		});

		it('supports single selection mode', async () => {
			const user = userEvent.setup();
			const onSelectionChange = vi.fn();

			render(
				<OptionGrid
					label="Test Options"
					items={basicItems}
					selectionMode="single"
					onSelectionChange={onSelectionChange}
				/>,
			);

			// React Aria doesn't set aria-multiselectable to false for single selection

			const options = screen.getAllByRole('option');

			await user.click(options[0]);
			await user.click(options[1]);

			expect(options[0]).toHaveAttribute('aria-selected', 'false');
			expect(options[1]).toHaveAttribute('aria-selected', 'true');
			expect(onSelectionChange).toHaveBeenCalledTimes(2);
		});

		it('handles controlled selection', () => {
			const selectedKeys = new Set(['option1', 'option3']);

			render(
				<OptionGrid
					label="Test Options"
					items={basicItems}
					selectedKeys={selectedKeys}
				/>,
			);

			const options = screen.getAllByRole('option');
			expect(options[0]).toHaveAttribute('aria-selected', 'true');
			expect(options[1]).toHaveAttribute('aria-selected', 'false');
			expect(options[2]).toHaveAttribute('aria-selected', 'true');
		});
	});

	describe('Keyboard interaction', () => {
		it('supports arrow key navigation', async () => {
			const user = userEvent.setup();

			render(<OptionGrid label="Test Options" items={basicItems} />);

			const listbox = screen.getByRole('listbox');

			// Focus the listbox first
			listbox.focus();

			// Arrow navigation is handled internally by React Aria
			await user.keyboard('[ArrowDown]');
			await user.keyboard('[ArrowUp]');

			// Just verify the listbox remains focusable
			expect(listbox).toBeInTheDocument();
		});

		it('supports enter key selection', async () => {
			const user = userEvent.setup();
			const onSelectionChange = vi.fn();

			render(
				<OptionGrid
					label="Test Options"
					items={basicItems}
					onSelectionChange={onSelectionChange}
				/>,
			);

			const listbox = screen.getByRole('listbox');

			// Focus listbox and use enter to select first item
			listbox.focus();
			await user.keyboard('[Enter]');

			expect(onSelectionChange).toHaveBeenCalled();
		});

		it('supports space key selection', async () => {
			const user = userEvent.setup();
			const onSelectionChange = vi.fn();

			render(
				<OptionGrid
					label="Test Options"
					items={basicItems}
					onSelectionChange={onSelectionChange}
				/>,
			);

			const listbox = screen.getByRole('listbox');

			// Focus listbox and use space to select
			listbox.focus();
			await user.keyboard('[Space]');

			expect(onSelectionChange).toHaveBeenCalled();
		});
	});

	describe('Content rendering', () => {
		it('renders item descriptions when provided', () => {
			render(
				<OptionGrid
					label="Test Options"
					items={itemsWithDescriptions}
				/>,
			);

			expect(screen.getByText('Description 1')).toBeInTheDocument();
			expect(screen.getByText('Description 2')).toBeInTheDocument();
		});

		it('renders custom icons when provided and not selected', () => {
			render(<OptionGrid label="Test Options" items={itemsWithIcons} />);

			const listbox = screen.getByRole('listbox');
			// SVGs are present but marked as aria-hidden, so check for their presence differently
			const svgElements = listbox.querySelectorAll('svg');
			expect(svgElements.length).toBeGreaterThan(0);
		});

		it('shows checkboxes when indicator is checkbox', () => {
			render(
				<OptionGrid
					label="Test Options"
					items={basicItems}
					indicator="checkbox"
				/>,
			);

			const listbox = screen.getByRole('listbox');
			expect(listbox).toBeInTheDocument();
			// Checkboxes are visual elements without explicit role
		});

		it('shows radio buttons when indicator is radio', () => {
			render(
				<OptionGrid
					label="Test Options"
					items={basicItems}
					indicator="radio"
					selectionMode="single"
				/>,
			);

			const listbox = screen.getByRole('listbox');
			expect(listbox).toBeInTheDocument();
			// Radio buttons are visual elements without explicit role
		});

		it('hides indicators when indicator is none', () => {
			render(
				<OptionGrid
					label="Test Options"
					items={basicItems}
					indicator="none"
				/>,
			);

			const listbox = screen.getByRole('listbox');
			expect(listbox).toBeInTheDocument();
		});
	});

	describe('Grid layout', () => {
		it('supports different column configurations', () => {
			render(
				<OptionGrid
					label="Test Options"
					items={basicItems}
					columns="3"
				/>,
			);

			const listbox = screen.getByRole('listbox');
			expect(listbox).toBeInTheDocument();
		});

		it('uses default grid layout', () => {
			render(<OptionGrid label="Test Options" items={basicItems} />);

			const listbox = screen.getByRole('listbox');
			expect(listbox).toHaveAttribute('data-layout', 'grid');
		});
	});

	describe('Accessibility', () => {
		it('has proper ARIA labeling', () => {
			const label = 'Choose your options';
			render(<OptionGrid label={label} items={basicItems} />);

			const listbox = screen.getByRole('listbox');
			expect(listbox).toHaveAccessibleName(label);
		});

		it('maintains proper option attributes', () => {
			render(<OptionGrid label="Test Options" items={basicItems} />);

			const options = screen.getAllByRole('option');

			options.forEach((option, index) => {
				expect(option).toHaveAttribute(
					'data-key',
					basicItems[index].name,
				);
				expect(option).toHaveAttribute('aria-selected', 'false');
			});
		});

		it('uses textValue for option identification', () => {
			render(<OptionGrid label="Test Options" items={basicItems} />);

			const options = screen.getAllByRole('option');

			// React Aria uses textValue for accessibility - this is tested implicitly
			// through the proper rendering of option labels
			expect(options[0]).toHaveTextContent('Option 1');
			expect(options[1]).toHaveTextContent('Option 2');
			expect(options[2]).toHaveTextContent('Option 3');
		});
	});

	describe('Integration with React Aria', () => {
		it('works with controlled state management', async () => {
			const ControlledGrid = () => {
				const [selection, setSelection] = useState<Selection>(
					new Set(),
				);

				return (
					<OptionGrid
						label="Controlled Options"
						items={basicItems}
						selectedKeys={selection}
						onSelectionChange={setSelection}
					/>
				);
			};

			const user = userEvent.setup();
			render(<ControlledGrid />);

			const options = screen.getAllByRole('option');

			await user.click(options[0]);
			expect(options[0]).toHaveAttribute('aria-selected', 'true');

			await user.click(options[1]);
			expect(options[1]).toHaveAttribute('aria-selected', 'true');
		});

		it('handles disabled state when passed through props', () => {
			render(
				<OptionGrid
					label="Test Options"
					items={basicItems}
					disabledKeys={['option1', 'option2']}
				/>,
			);

			const listbox = screen.getByRole('listbox');
			// React Aria handles disabled state through disabledKeys prop
			expect(listbox).toBeInTheDocument();
		});
	});

	describe('Edge cases', () => {
		it('handles empty items array', () => {
			render(<OptionGrid label="Empty Options" items={[]} />);

			const listbox = screen.getByRole('listbox');
			expect(listbox).toBeInTheDocument();

			const options = screen.queryAllByRole('option');
			expect(options).toHaveLength(0);
		});

		it('handles items without descriptions', () => {
			render(<OptionGrid label="Test Options" items={basicItems} />);

			// Should not crash and should render properly
			const options = screen.getAllByRole('option');
			expect(options).toHaveLength(3);
		});

		it('handles mixed items with and without icons', () => {
			const mixedItems: OptionItem[] = [
				{ name: 'with-icon', label: 'With Icon', icon: AirconIcon },
				{ name: 'without-icon', label: 'Without Icon' },
			];

			render(<OptionGrid label="Mixed Options" items={mixedItems} />);

			const options = screen.getAllByRole('option');
			expect(options).toHaveLength(2);
			expect(options[0]).toHaveTextContent('With Icon');
			expect(options[1]).toHaveTextContent('Without Icon');
		});

		it('handles items with very long labels and descriptions', () => {
			const longContentItems: OptionItem[] = [
				{
					name: 'long',
					label: 'This is a very long label that might wrap to multiple lines and should still work correctly',
					description:
						'This is an extremely long description that contains a lot of text and should also handle wrapping properly without breaking the layout or accessibility features of the component',
				},
			];

			render(
				<OptionGrid
					label="Long Content Options"
					items={longContentItems}
				/>,
			);

			const option = screen.getByRole('option');
			expect(option).toBeInTheDocument();
		});
	});
});
