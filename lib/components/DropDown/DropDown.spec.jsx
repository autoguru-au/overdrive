import { render } from '@testing-library/react';
import * as React from 'react';

import { DropDown } from './DropDown';
import { DropDownOption } from './DropDownOption';
import { DownloadIcon, TrashCanOutlineIcon } from '@autoguru/icons';
import { ComponentProps } from 'react';

const option1 = <DropDownOption label="Download" icon={DownloadIcon} />;
const option2 = <DropDownOption label="Delete" icon={TrashCanOutlineIcon} />;

const standardProps = {
	label: 'Attachment',
	options: [option1, option2],
};
describe('<DropDown />', () => {
	it('should not throw', () => {
		expect(() => render(<DropDown />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(<DropDown {...standardProps} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match the snapshot as Primary variant', () => {
		expect(
			render(<DropDown {...standardProps} variant="primary" />).container
				.firstChild,
		).toMatchSnapshot();
	});
});
