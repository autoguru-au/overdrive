import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { Badge, EColour } from './Badge';

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
			<Badge className="badge-class" label={testLabel} />,
		);
		expect(
			badge
				.find('span')
				.first()
				.text(),
		).toEqual(testLabel);
	});

	it('should pass on className to dom element', () => {
		const badge = mount(
			<Badge className="badge-class" label={testLabel} />,
		);
		expect(badge.find('span').hasClass('badge-class')).toBeTruthy();
	});

	it('should apply success colour style', () => {
		const badge = mount(
			<Badge colour={EColour.Success} label={testLabel} />,
		);
		expect(badge.find('span').hasClass('colourSuccess')).toBeTruthy();
	});

	it('should apply warning colour style', () => {
		const badge = mount(
			<Badge colour={EColour.Warning} label={testLabel} />,
		);
		expect(badge.find('span').hasClass('colourWarning')).toBeTruthy();
	});

	it('should apply danger colour style', () => {
		const badge = mount(
			<Badge colour={EColour.Danger} label={testLabel} />,
		);
		expect(badge.find('span').hasClass('colourDanger')).toBeTruthy();
	});

	it('should not apply inverted style when inverted prop is set to false', () => {
		const badge = mount(
			<Badge colour={EColour.Default} invert={false} label={testLabel} />,
		);
		expect(badge.find('span').hasClass('inverted')).not.toBeTruthy();
	});

	it('should apply inverted style when inverted prop is set to true', () => {
		const badge = mount(
			<Badge invert colour={EColour.Default} label={testLabel} />,
		);
		expect(badge.find('span').hasClass('inverted')).toBeTruthy();
	});
});
