import { DownloadIcon, TrashCanOutlineIcon } from '@autoguru/icons';
import { render, screen, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';
import { describe, it, expect, vi } from 'vitest';

import { DropDown } from './DropDown';
import { DropDownOption } from './DropDownOption';

const option1 = <DropDownOption label="Download" icon={DownloadIcon} />;
const option2 = <DropDownOption label="Delete" icon={TrashCanOutlineIcon} />;

const standardProps = {
	label: 'Attachment',
	children: (
		<>
			{option1}
			{option2}
		</>
	),
};

describe('<DropDown />', () => {
	it('should not throw', () => {
		expect(() => render(<DropDown />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(<DropDown {...standardProps} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match the snapshot as Primary variant', () => {
		expect(
			render(<DropDown {...standardProps} variant="primary" />).container
				.firstChild,
		).toMatchSnapshot();
	});

	describe('Uncontrolled mode', () => {
		it('should call onOpenChange callback when state changes', () => {
			const onOpenChange = vi.fn();
			render(<DropDown {...standardProps} onOpenChange={onOpenChange} />);
			const button = screen.getByRole('button', { name: /attachment/i });

			// Click to open
			fireEvent.click(button);
			expect(onOpenChange).toHaveBeenCalledWith(true);

			// Click to close
			fireEvent.click(button);
			expect(onOpenChange).toHaveBeenCalledWith(false);
		});
	});

	describe('Controlled mode', () => {
		it('should call onOpenChange when clicked in controlled mode', () => {
			const onOpenChange = vi.fn();
			render(
				<DropDown
					{...standardProps}
					isOpen={false}
					onOpenChange={onOpenChange}
				/>,
			);
			const button = screen.getByRole('button', { name: /attachment/i });

			// Click should call onOpenChange with true
			fireEvent.click(button);
			expect(onOpenChange).toHaveBeenCalledWith(true);
		});

		it('should work correctly when parent controls state', () => {
			const onOpenChange = vi.fn();
			const ControlledDropDown = () => {
				const [isOpen, setIsOpen] = useState(false);
				return (
					<DropDown
						{...standardProps}
						isOpen={isOpen}
						onOpenChange={(open) => {
							onOpenChange(open);
							setIsOpen(open);
						}}
					/>
				);
			};

			render(<ControlledDropDown />);
			const button = screen.getByRole('button', { name: /attachment/i });

			// Click to open
			fireEvent.click(button);
			expect(onOpenChange).toHaveBeenCalledWith(true);

			// Click to close
			fireEvent.click(button);
			expect(onOpenChange).toHaveBeenCalledWith(false);
		});
	});
});
