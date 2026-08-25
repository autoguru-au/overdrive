import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { StandardModal } from './StandardModal';

describe('<StandardModal />', () => {
	const testTitle = 'Hello World!';
	const testBodyText =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis neque a laoreet maximus. Vestibulum hendrerit quam at mi venenatis faucibus at vel nisi. In ut risus et ipsum tincidunt tempor. Suspendisse potenti. Praesent faucibus posuere risus, at congue mauris porttitor ut. Donec sit amet elit vitae purus dictum aliquet quis ut ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dui sapien, porttitor ac erat vel, malesuada rutrum mauris. Nam arcu tellus, pretium ut aliquet eget, ultrices vel est. Maecenas dapibus volutpat eros a volutpat.';

	it('should not throw', () =>
		expect(() => render(<StandardModal />)).not.toThrow());

	it('should match snapshot without title and body', () => {
		expect(render(<StandardModal isOpen />).baseElement).toMatchSnapshot();
	});

	it('should match snapshot with title and body', () => {
		expect(
			render(
				<StandardModal isOpen title={testTitle}>
					<p>{testBodyText}</p>
				</StandardModal>,
			).baseElement,
		).toMatchSnapshot();
	});

	it('should call the onRequestClose callback when modals close button is clicked', () => {
		const mockCloseReq = vi.fn();

		const { getByLabelText } = render(
			<StandardModal
				isOpen
				title={testTitle}
				onRequestClose={mockCloseReq}
			>
				<p>{testBodyText}</p>
			</StandardModal>,
		);

		fireEvent.click(getByLabelText('close'));

		expect(mockCloseReq).toHaveBeenCalledTimes(1);
	});

	describe('footer slot', () => {
		it('does not render a footer when the prop is omitted', () => {
			const { queryByRole } = render(
				<StandardModal isOpen title={testTitle}>
					<p>body</p>
				</StandardModal>,
			);

			expect(queryByRole('contentinfo')).not.toBeInTheDocument();
		});

		it('renders the footer node in a <footer role="contentinfo"> element when provided', () => {
			const { getByRole, getByText } = render(
				<StandardModal
					isOpen
					title={testTitle}
					footer={<button>Save</button>}
				>
					<p>body</p>
				</StandardModal>,
			);

			// role="contentinfo" is set explicitly — a <footer> inside <article>
			// does NOT have an implicit contentinfo role per the HTML AAM.
			const footer = getByRole('contentinfo');
			expect(footer).toBeInTheDocument();
			expect(footer.tagName).toBe('FOOTER');
			expect(getByText('Save')).toBeInTheDocument();
		});

		it('does not fire onRequestClose("backdrop") when a footer button is clicked, even after the backdrop has been unlocked', () => {
			const onRequestClose = vi.fn();
			const onSave = vi.fn();

			const { getByText, baseElement } = render(
				<StandardModal
					isOpen
					title={testTitle}
					onRequestClose={onRequestClose}
					footer={<button onClick={onSave}>Save</button>}
				>
					<p>body</p>
				</StandardModal>,
			);

			// Unlock the modal by mousing down directly on the backdrop container,
			// so `locked` no longer short-circuits the backdrop handler. This makes
			// the test actually exercise the `event.target !== event.currentTarget`
			// guard rather than passing for the wrong reason.
			//
			// Modal renders via a Portal, so we query from `baseElement` (document
			// body) rather than the render `container`. The dialog article's
			// parent is the backdrop container with the mousedown handler.
			const dialog = baseElement.querySelector('[role="dialog"]');
			expect(dialog).not.toBeNull();
			const backdrop = dialog.parentElement;
			fireEvent.mouseDown(backdrop);

			fireEvent.click(getByText('Save'));

			expect(onSave).toHaveBeenCalledTimes(1);
			expect(onRequestClose).not.toHaveBeenCalled();
		});
	});
});
