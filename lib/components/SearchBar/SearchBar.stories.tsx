import { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';

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

const testPhrase = 'Test search phrase';

export const SearchInput: Story = {
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const field = canvas.getByRole('searchbox');

		await expect(field).toHaveAccessibleName(args.label);
		field.focus(); // react-aria seems to need this event to register interactions
		await userEvent.type(field, testPhrase);
		await expect(field).toHaveValue(testPhrase);
		await expect(field).toHaveFocus();
		await expect(canvas.getByRole('button')).toBeVisible();
		await userEvent.keyboard('{Esc}');
		await expect(field).not.toHaveValue(testPhrase);
		field.blur();
	},
};
