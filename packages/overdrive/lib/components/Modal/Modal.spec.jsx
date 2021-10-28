import { render } from '@testing-library/react';
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
});
