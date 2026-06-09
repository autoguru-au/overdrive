import { CloudArrowUpIcon, DownloadIcon } from '@autoguru/icons';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { DropDownOption } from '../DropDown/DropDownOption';

import { SplitButton } from './SplitButton';

const standardProps = {
	label: 'Bulk upload',
	children: (
		<>
			<DropDownOption label="Single upload" icon={CloudArrowUpIcon} />
			<DropDownOption label="Import from CSV" icon={DownloadIcon} />
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
		expect(getTrigger()).toHaveAttribute('aria-haspopup', 'true');
		expect(getTrigger()).toHaveAttribute('aria-expanded', 'false');
	});

	it('calls onClick for the primary action without opening the menu', async () => {
		const user = userEvent.setup();
		const onClick = vi.fn();
		const onOpenChange = vi.fn();
		render(
			<SplitButton
				{...standardProps}
				onClick={onClick}
				onOpenChange={onOpenChange}
			/>,
		);

		await user.click(getPrimary());
		expect(onClick).toHaveBeenCalledTimes(1);
		expect(onOpenChange).not.toHaveBeenCalled();
	});

	it('toggles the menu open and closed from the trigger', async () => {
		const user = userEvent.setup();
		const onOpenChange = vi.fn();
		render(
			<SplitButton {...standardProps} onOpenChange={onOpenChange} />,
		);
		const trigger = getTrigger();

		await user.click(trigger);
		expect(onOpenChange).toHaveBeenCalledWith(true);
		expect(trigger).toHaveAttribute('aria-expanded', 'true');

		await user.click(trigger);
		expect(onOpenChange).toHaveBeenCalledWith(false);
		expect(trigger).toHaveAttribute('aria-expanded', 'false');
	});

	it('closes the menu on Escape from the trigger', async () => {
		const user = userEvent.setup();
		const onOpenChange = vi.fn();
		render(
			<SplitButton {...standardProps} onOpenChange={onOpenChange} />,
		);
		const trigger = getTrigger();

		await user.click(trigger);
		expect(onOpenChange).toHaveBeenLastCalledWith(true);

		await user.keyboard('{Escape}');
		expect(onOpenChange).toHaveBeenLastCalledWith(false);
	});

	it('closes the menu on Escape from within the menu', async () => {
		const user = userEvent.setup();
		const onOpenChange = vi.fn();
		render(
			<SplitButton {...standardProps} onOpenChange={onOpenChange} />,
		);

		await user.click(getTrigger());
		expect(onOpenChange).toHaveBeenLastCalledWith(true);

		const option = screen.getByRole('button', { name: /single upload/i });
		option.focus();
		await user.keyboard('{Escape}');
		expect(onOpenChange).toHaveBeenLastCalledWith(false);
	});

	it('does not emit onOpenChange when clicking away while already closed', async () => {
		const user = userEvent.setup();
		const onOpenChange = vi.fn();
		render(
			<SplitButton {...standardProps} onOpenChange={onOpenChange} />,
		);

		// useOutsideClick listens on document mouseup; clicking away while the
		// menu is closed must not report a (redundant) close.
		await user.click(document.body);
		expect(onOpenChange).not.toHaveBeenCalled();
	});

	describe('Controlled mode', () => {
		it('respects the isOpen prop and reports requested changes', async () => {
			const user = userEvent.setup();
			const onOpenChange = vi.fn();
			render(<ControlledSplitButton onOpenChange={onOpenChange} />);
			const trigger = getTrigger();
			expect(trigger).toHaveAttribute('aria-expanded', 'false');

			await user.click(trigger);
			expect(onOpenChange).toHaveBeenCalledWith(true);
			expect(trigger).toHaveAttribute('aria-expanded', 'true');
		});
	});
});
