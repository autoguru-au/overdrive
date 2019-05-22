import React, { useState } from 'react';
import { mount, render, shallow } from 'enzyme';
import { ToggleButton } from './ToggleButton';
import { act } from 'react-dom/test-utils';

describe('<ToggleButton />', () => {
	it('should not throw', () =>
		expect(() => shallow(<ToggleButton />)).not.toThrow());

	it('should match snapshot without props', () => {
		expect(render(<ToggleButton />)).toMatchSnapshot();
	});

	it('should match snapshot when un-toggled', () => {
		expect(render(<ToggleButton toggled={false} />)).toMatchSnapshot();
	});

	it('should match snapshot when un-toggled and disabled', () => {
		expect(
			render(<ToggleButton toggled={false} disabled={true} />)
		).toMatchSnapshot();
	});

	it('should match snapshot when toggled', () => {
		expect(render(<ToggleButton toggled={true} />)).toMatchSnapshot();
	});

	it('should match snapshot when toggled and disabled', () => {
		expect(
			render(<ToggleButton toggled={true} disabled={true} />)
		).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		const toggleButton = mount(
			<ToggleButton className="toggleButton-class" value={10} />
		);
		expect(
			toggleButton.find('div.toggleButton-class').length === 1
		).toBeTruthy();
	});

	it('should set toggle to false by default', () => {
		const toggleButton = mount(<ToggleButton />);
		expect(toggleButton.find('.toggled').length === 0).toBeTruthy();
	});

	it('should be toggled on when toggled prop is set to true', () => {
		const toggleButton = mount(<ToggleButton toggled={true} />);
		expect(toggleButton.find('.toggled').length === 1).toBeTruthy();
	});

	it('should be enabled by default', () => {
		const toggleButton = mount(<ToggleButton />);
		expect(toggleButton.find('[disabled]').length === 0).toBeTruthy();
	});

	it('should be disabled on when disabled prop is set to true', () => {
		const toggleButton = mount(<ToggleButton disabled={true} />);
		expect(toggleButton.find('[disabled]').length === 1).toBeTruthy();
	});

	it('should fire change with the correct changed value when clicked', () => {
		const spyedCallback = jest.fn();

		const wrapper = mount(
			<ToggleButton onChange={spyedCallback} toggled={false} />
		);

		wrapper.find('div').simulate('click');

		expect(spyedCallback).toHaveBeenCalledWith(true);

		wrapper.find('div').simulate('click');

		expect(spyedCallback).toHaveBeenCalledWith(false);

		wrapper.find('div').simulate('click');

		expect(spyedCallback).toHaveBeenCalledWith(true);
		expect(spyedCallback).toHaveBeenCalledTimes(3);

		wrapper.unmount();
	});

	it('should not fire change if clicked while disabled', () => {
		const spyedCallback = jest.fn();

		const wrapper = mount(
			<ToggleButton
				onChange={spyedCallback}
				toggled={false}
				disabled={true}
			/>
		);

		wrapper.find('div').simulate('click');

		expect(spyedCallback).not.toHaveBeenCalled();

		wrapper.unmount();
	});

	it('should update its value when and a value prop comes in', done => {
		const ToggleButtonWrapper = ({ getToggleSetter }) => {
			const [toggled, toggledValue] = useState(false);

			getToggleSetter(toggledValue);

			return <ToggleButton toggled={toggled} />;
		};

		let wrapper;
		const onSetToggle = setToggle => {
			setTimeout(() => {
				expect(wrapper.html().indexOf('toggled') === -1).toEqual(true);

				act(() => {
					setToggle(true);
				});

				expect(wrapper.html().indexOf('toggled') >= 0).toEqual(true);

				act(() => {
					setToggle(false);
				});

				expect(wrapper.html().indexOf('toggled') === -1).toEqual(true);

				wrapper.unmount();
				done();
			}, 100);
		};

		wrapper = mount(<ToggleButtonWrapper getToggleSetter={onSetToggle} />);
	});
});
