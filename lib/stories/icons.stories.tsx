import * as iconset from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Heading } from '../components/Heading';
import { Icon } from '../components/Icon';

import { Box, Stack } from './helpers';
import { sprinkles } from './helpers/sprinkles.css';
import { transitionColours } from './helpers/styles.css';

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
							<Box
								as="li"
								// background={{
								// 	initial: 'white',
								// 	hover: 'gray800',
								// }}
								borderColor="gray"
								borderStyle="solid"
								borderWidth="2"
								borderRadius="md"
								// color={{ initial: 'gray700', hover: 'white' }}
								display="flex"
								flexDirection="column"
								alignItems="center"
								justifyContent="center"
								padding="2"
								margin="none"
								key={name}
								style={{
									listStyle: 'none',
									width: '140px',
									height: '120px',
									textAlign: 'center',
								}}
								className={transitionColours}
							>
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
							</Box>
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
		<Stack space="sm">
			<Heading as="h1">Icon Set</Heading>
			<Heading as="h4">@autoguru/icons</Heading>
			<IconGrid />
		</Stack>
	),
};
