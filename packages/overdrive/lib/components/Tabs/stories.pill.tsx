import { AlertIcon, OttoIcon } from '@autoguru/icons';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import * as React from 'react';
import { ComponentProps, useEffect, useState } from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { Inline } from '../Inline';
import { EAlignment } from '../Positioner/alignment';
import { Stack } from '../Stack';
import { StarRating } from '../StarRating';
import { Tooltip } from '../Tooltip';

import { Tabs, PillTab, PillTabList } from '.';

const TestChild = ({ label }) => {
	const [thing, sething] = useState(isChromatic() ? 0.5 : Math.random() * 5);

	useEffect(() => {
		const t = setInterval(() => {
			sething(isChromatic() ? 0.5 : Math.random() * 5);
		}, 1e3);

		return () => {
			clearInterval(t);
		};
	}, []);

	return <StarRating rating={thing} label={label} />;
};

export default {
	title: 'Components/Tabs/Pill',
	decorators: [
		(story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
		),
	],
	argTypes: {
		children: {
			control: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const pillTabProps: ComponentProps<typeof PillTab> = {
	active: 0,
	onChange: action('onChange'),
	children: (
		<>
			<PillTabList>
				<PillTab>Pill 1</PillTab>
				<PillTab>Pill 2</PillTab>
				<PillTab>Pill 3</PillTab>
				<PillTab>Pill 4</PillTab>
				<PillTab>Pill 5</PillTab>
			</PillTabList>
		</>
	),
};

export const pillTab = Template.bind(pillTabProps);
pillTab.args = pillTabProps;

const scrollableProps: ComponentProps<typeof pillTab> = {
	active: 0,
	onChange: action('onChange'),
	children: (
		<PillTabList scrollable>
			<PillTab>Hello</PillTab>
			<PillTab bubble={5}>Why isnt</PillTab>
			<PillTab>This a terribly</PillTab>
			<PillTab>Long</PillTab>
			<PillTab>Tab list</PillTab>
			<PillTab>Hello</PillTab>
			<PillTab>Why isnt</PillTab>
			<PillTab>This a terribly</PillTab>
			<PillTab>Long</PillTab>
			<PillTab>Tab list</PillTab>
			<PillTab>Hello</PillTab>
			<PillTab>Why isnt</PillTab>
			<PillTab>This a terribly</PillTab>
			<PillTab>Long</PillTab>
			<PillTab>Tab list</PillTab>
		</PillTabList>
	),
};
export const scrollable = Template.bind(scrollableProps);
scrollable.args = scrollableProps;
