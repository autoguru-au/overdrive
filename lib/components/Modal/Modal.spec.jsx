import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { useState } from 'react';

import { Modal } from './Modal';

function createMockedModal(defaultOpenState = true) {
	return () => {
		const [isOpen, setIsOpen] = useState(defaultOpenState);

		return (
			<Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
				Hello World!
			</Modal>
		);
	};
}

describe('<Modal />', () => {
	it('should not throw when closed', () => {
		expect(() =>
			render(
				<Modal isOpen={false}>
					<p>Hello, I am a modal body!</p>
				</Modal>,
			),
		).not.toThrow();
	});

	it('should not throw when open', () => {
		expect(() =>
			render(
				<Modal isOpen>
					<p>Hello, I am a modal body!</p>
				</Modal>,
			),
		).not.toThrow();
	});

	it('should match snapshot', () => {
		const ModelComponent = createMockedModal(true);
		const { baseElement } = render(<ModelComponent />);
		expect(baseElement).toMatchSnapshot();
	});

	describe('when portal', () => {
		it('should be added when open', () => {
			const { getByRole } = render(<Modal isOpen>Hello World!</Modal>);

			expect(getByRole('presentation')).toBeInTheDocument();
		});

		it('should not render children when closed', () => {
			const { baseElement } = render(
				<Modal isOpen={false}>Hello World!</Modal>,
			);

			expect(baseElement.textContent).not.toEqual('Hello World!');
		});

		it('should add children when open', () => {
			const { getByRole } = render(<Modal isOpen>Hello World!</Modal>);

			expect(getByRole('presentation')).toHaveTextContent('Hello World!');
		});
	});

	describe('closeOnEscapeKeyDown', () => {
		it('should close with the escapeKeyDown reason by default', async () => {
			const user = userEvent.setup();
			const onRequestClose = vi.fn();

			render(
				<Modal isOpen onRequestClose={onRequestClose}>
					Hello World!
				</Modal>,
			);

			await user.keyboard('{Escape}');

			expect(onRequestClose).toHaveBeenCalledTimes(1);
			expect(onRequestClose).toHaveBeenCalledWith('escapeKeyDown');
		});

		it('should stay open when opted out', async () => {
			const user = userEvent.setup();
			const onRequestClose = vi.fn();

			render(
				<Modal
					isOpen
					closeOnEscapeKeyDown={false}
					onRequestClose={onRequestClose}
				>
					Hello World!
				</Modal>,
			);

			await user.keyboard('{Escape}');

			expect(onRequestClose).not.toHaveBeenCalled();
		});

		it('should detach the listener once closed', async () => {
			const user = userEvent.setup();
			const onRequestClose = vi.fn();

			const { rerender } = render(
				<Modal isOpen onRequestClose={onRequestClose}>
					Hello World!
				</Modal>,
			);

			rerender(
				<Modal isOpen={false} onRequestClose={onRequestClose}>
					Hello World!
				</Modal>,
			);

			await user.keyboard('{Escape}');

			expect(onRequestClose).not.toHaveBeenCalled();
		});

		it('should detach the listener on unmount', async () => {
			const user = userEvent.setup();
			const onRequestClose = vi.fn();

			const { unmount } = render(
				<Modal isOpen onRequestClose={onRequestClose}>
					Hello World!
				</Modal>,
			);

			unmount();

			await user.keyboard('{Escape}');

			expect(onRequestClose).not.toHaveBeenCalled();
		});

		it('should only close the top-most modal of a stack', async () => {
			const user = userEvent.setup();
			const closeFirst = vi.fn();
			const closeSecond = vi.fn();

			const Stack = ({ secondOpen }) => (
				<>
					<Modal isOpen onRequestClose={closeFirst}>
						First
					</Modal>
					<Modal isOpen={secondOpen} onRequestClose={closeSecond}>
						Second
					</Modal>
				</>
			);

			const { rerender } = render(<Stack secondOpen={false} />);

			rerender(<Stack secondOpen />);

			await user.keyboard('{Escape}');

			expect(closeSecond).toHaveBeenCalledWith('escapeKeyDown');
			expect(closeFirst).not.toHaveBeenCalled();

			rerender(<Stack secondOpen={false} />);

			await user.keyboard('{Escape}');

			expect(closeFirst).toHaveBeenCalledWith('escapeKeyDown');
			expect(closeSecond).toHaveBeenCalledTimes(1);
		});
	});
});
