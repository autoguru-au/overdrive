import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { ComponentProps, useRef } from 'react';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { EAlignment } from '../Positioner/alignment';
import { TextInput } from '../TextInput/TextInput';

import { Flyout } from './Flyout';

const meta = {
	title: 'Components/Flyout',
	component: Flyout,
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
	parameters: { chromatic: {} },
} satisfies Meta<typeof Flyout>;

export default meta;

type Story = StoryObj<typeof Flyout>;

const FlyoutContent = ({ args }: { args: ComponentProps<typeof Flyout> }) => {
	const triggerRef = useRef<HTMLButtonElement>(null);
	return (
		<Box
			style={{
				height: '100vh',
				width: '100vw',
				maxHeight: '350px',
			}}
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Button ref={triggerRef}>some trigger</Button>
			<Flyout {...args} triggerRef={triggerRef}>
				<div
					style={{
						display: 'grid',
						gridTemplateRows: 'repeat(2, auto)',
						gridGap: '16px',
						padding: '16px',
					}}
				>
					<TextInput name="example" placeholder="example" />
					<div>
						<Button size="small" variant="primary">
							Save
						</Button>
					</div>
				</div>
			</Flyout>
		</Box>
	);
};

export const Open: Story = {
	render: (args) => <FlyoutContent args={{ ...args, isOpen: true }} />,
	args: {
		alignment: EAlignment.BOTTOM_LEFT,
		isOpen: true,
		triggerOffset: 12,
	},
};

export const Closed: Story = {
	render: (args) => <FlyoutContent args={{ ...args, isOpen: false }} />,
	args: {
		alignment: EAlignment.BOTTOM_LEFT,
		isOpen: false,
		triggerOffset: 12,
	},
};
