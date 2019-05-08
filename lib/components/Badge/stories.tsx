import { storiesOf } from '@storybook/react';
import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { Badge, EBadgeColour } from '.';

const badgeProps = () => ({
	invert: boolean('Invert', false),
	colour: select('Colour', EBadgeColour, EBadgeColour.Default),
});

storiesOf('Components|Badge', module)
	.add('default', () => <Badge label={'345 CREDITS'} {...badgeProps()} />)
	.add('success', () => (
		<Badge colour={EBadgeColour.Success} label={'ON PICK UP'} />
	))
	.add('success inverted', () => (
		<Badge
			colour={EBadgeColour.Success}
			invert={true}
			label={'ON PICK UP'}
		/>
	))
	.add('warning', () => (
		<Badge colour={EBadgeColour.Warning} label={'APPROVED'} />
	))
	.add('warning inverted', () => (
		<Badge colour={EBadgeColour.Warning} invert={true} label={'APPROVED'} />
	))
	.add('danger', () => (
		<Badge colour={EBadgeColour.Danger} label={'CANCELLED'} />
	))
	.add('danger inverted', () => (
		<Badge colour={EBadgeColour.Danger} invert={true} label={'CANCELLED'} />
	));
