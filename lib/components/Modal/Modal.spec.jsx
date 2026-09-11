import { fireEvent, render } from '@testing-library/react';
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

	describe('lockScroll', () => {
		afterEach(() => {
			document.body.style.overflow = '';
			document.body.style.paddingRight = '';
		});

		it('does not touch body scroll by default', () => {
			render(<Modal isOpen>hi</Modal>);

			expect(document.body.style.overflow).toBe('');
		});

		it('locks body scroll while open when lockScroll is set', () => {
			render(
				<Modal isOpen lockScroll>
					hi
				</Modal>,
			);

			expect(document.body.style.overflow).toBe('hidden');
		});

		it('restores the previous overflow on close', () => {
			document.body.style.overflow = 'scroll';

			const { rerender } = render(
				<Modal isOpen lockScroll>
					hi
				</Modal>,
			);

			expect(document.body.style.overflow).toBe('hidden');

			rerender(
				<Modal isOpen={false} lockScroll>
					hi
				</Modal>,
			);

			expect(document.body.style.overflow).toBe('scroll');
		});

		it('restores the previous overflow on unmount', () => {
			document.body.style.overflow = 'scroll';

			const { unmount } = render(
				<Modal isOpen lockScroll>
					hi
				</Modal>,
			);

			unmount();

			expect(document.body.style.overflow).toBe('scroll');
		});
	});

	describe('closeOnEscapeKeyDown', () => {
		it('does not fire onRequestClose on Escape by default', () => {
			const onRequestClose = vi.fn();
			render(
				<Modal isOpen onRequestClose={onRequestClose}>
					hi
				</Modal>,
			);

			fireEvent.keyDown(document, { key: 'Escape' });

			expect(onRequestClose).not.toHaveBeenCalled();
		});

		it('fires onRequestClose("escapeKeyDown") on Escape when opted in', () => {
			const onRequestClose = vi.fn();
			render(
				<Modal isOpen closeOnEscapeKeyDown onRequestClose={onRequestClose}>
					hi
				</Modal>,
			);

			fireEvent.keyDown(document, { key: 'Escape' });

			expect(onRequestClose).toHaveBeenCalledWith('escapeKeyDown');
		});

		it('ignores other keys', () => {
			const onRequestClose = vi.fn();
			render(
				<Modal isOpen closeOnEscapeKeyDown onRequestClose={onRequestClose}>
					hi
				</Modal>,
			);

			fireEvent.keyDown(document, { key: 'Enter' });
			fireEvent.keyDown(document, { key: ' ' });

			expect(onRequestClose).not.toHaveBeenCalled();
		});

		it('detaches the listener when the modal closes', () => {
			const onRequestClose = vi.fn();

			const { rerender } = render(
				<Modal isOpen closeOnEscapeKeyDown onRequestClose={onRequestClose}>
					hi
				</Modal>,
			);

			rerender(
				<Modal
					isOpen={false}
					closeOnEscapeKeyDown
					onRequestClose={onRequestClose}
				>
					hi
				</Modal>,
			);

			fireEvent.keyDown(document, { key: 'Escape' });

			expect(onRequestClose).not.toHaveBeenCalled();
		});
	});
});
