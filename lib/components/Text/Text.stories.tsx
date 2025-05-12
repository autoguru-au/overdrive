import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Text, type TextProps } from './Text';
import type { TextSize } from './useTextStyles';
import * as styles from './useTextStyles.css';

const elements: TextProps['as'][] = ['p', 'label', 'span'];
const Wrapper = ({ children }) => (
	<div style={{ maxWidth: '350px', width: '100%' }}>{children}</div>
);

const meta: Meta<typeof Text> = {
	title: 'Primatives/Text',
	component: Text,
	decorators: [(Story) => <Wrapper>{Story()}</Wrapper>],
	args: {
		as: 'p',
		size: '4',
		strong: false,
		display: 'inline',
		fontWeight: 'normal',
		color: undefined,
		noWrap: undefined,
		breakWord: undefined,
		transform: undefined,
	},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Standard: Story = {
	args: {
		children: 'Help people better care for their cars',
	},
};

const longText =
	'To avoid you coming to a halt in the middle of the road, because of a banging, crash of pistons and valves fighting with each other, let investigate what the timing belt is, what it does, and why it costs so much to replace or repair.';

export const AllTypes: Story = {
	args: {
		children: longText,
		display: 'block',
	},
	render: (args) => (
		<>
			{elements.map((as) => (
				<Text {...args} as={as} key={as} />
			))}
		</>
	),
};

export const AllSizes: Story = {
	args: {
		children: longText,
	},
	render: (args) => (
		<>
			{Object.keys(styles.sizes).map((size) => (
				<Text key={size} {...args} size={size as TextSize} />
			))}
		</>
	),
};

export const AllColours: Story = {
	args: {
		children: longText,
	},
	render: ({ children, ...args }) => (
		<>
			{Object.keys(styles.colours).map((color) => (
				<div key={color} style={{ marginBottom: 8 }}>
					<Text as="p" size="3" strong>
						{color}
					</Text>
					<Text
						{...args}
						as="p"
						colour={color as keyof typeof styles.colours}
					>
						{children}
					</Text>
				</div>
			))}
		</>
	),
};

export const WithLongUnspacedText: Story = {
	args: {
		breakWord: true,
		children:
			'Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair.',
	},
	render: (args) => (
		<>
			<Text {...args} />
		</>
	),
};
