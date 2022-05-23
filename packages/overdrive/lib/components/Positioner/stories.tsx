import { ComponentMeta, ComponentStory } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import * as React from 'react';
import { useRef } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';

import { EAlignment } from './alignment';

import { Positioner } from '.';

export default {
	title: 'Utility/Positioner',
	component: Positioner,
	parameters: { chromatic: { delay: 900 } },
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
} as ComponentMeta<typeof Positioner>;

const Template: ComponentStory<typeof Positioner> = (args) => {
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
					padding="2">
					<Text is="p">
						Hello im from the consumer:{' '}
						{isChromatic() ? '999' : Math.ceil(Math.random() * 100)}
					</Text>
				</Box>
			</Positioner>
		</div>
	);
};

const WithScrollTemplate: ComponentStory<typeof Positioner> = (args) => {
	const triggerRef = useRef(null);

	return (
		<div
			style={{
				height: '100%',
				width: '100%',
			}}>
			<div
				style={{
					height: 'calc(100vh*5)',
					width: 'calc(100vw*5)',
				}}>
				<div
					style={{
						paddingTop: 'calc((100vh*5) / 2)',
						paddingLeft: 'calc((100vw*5) / 2)',
					}}>
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
						padding="2">
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

export const closed: ComponentStory<typeof Positioner> = Template.bind(
	standardProps,
);
closed.args = standardProps;

const openProps = {
	...standardProps,
	isOpen: true,
};

export const open: ComponentStory<typeof Positioner> = Template.bind(openProps);
open.args = openProps;

const illustrateAScrollProps = {
	...standardProps,
	isOpen: true,
};

export const illustrateAScroll: ComponentStory<
	typeof Positioner
> = WithScrollTemplate.bind(illustrateAScrollProps);
illustrateAScroll.args = openProps;
illustrateAScroll.parameters = {
	chromatic: { disableSnapshot: true },
};
