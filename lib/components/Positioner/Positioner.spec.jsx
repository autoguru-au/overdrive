import React, { createRef } from 'react';
import { Positioner } from './Positioner';
import { mount } from 'enzyme';
import { EAlignment } from './alignment';

describe('<Positioner />', () => {
	it('should not throw', () =>
		expect(() =>
			mount(<Positioner triggerRef={createRef()} />).unmount()
		).not.toThrow());

	it('should match snapshot', () => {
		const wrapper = mount(
			<Positioner
				triggerRef={createRef()}
				isOpen={true}
				alignment={EAlignment.BOTTOM}>
				Some body
			</Positioner>
		);

		expect(wrapper).toMatchSnapshot();

		wrapper.unmount();
	});

	describe('when #isOpen', () => {
		it('should render the body when open', () => {
			const wrapper = mount(
				<Positioner
					triggerRef={createRef()}
					isOpen={true}
					alignment={EAlignment.BOTTOM}>
					Some body
				</Positioner>
			);

			expect(wrapper.text()).toContain('Some body');
		});

		it('shouldnt have the body when closed', () => {
			const wrapper = mount(
				<Positioner
					triggerRef={createRef()}
					isOpen={false}
					alignment={EAlignment.BOTTOM}>
					Some body
				</Positioner>
			);

			expect(wrapper.text()).not.toContain('Some body');
		});
	});
});
