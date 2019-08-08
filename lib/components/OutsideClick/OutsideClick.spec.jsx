import React, { useRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { OutsideClick, useOutsideClick } from '.';

describe('<OutsideClick />', () => {
	it('should fire the callback when outside is clicked', () => {
		const outsideClickHandler = jest.fn();

		const { getByText } = render(
			<>
				<OutsideClick onOutsideClick={outsideClickHandler}>
					<p>test</p>
				</OutsideClick>
				<p>click</p>
			</>,
		);

		fireEvent.mouseUp(getByText('click'));

		expect(outsideClickHandler).toHaveBeenCalledTimes(1);
	});

	describe('when useOutsideClick', () => {
		const Example = ({ callback }) => {
			const refA = useRef();
			const refB = useRef();

			useOutsideClick([refA, refB], callback);

			return (
				<>
					<div ref={refA}>a</div>
					<div ref={refB}>b</div>
				</>
			);
		};

		it('should callback outside when an array of refs', () => {
			const outsideClickHandler = jest.fn();

			const { getByText } = render(
				<>
					<Example callback={outsideClickHandler} />
					<p>click</p>
				</>,
			);

			fireEvent.mouseUp(getByText('click'));

			expect(outsideClickHandler).toHaveBeenCalledTimes(1);
		});

		it('should not callback outside when an array of refs', () => {
			const outsideClickHandler = jest.fn();

			const { getByText } = render(
				<>
					<Example callback={outsideClickHandler} />
					<p>click</p>
				</>,
			);

			fireEvent.mouseUp(getByText('a'));

			expect(outsideClickHandler).toHaveBeenCalledTimes(0);
		});
	});
});
