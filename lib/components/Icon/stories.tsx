import { storiesOf } from '@storybook/react';
import React from 'react';
import { CalendarIcon } from '.';
import { Icon } from './Icon';

storiesOf('Foundation|Icon', module).add('default', () => (
	<Icon size={25} icon={CalendarIcon} fill="green" />
));
