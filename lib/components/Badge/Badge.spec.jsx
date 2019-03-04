import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { Badge, EVariant } from './Badge';

const testLabel = 'Hello World!';
describe('<Badge />', () => {
	it('should not throw', () =>
		expect(() => shallow(<Badge />)).not.toThrow());

	it('should match snapshot without label', () => {
		expect(shallow(<Badge />)).toMatchSnapshot();
	});

	it('should match snapshot with label', () => {
		expect(render(<Badge label={testLabel} />)).toMatchSnapshot();
	});

	it('should add a span element with the text value in it', () => {
		const badge = mount(
			<Badge className="badge-class" label={testLabel} />
		);
		expect(
			badge
				.find('span')
				.first()
				.text()
		).toEqual(testLabel);
	});

	it('should pass on className to dom element', () => {
		const badge = mount(
			<Badge className="badge-class" label={testLabel} />
		);
		expect(badge.find('span').hasClass('badge-class')).toBeTruthy();
	});

	it('should apply success variant style', () => {
		const badge = mount(
			<Badge variant={EVariant.Success} label={testLabel} />
		);
		expect(badge.find('span').hasClass('variantSuccess')).toBeTruthy();
	});

	it('should apply warning variant style', () => {
		const badge = mount(
			<Badge variant={EVariant.Warning} label={testLabel} />
		);
		expect(badge.find('span').hasClass('variantWarning')).toBeTruthy();
	});

	it('should apply danger variant style', () => {
		const badge = mount(
			<Badge variant={EVariant.Danger} label={testLabel} />
		);
		expect(badge.find('span').hasClass('variantDanger')).toBeTruthy();
	});
});
