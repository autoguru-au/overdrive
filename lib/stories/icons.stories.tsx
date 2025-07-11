import * as iconset from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading/Heading';
import { Icon } from '../components/Icon/Icon';
import { sprinkles } from '../styles/sprinkles.css';

import { icon as iconStyle } from './helpers/styles.css';

const IconGrid = () => {
	return (
		<ul
			className={sprinkles({
				display: 'flex',
				flexWrap: 'wrap',
				gap: '4',
				paddingLeft: 'none',
			})}
		>
			{
				// @ts-expect-error not all code paths return a value
				Object.entries(iconset).map(([name, icon]) => {
					if (icon)
						return (
							<li key={name} className={iconStyle}>
								<Icon icon={icon} size="large" />
								<div
									className={sprinkles({
										marginTop: '4',
									})}
								>
									{name
										.replace('Icon', '')
										.split(/(?=[A-Z])/)
										.join(' ')}
								</div>
							</li>
						);
				})
			}
		</ul>
	);
};

const meta: Meta = {
	title: 'Foundation/Icon Set',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const IconSet: Story = {
	parameters: {
		chromatic: { disableSnapshot: true },
	},
	render: () => (
		<FlexStack gap="7">
			<Heading as="h1">Icon Set</Heading>
			<Heading as="h4">@autoguru/icons</Heading>
			<IconGrid />
		</FlexStack>
	),
};
