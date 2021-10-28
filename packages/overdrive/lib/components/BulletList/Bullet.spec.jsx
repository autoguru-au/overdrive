import { render } from '@testing-library/react';
import * as React from 'react';

import { Bullet } from './Bullet';
import { BulletList } from './BulletList';

describe('<Bullet />', () => {
	it('should not throw', () => {
		expect(() => render(<Bullet />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Bullet />).container.firstChild).toMatchSnapshot();
	});

	it.skip('should pass down className', () => {
		expect(
			render(<Bullet className="test-class" />).container.firstChild,
		).toHaveClass('test-class');
	});

	it.skip('should render a dot when child is <BulletList />', () => {
		const { container } = render(
			<Bullet>
				<BulletList>
					<Bullet>test</Bullet>
				</BulletList>
			</Bullet>,
		);

		expect(container.firstChild).toHaveClass('noDot');
	});

	it.skip('should not render a dot when child is not <BulletList />', () => {
		const { container } = render(<Bullet>test</Bullet>);

		expect(container.firstChild).not.toHaveClass('noDot');
	});
});
