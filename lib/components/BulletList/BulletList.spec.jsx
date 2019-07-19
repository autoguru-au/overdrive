import React from 'react';
import { render } from '@testing-library/react';
import { BulletList } from '.';
import { BulletListContext } from './context';

describe('<BulletList />', () => {
	it('should not throw', () => {
		expect(() => render(<BulletList />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<BulletList />).container.firstChild).toMatchSnapshot();
	});

	it('should pass down className', () => {
		expect(
			render(<BulletList className="test-class" />).container.firstChild,
		).toHaveClass('test-class');
	});

	it('should pass the correct nest value', () => {
		const validate = expectation => (
			<BulletListContext.Consumer>
				{value => {
					expect(value).toBe(expectation);
				}}
			</BulletListContext.Consumer>
		);

		render(
			<BulletList>
				{validate(0)}
				<BulletList>
					{validate(1)}
					<BulletList>{validate(2)}</BulletList>
				</BulletList>
			</BulletList>,
		);
	});
});
