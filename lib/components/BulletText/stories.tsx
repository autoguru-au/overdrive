import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { BulletText, EBulletTextVariant } from '.';

const baseProps = () => ({
	variant: select('Variant', EBulletTextVariant, EBulletTextVariant.Primary),
	bullet: text('Bullet'),
	ordered: boolean('ordered', false),
});

storiesOf('Components|Type/BulletText', module)
	.addDecorator(story => <ul style={{ width: 200 }} children={story()} />)
	.add('default', () => (
		<BulletText {...baseProps()}>Hello World</BulletText>
	));
