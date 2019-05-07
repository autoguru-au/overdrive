import { storiesOf } from '@storybook/react';
import React from 'react';

import { Badge, EBadgeColour } from '.';

storiesOf('Components|Badge', module)
	.add('default', () => <Badge label={'345 CREDITS'} />)
	.add('success', () => (
		<Badge colour={EBadgeColour.Success} label={'ON PICK UP'} />
	))
	.add('warning', () => (
		<Badge colour={EBadgeColour.Warning} label={'APPROVED'} />
	))
	.add('danger', () => (
		<Badge colour={EBadgeColour.Danger} label={'CANCELLED'} />
	));
