import type { Meta, StoryObj } from '@storybook/react-vite';
import isChromatic from 'chromatic/isChromatic';
import MockDate from 'mockdate';
import { expect, fn, getAllByRole, getByText, userEvent } from 'storybook/test';

import { DateTimePicker } from './DateTimePicker';

const testDate = '2026-01-01';
const dataSelected = '[data-selected]';

const times = [
	{
		label: 'Early morning',
		description: '6 to 8 AM',
		name: '6-8',
	},
	{
		label: 'Morning',
		description: '8 to 10 AM',
		name: '8-10',
	},
	{
		label: 'Mid-morning',
		description: '10 AM to 12 PM',
		name: '10-12',
	},
	{
		label: 'Early afteroon',
		description: '12 to 2 PM',
		name: '12-2',
	},
	{
		label: 'Day before',
		description: 'Afternoon of day prior to service',
		name: 'aft-before',
	},
];

const meta: Meta<typeof DateTimePicker> = {
	title: 'Forms & Input Fields/Date & Time Picker',
	component: DateTimePicker,
	args: {
		title: 'Select preferred date and time to bring in your vehicle',
		timeOptions: {
			items: times,
			label: 'Select a drop-off time of day',
		},
		calendarOptions: {
			firstDayOfWeek: 'mon',
		},
		allowPastDate: false,
		onChange: fn(),
		lang: {
			dateLabel: 'Date',
			timeLabel: 'Time',
		},
		testId: 'demo-date-time-picker',
	},
	argTypes: {
		allowPastDate: {
			control: {
				type: 'boolean',
			},
		},
	},
	beforeEach: () => {
		if (isChromatic()) MockDate.set(testDate);
	},
	tags: ['beta'],
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const BringInYourVehicle: Story = {};

export const Interactions: Story = {
	args: {
		title: 'Picker title',
		timeOptions: {
			items: times,
			label: 'Aria label for time option grid',
		},
		lang: {
			dateLabel: 'Date label',
			timeLabel: 'Time label',
			nextLabel: 'Next button label',
			prevLabel: 'Previous button label',
		},
	},
	play: async ({ args, step, mount }) => {
		MockDate.set(testDate);

		const canvas = await mount();
		const component = canvas.getAllByRole('group')[0];
		const datePickerNav = canvas.getAllByRole('application')[0];
		const [prevBtn, nextBtn] = getAllByRole(datePickerNav, 'button');
		const calendar = canvas.getAllByRole('grid')[0];
		const timePicker = canvas.getAllByRole('listbox')[0];

		await step('Elements render label and attributes', async () => {
			await expect(component).toHaveAccessibleName(`${args.title}`);
			await expect(prevBtn).toBeDisabled();
			await expect(nextBtn).toBeEnabled();
			await expect(timePicker).toHaveAccessibleName(
				args.timeOptions.label,
			);
			await expect(component).toHaveAttribute('data-testid', args.testId);
		});

		await step('Calendar selection and navigation', async () => {
			let selectedDay = calendar.querySelector(dataSelected);
			await expect(selectedDay).toBeInTheDocument();
			await expect(selectedDay).toHaveRole('button');
			await expect(selectedDay).toHaveTextContent('1');

			await userEvent.click(nextBtn);
			await userEvent.click(nextBtn);
			await expect(
				calendar.querySelector(dataSelected),
			).not.toBeInTheDocument();
			await userEvent.click(prevBtn);

			await userEvent.click(getByText(calendar, '13'));
			await expect(args.onChange).not.toHaveBeenCalled();

			await userEvent.keyboard('{ArrowLeft}{Enter}');
			selectedDay = calendar.querySelector(dataSelected);
			await expect(selectedDay).toHaveTextContent('12');
		});

		await step('Time selection', async () => {
			const options = getAllByRole(timePicker, 'option');
			await expect(options).toHaveLength(times.length);
			await userEvent.click(options[1]);
			await expect(args.onChange).toHaveBeenCalled();
		});
	},
};
