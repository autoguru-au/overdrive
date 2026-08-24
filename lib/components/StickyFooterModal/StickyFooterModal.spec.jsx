import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { StickyFooterModal } from './StickyFooterModal';

describe('<StickyFooterModal />', () => {
	const testTitle = 'Hello World!';
	const testBodyText = 'Body content';

	it('should not throw', () =>
		expect(() =>
			render(<StickyFooterModal title={testTitle} />),
		).not.toThrow());

	it('should match snapshot with dual-cta footer (default)', () => {
		expect(
			render(
				<StickyFooterModal isOpen title={testTitle}>
					<p>{testBodyText}</p>
				</StickyFooterModal>,
			).baseElement,
		).toMatchSnapshot();
	});

	it('should match snapshot with single-cta footer', () => {
		expect(
			render(
				<StickyFooterModal isOpen title={testTitle} footer="single-cta">
					<p>{testBodyText}</p>
				</StickyFooterModal>,
			).baseElement,
		).toMatchSnapshot();
	});

	it('should call onRequestClose when the close button is clicked', () => {
		const mockCloseReq = vi.fn();

		const { getByLabelText } = render(
			<StickyFooterModal
				isOpen
				title={testTitle}
				onRequestClose={mockCloseReq}
			>
				<p>{testBodyText}</p>
			</StickyFooterModal>,
		);

		fireEvent.click(getByLabelText('Close dialog'));

		expect(mockCloseReq).toHaveBeenCalledTimes(1);
	});

	it('should call onPrimaryClick when the primary CTA is clicked', () => {
		const onPrimaryClick = vi.fn();

		const { getByText } = render(
			<StickyFooterModal
				isOpen
				title={testTitle}
				footer="single-cta"
				primaryLabel="Confirm"
				onPrimaryClick={onPrimaryClick}
			>
				<p>{testBodyText}</p>
			</StickyFooterModal>,
		);

		fireEvent.click(getByText('Confirm'));

		expect(onPrimaryClick).toHaveBeenCalledTimes(1);
	});

	it('should call onSecondaryClick when the secondary CTA is clicked', () => {
		const onSecondaryClick = vi.fn();

		const { getByText } = render(
			<StickyFooterModal
				isOpen
				title={testTitle}
				footer="dual-cta"
				secondaryLabel="Cancel"
				onSecondaryClick={onSecondaryClick}
			>
				<p>{testBodyText}</p>
			</StickyFooterModal>,
		);

		fireEvent.click(getByText('Cancel'));

		expect(onSecondaryClick).toHaveBeenCalledTimes(1);
	});
});
