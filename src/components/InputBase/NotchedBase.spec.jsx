import React from 'react';
import { mount, render } from 'enzyme';
import { NotchedBase } from './NotchedBase';

const testLabel = 'Hello World!';

describe('<NotchedBase />', () => {
	it('should not throw', () => {
		expect(() => mount(<NotchedBase />).unmount()).not.toThrow();
	});

	it('should pass on className to dom element', () => {
		const notch = mount(
			<NotchedBase className="notched-class" placeholder={testLabel} />
		);
		expect(notch.hasClass('notched-class')).toBeTruthy();
		notch.unmount();
	});

	it('should match snapshot for default notch', () => {
		const notch = render(<NotchedBase placeholder={testLabel} />);
		expect(notch).toMatchSnapshot();
	});

	it('should match snapshot for dirty notch', () => {
		const notch = render(
			<NotchedBase isDirty={true} placeholder={testLabel} />
		);
		expect(notch).toMatchSnapshot();
	});

	it('should match snapshot for active notch', () => {
		const notch = render(
			<NotchedBase isActive={true} placeholder={testLabel} />
		);
		expect(notch).toMatchSnapshot();
	});

	it('should match snapshot for dirty and active notch', () => {
		const notch = render(
			<NotchedBase
				isActive={true}
				isDirty={true}
				placeholder={testLabel}
			/>
		);
		expect(notch).toMatchSnapshot();
	});

	it('should display children', () => {
		const notch = render(<NotchedBase>{testLabel}</NotchedBase>);
		expect(notch.text()).toEqual(testLabel);
	});

	it('should display placeholder text inside a label element', () => {
		const notch = render(
			<NotchedBase className="notched-class" placeholder={testLabel} />
		);
		expect(notch.find('label').text()).toEqual(testLabel);
	});

	it('should add shifted classname to dom element when isEmpty is false', () => {
		const notch = mount(
			<NotchedBase
				isEmpty={false}
				className="notched-class"
				placeholder={testLabel}
			/>
		);
		expect(notch.html()).toContain('notchedBaseShift');
		notch.unmount();
	});

	it('should not shifted classname to dom element when isEmpty is true', () => {
		const notch = mount(
			<NotchedBase
				isEmpty={true}
				className="notched-class"
				placeholder={testLabel}
			/>
		);
		expect(notch.html()).not.toContain('notchedBaseShift');
		notch.unmount();
	});

	it('should add active style to dom element when isActive prop is true', () => {
		const notch = mount(
			<NotchedBase
				isActive={true}
				className="notched-class"
				placeholder={testLabel}
			/>
		);
		expect(notch.html()).toContain('notchedBaseActive');
		notch.unmount();
	});

	it('should not add dirty style to dom element when isEmpty prop is not true', () => {
		const notch = mount(
			<NotchedBase
				isDirty={true}
				className="notched-class"
				placeholder={testLabel}
			/>
		);
		expect(notch.html()).not.toContain('notchedBaseActive');
		notch.unmount();
	});
});
