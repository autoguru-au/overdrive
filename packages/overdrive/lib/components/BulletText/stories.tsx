import { CheckIcon } from '@autoguru/icons';
import { boolean, text } from '@storybook/addon-knobs';
import * as React from 'react';

import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { BulletText } from '.';

const baseProps = () => ({
	bullet: text('Bullet', '?'),
	ordered: boolean('ordered', false),
});

export default {
	title: 'Components/BulletText',
	component: BulletText,
};

export const standard = () => (
	<Stack is="ul" space="3">
		<BulletText is="div" variant="primary" {...baseProps()}>
			Hello World
		</BulletText>
		<BulletText is="div" variant="secondary" {...baseProps()}>
			Hello World
		</BulletText>
	</Stack>
);

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
				<Icon size="small" icon={CheckIcon} />
			</span>
		}>
		Hello World
	</BulletText>
);
