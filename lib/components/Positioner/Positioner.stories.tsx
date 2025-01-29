import { Meta, StoryFn } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import * as React from 'react';
import { useRef } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';

import { EAlignment } from './alignment';

import { Positioner } from '.';

export default {
	title: 'Layout/Positioner',
	component: Positioner,
	parameters: { chromatic: {} },
	argTypes: {
		alignment: {
			options: EAlignment,
			defaultValue: EAlignment.BOTTOM_LEFT,
			control: {
				type: 'select',
			},
		},
		triggerOffset: {
			control: {
				type: 'range',
				min: 0,
				max: 400,
			},
		},
	},
} satisfies Meta<typeof Positioner>;

const Template: StoryFn<typeof Positioner> = (args) => {
	const triggerRef = useRef(null);

	return (
		<div>
			<Button ref={triggerRef} size="small">
				Open me
			</Button>
			<Positioner {...args} triggerRef={triggerRef}>
				<Box
					boxShadow={1}
					backgroundColour="white"
					borderRadius="1"
					borderWidth="1"
					borderColour="gray"
					padding="2"
				>
					<Text is="p">
						Hello im from the consumer:{' '}
						{isChromatic() ? '999' : Math.ceil(Math.random() * 100)}
					</Text>
				</Box>
			</Positioner>
		</div>
	);
};

const WithScrollTemplate: StoryFn<typeof Positioner> = (args) => {
	const triggerRef = useRef(null);

	return (
		<div
			style={{
				height: '100%',
				width: '100%',
			}}
		>
			<div
				style={{
					height: 'calc(100vh*5)',
					width: 'calc(100vw*5)',
				}}
			>
				<div
					style={{
						paddingTop: 'calc((100vh*5) / 2)',
						paddingLeft: 'calc((100vw*5) / 2)',
					}}
				>
					<Button ref={triggerRef} size="small">
						I'm the trigger
					</Button>
				</div>

				<Positioner {...args} triggerRef={triggerRef}>
					<Box
						boxShadow={1}
						backgroundColour="white"
						borderRadius="1"
						borderWidth="1"
						borderColour="gray"
						padding="2"
					>
						<Text is="p">
							Hello im from the consumer:{' '}
							{Math.ceil(Math.random() * 100)}
						</Text>
					</Box>
				</Positioner>
			</div>
		</div>
	);
};

const standardProps = {
	alignment: EAlignment.BOTTOM_LEFT,
	isOpen: false,
	triggerOffset: 12,
};

export const Closed: StoryFn<typeof Positioner> = Template.bind(standardProps);
Closed.args = standardProps;

const openProps = {
	...standardProps,
	isOpen: true,
};

export const Open: StoryFn<typeof Positioner> = Template.bind(openProps);
Open.args = openProps;

const illustrateAScrollProps = {
	...standardProps,
	isOpen: true,
};

export const IllustrateAScroll: StoryFn<typeof Positioner> =
	WithScrollTemplate.bind(illustrateAScrollProps);
IllustrateAScroll.args = openProps;
IllustrateAScroll.parameters = {
	chromatic: { disableSnapshot: true },
};
