import { render } from '@testing-library/react';
import * as React from 'react';

import { Bullet } from './Bullet';
import { BulletList } from './BulletList';
import * as styles from './Bullet.css';

describe('<Bullet />', () => {
	it('should not throw', () => {
		expect(() => render(<Bullet />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Bullet />).container.firstChild).toMatchSnapshot();
	});

	it('should pass down className', () => {
		expect(
			render(<Bullet className="test-class" />).container.firstChild
				.firstChild,
		).toHaveClass('test-class');
	});

	it('should render a dot when child is <BulletList />', () => {
		const { container } = render(
			<Bullet>
				<BulletList>
					<Bullet>test</Bullet>
				</BulletList>
			</Bullet>,
		);

		expect(container.firstChild.firstChild).toHaveClass(styles.noDot);
	});

	it('should not render a dot when child is not <BulletList />', () => {
		const { container } = render(<Bullet>test</Bullet>);

		expect(container.firstChild.firstChild).not.toHaveClass(styles.noDot);
	});
});
