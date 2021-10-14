import { CheckIcon } from '@autoguru/icons';
import { ArgTypes } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Icon } from '../Icon';

import { BulletText } from '.';

export default {
	title: 'Components/BulletText',
	component: BulletText,
};

const template = (args) => <BulletText is="div" {...args} />;

const argTypes: ArgTypes = {
	variant: {
		options: ['primary', 'secondary'],
		defaultValue: 'primary',
		control: {
			type: 'select',
		},
	},
	bullet: {
		table: {
			type: { summary: 'Any custom react element' },
			defaultValue: void 0,
		},
		description: 'Any custom react element',
		control: {
			disable: true,
		},
	},
	is: {
		table: {
			type: { summary: 'div' },
			defaultValue: 'div',
		},
		description: 'HTML dom tag to be used',
		control: {
			disable: true,
		},
	},
};

const primaryProps: ComponentProps<typeof BulletText> = {
	variant: 'primary',
	children: 'Hello World',
	bullet: void 0,
};
const secondaryProps: ComponentProps<typeof BulletText> = {
	variant: 'secondary',
	children: 'Hello World',
	bullet: void 0,
};
const withCustomBulletProps: ComponentProps<typeof BulletText> = {
	variant: 'primary',
	children: 'Hello World',
	bullet: (
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
			<Icon size="small" icon={CheckIcon} />
		</span>
	),
};

export const primary = template.bind(primaryProps);
export const secondary = template.bind(secondaryProps);
export const withCustomBullet = template.bind(withCustomBulletProps);

primary.args = primaryProps;
secondary.args = secondaryProps;
withCustomBullet.args = withCustomBulletProps;
primary.argTypes = argTypes;
secondary.argTypes = argTypes;
withCustomBullet.argTypes = argTypes;
