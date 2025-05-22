import { Meta, StoryObj } from '@storybook/react-vite';
import isChromatic from 'chromatic/isChromatic';
import React, { useRef } from 'react';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

import { Positioner } from './Positioner';
import { EAlignment } from './alignment';

export default {
	title: 'Layout/Positioner',
	component: Positioner,
	parameters: { chromatic: {} },
	argTypes: {
		alignment: {
			options: Object.values(EAlignment),
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

type Story = StoryObj<typeof Positioner>;

export const Closed: Story = {
	args: {
		alignment: EAlignment.BOTTOM_LEFT,
		isOpen: false,
		triggerOffset: 12,
	},
	render: (args) => {
		const triggerRef = useRef(null);
		return (
			<div>
				<Button ref={triggerRef} size="small">
					Open me
				</Button>
				<Positioner {...args} triggerRef={triggerRef}>
					<Box
						boxShadow="1"
						backgroundColour="white"
						borderRadius="1"
						borderWidth="1"
						borderColour="gray"
						padding="2"
					>
						<Text is="p">
							Hello im from the consumer:{' '}
							{isChromatic()
								? '999'
								: Math.ceil(Math.random() * 100)}
						</Text>
					</Box>
				</Positioner>
			</div>
		);
	},
};

export const Open: Story = {
	args: {
		alignment: EAlignment.BOTTOM_LEFT,
		isOpen: true,
		triggerOffset: 12,
	},
	render: (args) => {
		const triggerRef = useRef(null);
		return (
			<div>
				<Button ref={triggerRef} size="small">
					Open me
				</Button>
				<Positioner {...args} triggerRef={triggerRef}>
					<Box
						boxShadow="1"
						backgroundColour="white"
						borderRadius="1"
						borderWidth="1"
						borderColour="gray"
						padding="2"
					>
						<Text is="p">
							Hello im from the consumer:{' '}
							{isChromatic()
								? '999'
								: Math.ceil(Math.random() * 100)}
						</Text>
					</Box>
				</Positioner>
			</div>
		);
	},
};

export const IllustrateAScroll: Story = {
	args: {
		alignment: EAlignment.BOTTOM_LEFT,
		isOpen: true,
		triggerOffset: 12,
	},
	render: (args) => {
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
							I&apos;m the trigger
						</Button>
					</div>
					<Positioner {...args} triggerRef={triggerRef}>
						<Box
							boxShadow="1"
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
	},
	parameters: {
		chromatic: { disableSnapshot: true },
	},
};
