import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { ProgressSpinner } from '.';

export default {
	title: 'Primatives/Progress Spinner',
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

const Template: StoryFn<typeof ProgressSpinner> = (args) => (
	<ProgressSpinner {...args} />
);

const standardProps: ComponentProps<typeof ProgressSpinner> = {};

export const Standard = Template.bind(standardProps);
Standard.args = standardProps;
