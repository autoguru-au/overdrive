import { Phone } from '@autoguru/icons';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Anchor } from '.';
import { Button } from '../Button';
import { Icon } from '../Icon';

const phoneNumber = text('Telephone number', '07 5612 5347');
const baseProps = () => {
	return {
		label: phoneNumber,
	};
};

storiesOf('Components|Type/Anchor', module)
	.add('default', () => <Anchor {...baseProps()} />)
	.add('withIcon', () => (
		<Anchor
			{...baseProps()}
			href={`tel:${phoneNumber}}`}
			icon={<Icon icon={Phone} size={16} />}
		/>
	))
	.add('withButton', () => (
		<Anchor
			{...baseProps()}
			component={Button}
			to={'./#eldorado'}
			icon={<Icon icon={Phone} size={16} />}
		/>
	));
