import { DownloadIcon, TrashCanOutlineIcon } from '@autoguru/icons';
import { render, screen, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';
import { beforeAll, describe, it, expect, vi } from 'vitest';

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

// Mock window.matchMedia for useMedia hook
const createMockMatchMedia = (isTablet = true) => (query) => ({
	matches: isTablet && (query.includes('768px') || query.includes('1024px')),
	media: query,
	onchange: null,
	addListener: () => {},
	removeListener: () => {},
	addEventListener: () => {},
	removeEventListener: () => {},
	dispatchEvent: () => true,
});

describe('<DropDown />', () => {
	beforeAll(() => {
		Object.defineProperty(globalThis, 'matchMedia', {
			writable: true,
			value: createMockMatchMedia(true),
		});
	});

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

	describe('Mobile viewport behavior', () => {
		beforeAll(() => {
			Object.defineProperty(globalThis, 'matchMedia', {
				writable: true,
				value: createMockMatchMedia(false), // Mobile viewport
			});
		});

		it('should render on mobile viewport', () => {
			render(<DropDown {...standardProps} />);
			const button = screen.getByRole('button', { name: /attachment/i });
			expect(button).toBeInTheDocument();
		});

		it('should work in uncontrolled mode on mobile', () => {
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
});
