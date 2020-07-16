import { CheckIcon } from '@autoguru/icons';
import { boolean, select, text } from '@storybook/addon-knobs';
import * as React from 'react';

import { Icon } from '../Icon';
import { BulletText } from '.';

const baseProps = () => ({
	variant: select('Variant', ['primary', 'secondary'], 'primary'),
	bullet: text('Bullet', '?'),
	ordered: boolean('ordered', false),
});

export default {
	title: 'Components|BulletText',
	component: BulletText,
};

export const standard = () => (
	<BulletText {...baseProps()}>Hello World</BulletText>
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
