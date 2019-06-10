import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { BulletText, EBulletTextVariant } from '.';
import { CheckIcon } from '../../icons';
import { Icon } from '../Icon';

const baseProps = () => ({
	variant: select('Variant', EBulletTextVariant, EBulletTextVariant.Primary),
	bullet: text('Bullet'),
	ordered: boolean('ordered', false),
});

storiesOf('Foundation|Typography/BulletText', module)
	.addDecorator(story => <ul children={story()} style={{ width: 200 }} />)
	.add('default', () => <BulletText {...baseProps()}>Hello World</BulletText>)
	.add('with custom element', () => (
		<BulletText
			bullet={
				<span
					style={{
						width: '17px',
						height: '17px',
						backgroundColor: ' #00dd95',
						fill: 'white',
						borderRadius: '50%',
						flexDirection: 'row',
						display: 'flex',
						alignContent: 'center',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Icon size={14} icon={CheckIcon} />
				</span>
			}>
			Hello World
		</BulletText>
	));
