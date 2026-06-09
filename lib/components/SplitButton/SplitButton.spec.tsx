import { CloudUploadOutlineIcon, ImportIcon } from '@autoguru/icons';
import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { DropDownOption } from '../DropDown/DropDownOption';

import { SplitButton } from './SplitButton';

const standardProps = {
	label: 'Bulk upload',
	children: (
		<>
			<DropDownOption label="Single upload" icon={CloudUploadOutlineIcon} />
			<DropDownOption label="Import from CSV" icon={ImportIcon} />
		</>
	),
};

const getPrimary = () =>
	screen.getByRole('button', { name: /bulk upload/i });
const getTrigger = () =>
	screen.getByRole('button', { name: /more options/i });

const ControlledSplitButton = ({
	onOpenChange,
}: {
	onOpenChange: (open: boolean) => void;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpenChange = (open: boolean) => {
		onOpenChange(open);
		setIsOpen(open);
	};
	return (
		<SplitButton
			{...standardProps}
			isOpen={isOpen}
			onOpenChange={handleOpenChange}
		/>
	);
};

describe('<SplitButton />', () => {
	it('should not throw', () => {
		expect(() => render(<SplitButton {...standardProps} />)).not.toThrow();
	});

	it('renders the primary action and the menu trigger as separate buttons', () => {
		render(<SplitButton {...standardProps} />);
		expect(getPrimary()).toBeInTheDocument();
		expect(getTrigger()).toBeInTheDocument();
		expect(getTrigger()).toHaveAttribute('aria-haspopup', 'menu');
		expect(getTrigger()).toHaveAttribute('aria-expanded', 'false');
	});

	it('calls onClick for the primary action without opening the menu', () => {
		const onClick = vi.fn();
		const onOpenChange = vi.fn();
		render(
			<SplitButton
				{...standardProps}
				onClick={onClick}
				onOpenChange={onOpenChange}
			/>,
		);

		fireEvent.click(getPrimary());
		expect(onClick).toHaveBeenCalledTimes(1);
		expect(onOpenChange).not.toHaveBeenCalled();
	});

	it('toggles the menu open and closed from the trigger', () => {
		const onOpenChange = vi.fn();
		render(
			<SplitButton {...standardProps} onOpenChange={onOpenChange} />,
		);
		const trigger = getTrigger();

		fireEvent.click(trigger);
		expect(onOpenChange).toHaveBeenCalledWith(true);
		expect(trigger).toHaveAttribute('aria-expanded', 'true');

		fireEvent.click(trigger);
		expect(onOpenChange).toHaveBeenCalledWith(false);
		expect(trigger).toHaveAttribute('aria-expanded', 'false');
	});

	it('closes the menu on Escape from the trigger', () => {
		const onOpenChange = vi.fn();
		render(
			<SplitButton {...standardProps} onOpenChange={onOpenChange} />,
		);
		const trigger = getTrigger();

		fireEvent.click(trigger);
		expect(onOpenChange).toHaveBeenLastCalledWith(true);

		fireEvent.keyDown(trigger, { key: 'Escape' });
		expect(onOpenChange).toHaveBeenLastCalledWith(false);
	});

	it('closes the menu on Escape from within the menu', () => {
		const onOpenChange = vi.fn();
		render(
			<SplitButton {...standardProps} onOpenChange={onOpenChange} />,
		);

		fireEvent.click(getTrigger());
		expect(onOpenChange).toHaveBeenLastCalledWith(true);

		const option = screen.getByRole('button', { name: /single upload/i });
		fireEvent.keyDown(option, { key: 'Escape' });
		expect(onOpenChange).toHaveBeenLastCalledWith(false);
	});

	it('does not emit onOpenChange when clicking away while already closed', () => {
		const onOpenChange = vi.fn();
		render(
			<SplitButton {...standardProps} onOpenChange={onOpenChange} />,
		);

		// useOutsideClick listens on document mouseup; firing it while the menu
		// is closed must not report a (redundant) close.
		fireEvent.mouseUp(document.body);
		expect(onOpenChange).not.toHaveBeenCalled();
	});

	describe('Controlled mode', () => {
		it('respects the isOpen prop and reports requested changes', () => {
			const onOpenChange = vi.fn();
			render(<ControlledSplitButton onOpenChange={onOpenChange} />);
			const trigger = getTrigger();
			expect(trigger).toHaveAttribute('aria-expanded', 'false');

			fireEvent.click(trigger);
			expect(onOpenChange).toHaveBeenCalledWith(true);
			expect(trigger).toHaveAttribute('aria-expanded', 'true');
		});
	});
});
