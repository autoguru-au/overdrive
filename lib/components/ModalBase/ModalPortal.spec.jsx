import React, { useState } from 'react';
import styles from './stories.scss';
import { fireEvent, render } from '@testing-library/react';
import { withModal } from './withModal';

const NakedModal = withModal(({ children }) => (
	<div className={styles.root}>{children}</div>
));

function createMockedModal(defaultOpenState = true) {
	return () => {
		const [isOpen, setIsOpen] = useState(defaultOpenState);

		return (
			<NakedModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
				Hello World!
			</NakedModal>
		);
	};
}

describe('withModal()', () => {
	it('should not throw when closed', () => {
		expect(() =>
			render(
				<NakedModal isOpen={false}>
					<p>Hello, I am a modal body!</p>
				</NakedModal>,
			),
		).not.toThrow();
	});

	it('should not throw when open', () => {
		expect(() =>
			render(
				<NakedModal isOpen>
					<p>Hello, I am a modal body!</p>
				</NakedModal>,
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
			const { getByRole } = render(
				<NakedModal isOpen>Hello World!</NakedModal>,
			);

			expect(getByRole('dialog')).toBeInTheDocument();
		});

		it('should not render children when closed', () => {
			const { getByRole } = render(
				<NakedModal isOpen={false}>Hello World!</NakedModal>,
			);

			expect(getByRole('dialog')).not.toHaveTextContent('Hello World!');
		});

		it('should add children when open', () => {
			const { getByRole } = render(
				<NakedModal isOpen>Hello World!</NakedModal>,
			);

			expect(getByRole('dialog')).toHaveTextContent('Hello World!');
		});
	});

	describe('when onRequestClose', () => {
		it('should not throw when not passed in', () => {
			render(<NakedModal isOpen>Hello World!</NakedModal>);

			expect(() => {
				fireEvent.click(document.body);
			}).not.toThrow();
		});

		it('should call our passed in onRequestClose callback', () => {
			const cb = jest.fn();

			render(
				<NakedModal isOpen onRequestClose={cb}>
					Hello World!
				</NakedModal>,
			);

			fireEvent.mouseUp(document.body);

			expect(cb).toHaveBeenCalledTimes(1);
		});

		it('should not be calling onRequestClose, if isOpen is false', () => {
			const cb = jest.fn();

			render(
				<NakedModal isOpen={false} onRequestClose={cb}>
					Hello World!
				</NakedModal>,
			);

			fireEvent.mouseUp(document.body);

			expect(cb).toHaveBeenCalledTimes(0);
		});
	});

	describe('when implemented', () => {
		it('should have isOpen set to false when the outside is clicked', () => {
			const MockedModalComponent = createMockedModal(true);

			const { getByRole } = render(<MockedModalComponent />);

			expect(getByRole('dialog')).toHaveTextContent('Hello World!');

			fireEvent.mouseUp(document.body);

			expect(getByRole('dialog')).not.toHaveTextContent('Hello World!');
		});

		it('should have isOpen set to true when the content itself is clicked', () => {
			const MockedModalComponent = createMockedModal(true);

			const { getByRole } = render(<MockedModalComponent />);

			expect(getByRole('dialog')).toHaveTextContent('Hello World!');

			fireEvent.mouseUp(getByRole('dialog').firstChild);

			expect(getByRole('dialog')).toHaveTextContent('Hello World!');
		});

		it('should not be visible when closed', () => {
			const MockedModalComponent = createMockedModal(true);

			const { getByRole } = render(<MockedModalComponent />);

			expect(getByRole('dialog')).toHaveTextContent('Hello World!');
			expect(getByRole('dialog')).toHaveAttribute('aria-hidden', 'false');

			fireEvent.mouseUp(document.body);

			expect(getByRole('dialog')).not.toHaveTextContent('Hello World!');
			expect(getByRole('dialog')).toHaveAttribute('aria-hidden', 'true');
		});
	});
});
