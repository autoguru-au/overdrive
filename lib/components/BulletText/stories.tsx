import { CheckIcon } from '@autoguru/icons';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Icon } from '../Icon';
import { BulletText, EBulletTextVariant } from '.';

const baseProps = () => ({
	variant: select('Variant', EBulletTextVariant, EBulletTextVariant.Primary),
	bullet: text('Bullet', '?'),
	ordered: boolean('ordered', false),
});

storiesOf('Components|BulletText', module)
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
						color: 'white',
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
