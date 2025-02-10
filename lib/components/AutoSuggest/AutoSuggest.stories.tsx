import {
	AccountEditIcon,
	AlertCircleIcon,
	CalendarIcon,
	CarIcon,
	CarMultipleIcon,
	CheckIcon,
	CurrencyUsdIcon,
	MagnifyIcon,
	PlusIcon,
	StarIcon,
} from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React, { type ComponentProps } from 'react';

import { Box } from '../Box';
import { DateInput } from '../DateInput';
import { Stack } from '../Stack';
import { Text } from '../Text';

import { AutoSuggest } from '.';

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

const iconOptions = {
	MagnifyIcon,
	CarIcon,
	CarMultipleIcon,
	CalendarIcon,
	AccountEditIcon,
	AlertCircleIcon,
	CurrencyUsdIcon,
	PlusIcon,
	StarIcon,
	CheckIcon,
};

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

const meta = {
	title: 'Forms & Input Fields/Auto Suggest',
	component: AutoSuggest,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 900, margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		value: {
			options: {
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
			options: attachOptions,
			control: {
				type: 'select',
			},
		},
		fieldIcon: {
			defaultValue: void 0,
			description: 'Input field Icon',
			options: iconOptions,
			control: {
				type: 'select',
			},
		},
		prefixIcon: {
			defaultValue: void 0,
			description: 'Input prefix Icon',
			options: iconOptions,
			control: {
				type: 'select',
			},
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
	render: (args) => (
		<Stack space="5">
			<Box paddingTop="8">
				<AutoSuggest {...args} />
			</Box>
			<Text is="p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
				convallis neque a laoreet maximus. Vestibulum hendrerit quam at
				mi venenatis faucibus at vel nisi. In ut risus et ipsum
				tincidunt tempor. Suspendisse potenti. Praesent faucibus posuere
				risus, at congue mauris porttitor ut. Donec sit amet elit vitae
				purus dictum aliquet quis ut ligula. Orci varius natoque
				penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Vestibulum dui sapien, porttitor ac erat vel, malesuada
				rutrum mauris. Nam arcu tellus, pretium ut aliquet eget,
				ultrices vel est. Maecenas dapibus volutpat eros a volutpat.
			</Text>
			<Text is="p">
				Sed ante dui, sagittis sit amet tortor nec, egestas tincidunt
				mauris. Phasellus sed felis arcu. Etiam sit amet pharetra risus,
				a posuere magna. Pellentesque finibus arcu vitae orci luctus
				sagittis. Proin porta metus ut dapibus pharetra. Sed interdum mi
				et tristique aliquam. Curabitur finibus at dolor eu fermentum.
				Cras diam mauris, malesuada quis lacinia eu, porttitor at
				lectus. Duis pellentesque ante eget efficitur lacinia. Vivamus
				ornare venenatis tortor euismod imperdiet.
			</Text>
			<Text is="p">
				Nulla condimentum iaculis nisi, quis lobortis ligula. Nulla
				tempus semper velit, id ullamcorper orci molestie vel. Sed
				maximus nisi ac risus malesuada, quis varius purus interdum.
				Donec volutpat dolor in euismod hendrerit. Integer posuere
				tortor sit amet turpis viverra euismod. Mauris scelerisque ex
				diam, eget sodales erat accumsan vel. Etiam interdum odio a
				tortor fermentum, molestie interdum tellus bibendum. Vivamus
				vitae pulvinar ante. Aenean convallis aliquam velit congue
				ultricies. Aenean vel blandit erat. Mauris quis auctor nibh.
				Morbi dui ipsum, lobortis non nisi vitae, convallis pulvinar
				nunc.
			</Text>
			<Text is="p">
				Morbi mollis massa in eros tempus, ut venenatis ligula posuere.
				Nam ut ante lectus. Integer congue risus arcu, et ornare odio
				hendrerit eu. Mauris arcu ligula, interdum vitae consectetur
				vitae, volutpat a elit. Nulla luctus faucibus ipsum vitae
				maximus. Quisque in est nec libero commodo egestas. Donec
				faucibus, felis eget euismod facilisis, urna tortor molestie ex,
				eu eleifend leo tellus vel ligula. Mauris et urna massa. Integer
				ultrices massa commodo eleifend facilisis. Vestibulum dapibus
				magna cursus metus pellentesque tempor. Donec blandit elementum
				feugiat. Sed nec congue est.
			</Text>
			<Text is="p">
				Nulla quam magna, aliquet et odio non, porta condimentum tellus.
				Maecenas fringilla sodales erat eu facilisis. Nunc rutrum purus
				quis diam tempus laoreet. Fusce gravida arcu et lectus ultricies
				suscipit. Quisque sagittis tempus diam, malesuada posuere lorem
				sagittis et. Duis eget eros nibh. Aenean at augue tincidunt nunc
				consequat porta.
			</Text>
			<Text is="p">
				Nunc ac congue lacus, ac vulputate lectus. Suspendisse vel
				malesuada tellus. In nec fringilla elit. Cras vitae metus et leo
				convallis consectetur. Cras quis congue sapien, vitae aliquet
				ante. Integer sed lorem pretium, vestibulum arcu eu, imperdiet
				mauris. Nam blandit pharetra feugiat. Maecenas eget ante metus.
				Vivamus pretium ipsum justo, a faucibus ex dictum non.
				Vestibulum et dui diam.
			</Text>
		</Stack>
	),
} satisfies Meta<typeof AutoSuggest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
	args: {
		value: null,
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
		prefixIcon: void 0,
		onReset: () => action('onReset')(),
		onChange: (thing) => action('onChange')(thing),
		onEnter: (thing) => action('onEnter')(thing),
		onFocus: (thing) => action('onFocus')(thing),
		onBlur: (thing) => action('onBlur')(thing),
	},
};

export const WithValue: Story = {
	args: {
		...Standard.args,
		value: mockSuggestions[3],
	},
};

export const WithIcon: Story = {
	args: {
		...WithValue.args,
		prefixIcon: CarIcon,
	},
};

export const Disabled: Story = {
	args: {
		...WithIcon.args,
		disabled: true,
	},
};

export const Valid: Story = {
	args: {
		...WithIcon.args,
		hintText: 'Choose a sports car make',
		value: mockSuggestions[8],
		isTouched: true,
		isValid: true,
	},
};

export const Invalid: Story = {
	args: {
		...Valid.args,
		value: mockSuggestions[3],
		isValid: false,
	},
};

export const Small: Story = {
	args: {
		...Standard.args,
		size: 'small',
	},
};
