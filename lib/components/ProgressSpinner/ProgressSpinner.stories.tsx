import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { ProgressSpinner } from '.';

export default {
	title: 'Components/Progress/Spinner',
	component: ProgressSpinner,
	decorators: [
		(story) => (
			<div
				style={{
					width: '100%',
					height: '100%',
					flexDirection: 'row',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{story()}
			</div>
		),
	],
	parameters: { chromatic: { disable: true } },
} satisfies Meta<typeof ProgressSpinner>;

export const Standard = () => (
	<ProgressSpinner colour="primary" size="medium" />
);

const Template: StoryFn<typeof ProgressSpinner> = (args) => (
	<ProgressSpinner {...args} />
);
const standardProps: ComponentProps<typeof ProgressSpinner> = {};
export const standard = Template.bind(standardProps);
standard.args = standardProps;
