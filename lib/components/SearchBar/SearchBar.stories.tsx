import { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from './SearchBar';

const meta: Meta = {
	title: 'Components/Search Input',
	component: SearchBar,
	args: {
		label: 'Search for tasks',
		maxLength: 25,
	},
	tags: ['beta'],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const SearchInput: Story = {};
