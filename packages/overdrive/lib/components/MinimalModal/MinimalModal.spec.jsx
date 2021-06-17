import { render } from '@testing-library/react';
import * as React from 'react';

import { MinimalModal } from './MinimalModal';

describe('<MinimalModal />', () => {
	const testBodyText =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis neque a laoreet maximus. Vestibulum hendrerit quam at mi venenatis faucibus at vel nisi. In ut risus et ipsum tincidunt tempor. Suspendisse potenti. Praesent faucibus posuere risus, at congue mauris porttitor ut. Donec sit amet elit vitae purus dictum aliquet quis ut ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dui sapien, porttitor ac erat vel, malesuada rutrum mauris. Nam arcu tellus, pretium ut aliquet eget, ultrices vel est. Maecenas dapibus volutpat eros a volutpat.';

	it('should not throw', () =>
		expect(() => render(<MinimalModal />)).not.toThrow());

	it('should match snapshot without title and body', () => {
		expect(render(<MinimalModal isOpen />).baseElement).toMatchSnapshot();
	});

	it('should match snapshot with body', () => {
		expect(
			render(
				<MinimalModal isOpen>
					<p>{testBodyText}</p>
				</MinimalModal>,
			).baseElement,
		).toMatchSnapshot();
	});
});
