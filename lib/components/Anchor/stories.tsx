import { PhoneIcon } from '@autoguru/icons';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Anchor } from '.';

const baseProps = () => ({
	label: text('Telephone number', '07 5612 5347'),
});

storiesOf('Foundation|Typography/Anchor', module)
	.add('Standard', () => <Anchor>07 5612 5347</Anchor>)
	.add('WithIcon', () => (
		<Anchor
			{...baseProps()}
			href="123"
			icon={<Icon icon={PhoneIcon} size={16} />}
		/>
	))
	.add(
		'WithButton',
		() => (
			<Anchor
				{...baseProps()}
				is={Button}
				to="./#eldorado"
				icon={<Icon icon={PhoneIcon} size={16} />}
			/>
		),
		{ chromatic: { disable: true } },
	);
