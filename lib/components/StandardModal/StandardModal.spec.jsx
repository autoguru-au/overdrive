import React from 'react';
import { mount, shallow } from 'enzyme';
import { StandardModal } from './StandardModal';
import { act } from 'react-dom/test-utils';
import { EStandardModalSize } from './index';

describe('<StandardModal />', () => {
	const testTitle = 'Hello World!';
	const testBodyText =
		' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis neque a laoreet maximus. Vestibulum hendrerit quam at mi venenatis faucibus at vel nisi. In ut risus et ipsum tincidunt tempor. Suspendisse potenti. Praesent faucibus posuere risus, at congue mauris porttitor ut. Donec sit amet elit vitae purus dictum aliquet quis ut ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dui sapien, porttitor ac erat vel, malesuada rutrum mauris. Nam arcu tellus, pretium ut aliquet eget, ultrices vel est. Maecenas dapibus volutpat eros a volutpat.';
	it('should not throw', () =>
		expect(() => shallow(<StandardModal />)).not.toThrow());

	it('should match snapshot without title and body', () => {
		const modal = mount(<StandardModal isOpen={true} />);

		expect(modal.html()).toMatchSnapshot();
		modal.unmount();
	});

	it('should match snapshot with title and body', () => {
		const modal = mount(
			<StandardModal title={testTitle} isOpen={true}>
				<p>{testBodyText}</p>
			</StandardModal>
		);

		expect(modal.html()).toMatchSnapshot();
		modal.unmount();
	});

	it('should add standard size class by default', () => {
		const modal = mount(
			<StandardModal title={testTitle} isOpen={true}>
				<p>{testBodyText}</p>
			</StandardModal>
		);
		expect(modal.find('.modal').hasClass('modalSizeStandard')).toBeTruthy();
		modal.unmount();
	});

	it('should add standard size class for standard size', () => {
		const modal = mount(
			<StandardModal
				title={testTitle}
				isOpen={true}
				size={EStandardModalSize.Standard}>
				<p>{testBodyText}</p>
			</StandardModal>
		);
		expect(modal.find('.modal').hasClass('modalSizeStandard')).toBeTruthy();
		modal.unmount();
	});

	it('should add the title text to the modals title element', () => {
		const modal = mount(
			<StandardModal title={testTitle} isOpen={true}>
				<p>{testBodyText}</p>
			</StandardModal>
		);

		expect(modal.find('header h4').text()).toEqual(testTitle);
		modal.unmount();
	});

	it('should add child elements to the modals content container', () => {
		const modal = mount(
			<StandardModal title={testTitle} isOpen={true}>
				<p>{testBodyText}</p>
			</StandardModal>
		);

		expect(modal.find('.content').text()).toEqual(testBodyText);
		modal.unmount();
	});

	it('should call the onRequestClose callback when modals close button is clicked', () => {
		const mockCloseReq = jest.fn();

		let modal;

		act(() => {
			modal = mount(
				<StandardModal
					title={testTitle}
					isOpen={true}
					onRequestClose={mockCloseReq}>
					<p>{testBodyText}</p>
				</StandardModal>
			);
		});

		act(() => {
			modal
				.find('.modalContent header>button')
				.getDOMNode()
				.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});

		expect(mockCloseReq).toHaveBeenCalledTimes(1);

		modal.unmount();
	});
});
