import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within, userEvent } from '@storybook/test';

import { SearchBar } from './SearchBar';

const meta: Meta = {
	title: 'Components/Search Input',
	component: SearchBar,
	args: {
		placeholder: 'Search for tasks',
		onChange: fn(),
		lang: {
			label: 'Search for tasks',
			clear: 'clear search',
		},
		maxLength: 25,
		testId: 'demo-search-bar',
	},
	tags: ['beta'],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

const testPhrase = 'Test search phrase';

export const SearchInput: Story = {
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const field = canvas.getAllByRole('searchbox')[0];

		await step('Initial state', async () => {
			await expect(field).toHaveAccessibleName(
				args.placeholder ?? args.label,
			);
		});

		field.focus(); // react-aria seems to need this event to register interactions
		await step('Enter text into the search field', async () => {
			await userEvent.type(field, testPhrase);
			await expect(args.onChange).toBeCalledWith(testPhrase);
			await expect(field).toHaveValue(testPhrase);
			await expect(field).toHaveFocus();
		});

		await step('Clearing the search field', async () => {
			await expect(canvas.getAllByRole('button')[0]).toBeVisible();
			await userEvent.keyboard('{Esc}');
			await expect(field).toHaveValue('');
		});
		field.blur();
	},
};
