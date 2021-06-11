import { CalendarIcon } from '@autoguru/icons';
import * as React from 'react';

import { Meta } from '.';

export default {
	title: 'Components/Meta',
	component: Meta,
};

export const primary = () => (
	<Meta variant="primary" icon={CalendarIcon} label="Hello World" />
);
export const secondary = () => (
	<Meta variant="secondary" icon={CalendarIcon} label="Hello World" />
);
