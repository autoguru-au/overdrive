import React from 'react';
import { mount } from 'enzyme';
import { Tooltip } from './Tooltip';

describe('<Tolltip />', () => {
	it('should not throw', () => {
		expect(() => {
			mount(
				<Tooltip label="Test">
					<div>trigger</div>
				</Tooltip>,
			).unmount();
		}).not.toThrow();
	});
});
