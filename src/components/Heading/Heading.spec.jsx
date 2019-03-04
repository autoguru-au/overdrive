import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { Heading } from './Heading';
import { EHeadingSize, EHeadingVariant } from './index';
import { HeadingLoader } from './HeadingLoader';

const testLabel = 'Hello World!';
describe('<Heading />', () => {
	it('should not throw', () =>
		expect(() => shallow(<Heading />)).not.toThrow());

	it('should pass on className to dom element', () => {
		const heading = mount(<Heading className="heading-class" />);
		expect(heading.hasClass('heading-class')).toBeTruthy();
		heading.unmount();
	});

	it('should match snapshot for default heading', () => {
		expect(shallow(<Heading>{testLabel}</Heading>)).toMatchSnapshot();
	});

	it('should match snapshot for default mobile heading', () => {
		expect(
			shallow(
				<Heading variant={EHeadingVariant.Mobile}>{testLabel}</Heading>
			)
		).toMatchSnapshot();
	});

	it('should apply class for mobile variant', () => {
		const heading = shallow(
			<Heading variant={EHeadingVariant.Mobile}>{testLabel}</Heading>
		);
		expect(heading.hasClass('variantMobile')).toBeTruthy();
	});

	it('should apply class for desktop variant', () => {
		const heading = shallow(
			<Heading variant={EHeadingVariant.Desktop}>{testLabel}</Heading>
		);
		expect(heading.hasClass('variantDesktop')).toBeTruthy();
	});

	it('should pass the child down to DOM element', () => {
		expect(shallow(<Heading>{testLabel}</Heading>).text()).toEqual(
			testLabel
		);
	});

	it('should match snapshot for default heading 1', () => {
		expect(
			shallow(<Heading size={EHeadingSize.Heading1} />)
		).toMatchSnapshot();
	});

	it('should match snapshot for default heading 2', () => {
		expect(
			shallow(<Heading size={EHeadingSize.Heading2} />)
		).toMatchSnapshot();
	});

	it('should match snapshot for default heading 3', () => {
		expect(
			shallow(<Heading size={EHeadingSize.Heading3} />)
		).toMatchSnapshot();
	});

	it('should match snapshot for default heading 4', () => {
		expect(
			shallow(<Heading size={EHeadingSize.Heading4} />)
		).toMatchSnapshot();
	});

	it('should match snapshot for default heading 5', () => {
		expect(
			shallow(<Heading size={EHeadingSize.Heading5} />)
		).toMatchSnapshot();
	});

	it('should match snapshot for default heading 6', () => {
		expect(
			shallow(<Heading size={EHeadingSize.Heading6} />)
		).toMatchSnapshot();
	});

	it('should use h1 element for heading 1', () => {
		const heading = shallow(<Heading size={EHeadingSize.Heading1} />);
		expect(heading.type()).toEqual(`h1`);
	});

	it('should use h2 element for heading 2', () => {
		const heading = shallow(<Heading size={EHeadingSize.Heading2} />);
		expect(heading.type()).toEqual(`h2`);
	});

	it('should use h3 element for heading 3', () => {
		const heading = shallow(<Heading size={EHeadingSize.Heading3} />);
		expect(heading.type()).toEqual(`h3`);
	});

	it('should use h4 element for heading 4', () => {
		const heading = shallow(<Heading size={EHeadingSize.Heading4} />);
		expect(heading.type()).toEqual(`h4`);
	});

	it('should use h5 element for heading 5', () => {
		const heading = shallow(<Heading size={EHeadingSize.Heading5} />);
		expect(heading.type()).toEqual(`h5`);
	});

	it('should use h6 element for heading 6', () => {
		const heading = shallow(<Heading size={EHeadingSize.Heading6} />);
		expect(heading.type()).toEqual(`h6`);
	});

	describe('when loading', function() {
		it('should match snapshot for loading view', () => {
			expect(
				shallow(<HeadingLoader variant={EHeadingVariant.Desktop} />)
			).toMatchSnapshot();
		});

		it('should add a loading box', () => {
			expect(
				shallow(
					<HeadingLoader
						size={EHeadingSize.Heading1}
						variant={EHeadingVariant.Desktop}
					/>
				).hasClass('loaderHeading1')
			).toEqual(true);
		});

		it('should not add random width style when randomWidth is false', () => {
			expect(
				render(
					<HeadingLoader
						size={EHeadingSize.Heading2}
						randomWidth={false}
						variant={EHeadingVariant.Desktop}
					/>
				).prop('style').length
			).toBeFalsy();
		});

		it('should add random width style when randomWidth is true', () => {
			expect(
				render(
					<HeadingLoader
						size={EHeadingSize.Heading2}
						randomWidth={true}
						variant={EHeadingVariant.Desktop}
					/>
				)
					.prop('style')
					.width.includes('%')
			).toBeTruthy();
		});
	});
});
