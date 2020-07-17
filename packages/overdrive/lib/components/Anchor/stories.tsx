import { PhoneIcon } from '@autoguru/icons';
import * as React from 'react';
import { Anchor } from '.';

import { Button } from '../Button';

export default {
	title: 'Foundation|Typography/Anchor',
	component: Anchor,
	decorators: [],
};

export const standard = () => <Anchor>07 5612 5347</Anchor>;

export const withIcon = () => (
	<Anchor href="123" icon={PhoneIcon}>
		07 5612 5347
	</Anchor>
);

export const withButton = () => (
	<Anchor is={Button} to="./#eldorado" icon={PhoneIcon}>
		07 5612 5347
	</Anchor>
);
