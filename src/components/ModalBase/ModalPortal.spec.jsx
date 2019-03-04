import React, { useState } from 'react';
import styles from './stories.scss';
import { ModalPortal } from './ModalPortal';
import { act, renderIntoDocument } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { withModal } from './withModal';

const NakedModal = withModal(({ onRequestClose, children }) => (
	<div className={styles.root}>{children}</div>
));
NakedModal.displayName = 'NakedModal';

function createMockedModal(defaultOpenState = true) {
	const MockedModalComponent = () => {
		const [isOpen, setIsOpen] = useState(defaultOpenState);

		return (
			<NakedModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
				<p>Hello World!</p>
			</NakedModal>
		);
	};
	MockedModalComponent.displayName = 'MockedModal';

	return MockedModalComponent;
}

describe('withModal()', () => {
	afterEach(() => {
		document.body.innerHTML = '';
	});

	it('should not throw when closed', () => {
		const modal = (
			<NakedModal isOpen={false}>
				<p>Hello, I am a modal body!</p>
			</NakedModal>
		);

		expect(() => mount(modal).unmount()).not.toThrow();
	});

	it('should match snapshot', () => {
		const ModelComponent = createMockedModal(true);
		let wrapper;
		expect((wrapper = mount(<ModelComponent />))).toMatchSnapshot();
		wrapper.unmount();
	});

	it('should not throw when open', () => {
		const modal = (
			<NakedModal isOpen={true}>
				<p>Hello, I am a modal body!</p>
			</NakedModal>
		);

		expect(() => mount(modal).unmount()).not.toThrow();
	});

	describe('when portal', () => {
		it('should be added when open', () => {
			expect(document.body.innerHTML).toBe('');

			const modal = mount(
				<NakedModal isOpen={true}>
					<p>Hello World!</p>
				</NakedModal>
			);

			expect(modal.find(ModalPortal).exists()).toBeTruthy();
			modal.unmount();
		});

		it('should be added portal when not open, but is mounted', () => {
			expect(document.body.innerHTML).toBe('');

			const modal = mount(
				<NakedModal isOpen={false}>
					<p>Hello World!</p>
				</NakedModal>
			);

			expect(modal.find(ModalPortal).exists()).toBeTruthy();
			modal.unmount();
		});

		it('should add children when open', () => {
			const modal = mount(
				<NakedModal isOpen={true}>
					<p>Hello World!</p>
				</NakedModal>
			);

			expect(
				modal
					.find(ModalPortal)
					.render()
					.html()
					.includes('Hello World!')
			).toBeTruthy();
			modal.unmount();
		});
	});

	describe('when onRequestClose', () => {
		it('should not throw when not passed in', () => {
			// tests if the onRequestClose is being defaulted.
			const modal = mount(
				<NakedModal isOpen={true}>
					<p>Hello World!</p>
				</NakedModal>
			);

			expect(() => {
				const portal = modal.find(ModalPortal);
				portal.prop('onRequestClose')();
			}).not.toThrow();
			modal.unmount();
		});

		it('should call our passed in onRequestClose callback', () => {
			const cb = jest.fn();

			const modal = mount(
				<NakedModal onRequestClose={cb} isOpen={true}>
					<p>Hello World!</p>
				</NakedModal>
			);

			modal.find(ModalPortal).prop('onRequestClose')();

			expect(cb).toHaveBeenCalledTimes(1);
			modal.unmount();
		});

		it('should call when outside is clicked', () => {
			const cb = jest.fn();

			let modal;

			act(() => {
				modal = mount(
					<NakedModal onRequestClose={cb} isOpen={true}>
						<p>Hello World!</p>
					</NakedModal>
				);
			});

			act(() => {
				document.body.dispatchEvent(
					new MouseEvent('mouseup', {
						bubbles: true,
						cancelable: true,
					})
				);
			});

			expect(cb).toHaveBeenCalledTimes(1);
			modal.unmount();
		});

		it('should not be calling onRequestClose, if isOpen is false', () => {
			const cb = jest.fn();

			let modal;

			act(() => {
				modal = mount(
					<NakedModal onRequestClose={cb} isOpen={false}>
						<p>Hello World!</p>
					</NakedModal>
				);
			});

			act(() => {
				document.body.dispatchEvent(
					new MouseEvent('mouseup', {
						bubbles: true,
						cancelable: true,
					})
				);
			});

			expect(cb).toHaveBeenCalledTimes(0);
			modal.unmount();
		});
	});

	it('should have isOpen set to false when the outside is clicked', () => {
		const MockedModalComponent = createMockedModal(true);

		let modal;
		act(() => {
			modal = mount(<MockedModalComponent />);
		});

		expect(modal.find(ModalPortal).prop('isOpen')).toEqual(true);

		act(() => {
			document.body.dispatchEvent(
				new MouseEvent('mouseup', { bubbles: true, cancelable: true })
			);
		});

		modal.update();

		expect(modal.find(ModalPortal).prop('isOpen')).toEqual(false);
		modal.unmount();
	});

	it('should have isOpen set to true when the content itself is clicked', () => {
		const MockedModalComponent = createMockedModal(true);

		let modal;
		act(() => {
			modal = mount(<MockedModalComponent />);
		});

		expect(modal.find(ModalPortal).prop('isOpen')).toEqual(true);

		// this is to confirm that the body is in fact the content
		expect(modal.find('p').getDOMNode()).toMatchSnapshot();

		act(() => {
			modal
				.find('p')
				.getDOMNode()
				.dispatchEvent(
					new MouseEvent('mouseup', {
						bubbles: true,
						cancelable: true,
					})
				);
		});

		modal.update();

		expect(modal.find(ModalPortal).prop('isOpen')).toEqual(true);
		modal.unmount();
	});

	describe('when rendered to the DOM', () => {
		it('should remove modalPortalIsOpen class from the portal when modal is closed', () => {
			const MockedModalComponent = createMockedModal();

			act(() => {
				renderIntoDocument(<MockedModalComponent />);
			});

			expect(
				document.body.querySelector('.modalPortalIsOpen')
			).toBeTruthy();

			act(() => {
				document.body.dispatchEvent(
					new MouseEvent('mouseup', {
						bubbles: true,
						cancelable: true,
					})
				);
			});

			expect(
				document.body.querySelector('.modalPortalIsOpen')
			).toBeFalsy();

			expect(document.body.querySelector('.modalPortal')).toBeTruthy();
		});

		it('should remove modal content class from the portal when modal is closed', () => {
			const MockedModalComponent = createMockedModal();

			act(() => {
				renderIntoDocument(<MockedModalComponent />);
			});

			expect(document.body.querySelector('.modalContent')).toBeTruthy();

			act(() => {
				document.body.dispatchEvent(
					new MouseEvent('mouseup', {
						bubbles: true,
						cancelable: true,
					})
				);
			});

			expect(document.body.querySelector('p')).toBeFalsy();
		});
	});
});
