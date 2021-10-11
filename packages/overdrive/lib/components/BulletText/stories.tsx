import { CheckIcon } from '@autoguru/icons';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Icon } from '../Icon';

import { BulletText } from '.';


export default {
	title: 'Components/BulletText',
	component: BulletText,
};

const template = (args) => (
	<BulletText is='div' {...args} />
);

const primaryProps: ComponentProps<typeof BulletText> = {
	variant: 'primary',
	children: 'Hello World',
};
const secondaryProps: ComponentProps<typeof BulletText> = {
	variant: 'secondary',
	children: 'Hello World',
};

export const primary = template.bind(primaryProps);
export const secondary = template.bind(secondaryProps);
export const withCustomElement = () => (
	<BulletText
		bullet={
			<span
				style={{
					width: '20px',
					height: '20px',
					backgroundColor: ' #00dd95',
					color: 'white',
					borderRadius: '50%',
					flexDirection: 'row',
					display: 'flex',
					alignContent: 'center',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Icon size='small' icon={CheckIcon} />
			</span>
		}>
		Hello World
	</BulletText>
);


primary.args = primaryProps;
secondary.args = secondaryProps;
