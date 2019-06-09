import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge, EBadgeColour } from '.';

const badgeProps = () => ({
	invert: boolean('Invert', false),
	colour: select('Colour', EBadgeColour, EBadgeColour.Default),
});

storiesOf('Components|Badge', module)
	.add('default', () => <Badge label="345 CREDITS" {...badgeProps()} />)
	.add('success', () => (
		<Badge colour={EBadgeColour.Success} label="ON PICK UP" />
	))
	.add('success inverted', () => (
		<Badge invert colour={EBadgeColour.Success} label="ON PICK UP" />
	))
	.add('warning', () => (
		<Badge colour={EBadgeColour.Warning} label="APPROVED" />
	))
	.add('warning inverted', () => (
		<Badge invert colour={EBadgeColour.Warning} label="APPROVED" />
	))
	.add('danger', () => (
		<Badge colour={EBadgeColour.Danger} label="CANCELLED" />
	))
	.add('danger inverted', () => (
		<Badge invert colour={EBadgeColour.Danger} label="CANCELLED" />
	));
