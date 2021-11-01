import * as React from 'react';
import { ComponentProps } from 'react';

import { ProgressSpinner } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
				}}>
				{story()}
			</div>
		),
	],
	parameters: { chromatic: { disable: true } },
} as ComponentMeta<typeof ProgressSpinner>;

export const Standard = () => (
	<ProgressSpinner colour='primary' size='medium' />
);

const Template: ComponentStory<typeof ProgressSpinner> = (args) => (
	<ProgressSpinner {...args} />
);
const standardProps: ComponentProps<typeof ProgressSpinner> = {};
export const standard = Template.bind(standardProps);
standard.args = standardProps;
