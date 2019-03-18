import React from 'react';
import { mount, render } from 'enzyme';
import { NotchedBase } from './NotchedBase';

describe('<NotchedBase />', () => {
	it('should not throw', () => {
		expect(() =>
			mount(<NotchedBase placeholder="placeholder something" />).unmount()
		).not.toThrow();
	});

	it('should pass on className to dom element', () => {
		const notch = mount(
			<NotchedBase
				className="notched-class"
				placeholder="placeholder something"
			/>
		);
		expect(notch.hasClass('notched-class')).toBeTruthy();
		notch.unmount();
	});

	it('should match snapshot for default notch', () => {
		const notch = render(
			<NotchedBase placeholder="placeholder something" />
		);
		expect(notch).toMatchSnapshot();
	});

	it('should match snapshot for dirty notch', () => {
		const notch = render(
			<NotchedBase isDirty={true} placeholder="placeholder something" />
		);
		expect(notch).toMatchSnapshot();
	});

	it('should match snapshot for active notch', () => {
		const notch = render(
			<NotchedBase isActive={true} placeholder="placeholder something" />
		);
		expect(notch).toMatchSnapshot();
	});

	it('should match snapshot for dirty and active notch', () => {
		const notch = render(
			<NotchedBase
				isActive={true}
				isDirty={true}
				placeholder="placeholder something"
			/>
		);
		expect(notch).toMatchSnapshot();
	});

	it('should display children', () => {
		const notch = render(
			<NotchedBase placeholder="placeholder something">
				something children
			</NotchedBase>
		);

		expect(notch.text()).toMatch(/something\schildren/);
	});

	it('should display placeholder text inside a label element', () => {
		const notch = render(
			<NotchedBase
				placeholder="placeholder something"
				className="notched-class"
			/>
		);
		expect(notch.find('label').text()).toEqual('placeholder something');
	});

	it('should add shifted classname to dom element when isEmpty is false', () => {
		const notch = mount(
			<NotchedBase
				isEmpty={false}
				className="notched-class"
				placeholder="placeholder something"
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
				placeholder="placeholder something"
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
				placeholder="placeholder something"
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
				placeholder="placeholder something"
			/>
		);
		expect(notch.html()).not.toContain('notchedBaseActive');
		notch.unmount();
	});
});
