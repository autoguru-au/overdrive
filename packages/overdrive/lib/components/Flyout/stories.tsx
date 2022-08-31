import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps, useRef } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { EAlignment } from '../Positioner/alignment';
import { TextInput } from '../TextInput';

import { Flyout } from '.';

export default {
	title: 'Components/Flyout',
	component: Flyout,
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
	parameters: { chromatic: { delay: 900 } },
} as ComponentMeta<typeof Flyout>;

const sharedProps: Omit<ComponentProps<typeof Flyout>, 'triggerRef'> = {
	alignment: EAlignment.BOTTOM_LEFT,
	isOpen: false,
	triggerOffset: 12,
};

const Template: ComponentStory<typeof Flyout> = ({ ...args }) => {
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

const openProps = { ...sharedProps, isOpen: true };
export const Open = Template.bind(openProps);
Open.args = openProps;

export const Closed = Template.bind(sharedProps);
Closed.args = sharedProps;
