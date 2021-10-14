import * as React from 'react';
import { ComponentProps, useRef } from 'react';

import { Button } from '../Button';
import { EAlignment } from '../Positioner/alignment';
import { TextInput } from '../TextInput';

import { Flyout } from '.';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof Flyout>;

const sharedProps: ComponentProps<typeof Flyout> = {
	alignment: EAlignment.BOTTOM_LEFT,
	isOpen: false,
	triggerOffset: 12,
	onRequestClose: action('onRequestClose'),
};

const Template: ComponentStory<typeof Flyout> = ({
	onRequestClose,
	...args
}) => {
	const triggerRef = useRef<HTMLElement>(null);
	return (
		<Box
			style={{
				height: '100vh',
				widht: '100vw',
				maxHeight: '350px',
			}}
			display="flex"
			alignItems="center"
			justifyContent="center">
			<Button ref={triggerRef}>some trigger</Button>
			<Flyout
				{...args}
				triggerRef={triggerRef}
				onRequestClose={onRequestClose}>
				<div
					style={{
						display: 'grid',
						gridTemplateRows: 'repeat(2, auto)',
						gridGap: '16px',
						padding: '16px',
					}}>
					<TextInput name="example" placeholder="example" />
					<div>
						<Button
							size="small"
							variant="primary"
							onClick={onRequestClose}>
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
