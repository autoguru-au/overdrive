import React from 'react';
import { mount, shallow } from 'enzyme';
import { Anchor } from './';
import { Button } from '../Button';

const testLabel = 'Hello World!';
const testLink = 'https://www.hellowrold.com';
const TestIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M183.253 353.707L280.96 256l-97.707-97.92 30.08-30.08 128 128-128 128-30.08-30.293z" />
	</svg>
);

describe('<Anchor />', () => {
	it('should not throw', () =>
		expect(() => shallow(<Anchor />)).not.toThrow());

	it('should match snapshot without label', () => {
		expect(shallow(<Anchor />)).toMatchSnapshot();
	});

	it('should match snapshot with label, icon and to props', () => {
		const anchor = shallow(
			<Anchor icon={TestIcon} label={testLabel} href={testLink} />,
		);
		expect(anchor).toMatchSnapshot();
	});

	it('should add an a dom element', () => {
		const anchor = shallow(
			<Anchor className="anchor-class" label={testLabel} />,
		);
		expect(anchor.type()).toEqual(`a`);
	});

	it('should pass on className to dom element', () => {
		const anchor = shallow(
			<Anchor className="anchor-class" label={testLabel} />,
		);
		expect(anchor.find('a').hasClass('anchor-class')).toBeTruthy();
	});

	it('should add a span element inside the a tag with the the label text value', () => {
		const anchor = mount(<Anchor label={testLabel} href={testLink} />);
		expect(anchor.find('span').text()).toEqual(testLabel);
		anchor.unmount();
	});

	it('should the icon passed in props', () => {
		const anchor = shallow(
			<Anchor icon={TestIcon} label={testLabel} href={testLink} />,
		);
		expect(anchor.find('.icon').exists()).toBeTruthy();
	});

	it("should use the 'to' prop value for the a tag's href value", () => {
		const anchor = shallow(
			<Anchor icon={TestIcon} label={testLabel} href={testLink} />,
		);
		expect(anchor.find('a').prop('href')).toEqual(testLink);
	});

	describe('when custom component', () => {
		it('should add Button dom element if button component is passed down to it', () => {
			const anchor = shallow(
				<Anchor
					className="anchor-class"
					label={testLabel}
					is={<Button />}
				/>,
			);
			expect(anchor.find(Button)).toBeTruthy();
		});

		it('should match snapshot with label, icon custom component', () => {
			const anchor = shallow(
				<Anchor
					icon={TestIcon}
					is={<Button />}
					label={testLabel}
					to={testLink}
				/>,
			);
			expect(anchor).toMatchSnapshot();
		});

		describe('deprecated still work', () => {
			it('should add Button dom element if button component is passed down to it', () => {
				const anchor = shallow(
					<Anchor
						className="anchor-class"
						label={testLabel}
						component={Button}
					/>,
				);
				expect(anchor.find(Button)).toBeTruthy();
			});

			it('should match snapshot with label, icon custom component', () => {
				const anchor = shallow(
					<Anchor
						icon={TestIcon}
						compnent={Button}
						label={testLabel}
						to={testLink}
					/>,
				);
				expect(anchor).toMatchSnapshot();
			});
		});
	});
});
