import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { EPinInputSize, PinInput } from '.';

export default {
	title: 'Components/PinInput',
	component: PinInput,
	argTypes: {
		size: {
			options: EPinInputSize,
			control: {
				type: 'select',
			},
		},
		digits: {
			control: {
				type: 'range',
				min: 0,
				max: 8,
				step: 1,
			},
		},
	},
} as ComponentMeta<typeof PinInput>;

const Template: ComponentStory<typeof PinInput> = (args) => (
	<PinInput {...args} />
);

const standardProps = {
	digits: 3,
	size: EPinInputSize.Medium,
	value: '',
};
export const standard = Template.bind(standardProps);
standard.args = standardProps;

const smallSizeProps = {
	digits: 1,
	size: EPinInputSize.Small,
	value: '',
};
export const smallSize = Template.bind(smallSizeProps);
smallSize.args = smallSizeProps;
