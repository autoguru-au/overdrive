import { storiesOf } from '@storybook/react';
import React from 'react';

import { Badge, EBadgeVariant } from '.';

storiesOf('Components|Badge', module)
	.add('default', () => <Badge label={'345 CREDITS'} />)
	.add('success', () => (
		<Badge variant={EBadgeVariant.Success} label={'ON PICK UP'} />
	))
	.add('warning', () => (
		<Badge variant={EBadgeVariant.Warning} label={'APPROVED'} />
	))
	.add('danger', () => (
		<Badge variant={EBadgeVariant.Danger} label={'CANCELLED'} />
	));
