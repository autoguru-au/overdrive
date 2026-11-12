import { CarIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { action } from 'storybook/actions';
import { expect, waitFor, within } from 'storybook/test';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { DateInput } from '../DateInput/DateInput';

import { AutoSuggest } from './AutoSuggest';

const mockSuggestions = [
	'Alfa Romeo',
	'Aston Martin',
	'Bentley',
	'BMW',
	'Bugatti',
	'Ferrari',
	'Jaguar',
	'Koenigsegg',
	'Lamborghini',
	'Lotus',
	'Maserati',
	'McLaren',
	'Pontiac',
	'Porsche',
].map((item) => ({ text: item, payload: item }));

const attachOptions: Record<
	string,
	ComponentProps<typeof DateInput>['attach']
> = {
	NONE: 'NONE',
	TOP: 'TOP',
	RIGHT: 'RIGHT',
	LEFT: 'LEFT',
	BOTTOM: 'BOTTOM',
	ALL: 'ALL',
};

const meta: Meta<typeof AutoSuggest> = {
	title: 'Forms & Input Fields/Auto Suggest',
	component: AutoSuggest,
	decorators: [
		(Story) => (
			<div style={{ minHeight: '420px' }}>
				<Story />
			</div>
		),
	],
	args: {
		value: mockSuggestions[3],
		suggestions: mockSuggestions,
		disabled: void 0,
		name: 'text',
		placeholder: 'Pick an exotic car brand',
		isValid: void 0,
		isTouched: void 0,
		isLoading: void 0,
		isFocused: void 0,
		reserveHintSpace: void 0,
		hintText: '',
		notch: true,
		prefixIcon: CarIcon,
		onReset: () => action('onReset')(),
		onChange: (thing) => action('onChange')(thing),
		onEnter: (thing) => action('onEnter')(thing),
		onFocus: (thing) => action('onFocus')(thing),
		onBlur: (thing) => action('onBlur')(thing),
	},
	argTypes: {
		value: {
			options: {
				// @ts-expect-error injecting additional option for story
				unselected: null,
				...Object.fromEntries(
					mockSuggestions.map((item) => [item.text, item]),
				),
			},
			defaultValue: null,
			control: {
				type: 'select',
			},
		},
		attach: {
			defaultValue: 'NONE',
			description: 'Input attach',
			options: Object.values(attachOptions),
			control: {
				type: 'select',
			},
		},
		fieldIcon: {
			defaultValue: null,
			description: 'Input field Icon',
			...argTypesExampleIcons,
		},
		prefixIcon: {
			defaultValue: null,
			description: 'Input prefix Icon',
			...argTypesExampleIcons,
		},
		wrapperRef: {
			control: {
				disable: true,
			},
		},
		ref: {
			control: {
				disable: true,
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Additional examples of shared input field states and variants can be seen in
 * [Text Input](/docs/forms-input-fields-text-input--docs)
 */
export const Standard: Story = {};

export const LargeSize: Story = {
	args: {
		size: 'large',
	},
};

export const SmallSize: Story = {
	args: {
		size: 'small',
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};

/**
 * Axe cover for the open suggestion list. The flyout renders through a `Portal`
 * and only above the `desktop` breakpoint, so queries go through
 * `document.body` and the browser project runs at a desktop viewport.
 */
export const A11yOpenList: Story = {
	tags: ['test', '!autodocs', 'skip-themes'],
	parameters: {
		a11y: { test: 'error' },
		chromatic: { disableSnapshot: true },
	},
	play: async ({ canvasElement, userEvent }) => {
		const input = within(canvasElement).getByRole('searchbox');

		await userEvent.click(input);

		const portal = within(document.body);

		await waitFor(async () => {
			await expect(portal.getByRole('listbox')).toBeVisible();
		});

		await expect(portal.getAllByRole('option').length).toBeGreaterThan(0);
	},
};
