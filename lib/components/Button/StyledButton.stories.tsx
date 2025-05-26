import type { Meta, StoryObj } from '@storybook/react-vite';

import { StyledButton } from './StyledButton';

const meta = {
	title: 'Primatives/Buttons/Styled as Button',
	tags: ['polymorphic'],
	component: StyledButton,
	args: {
		as: 'a',
		href: '#link',
		children: 'Button as link',
		variant: 'primary',
		size: 'small',
		minimal: false,
		rounded: false,
		isFullWidth: false,
	},
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof StyledButton>;

export const ButtonAsLink: Story = {};
