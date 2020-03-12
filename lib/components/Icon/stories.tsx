import { CalendarIcon } from '@autoguru/icons';
import * as React from 'react';

import { Icon } from './Icon';

export default {
	title: 'Foundation|Icon',
	component: Icon,
	decorators: [],
};

export const standard = () => (
	<Icon size={['small', 'medium', 'large']} icon={CalendarIcon} />
);
