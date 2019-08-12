import { storiesOf } from '@storybook/react';
import React from 'react';
import { CalendarIcon } from '.';
import { Icon } from './Icon';

storiesOf('Foundation|Icon', module)
	.addParameters({ chromatic: { disable: true } })
	.add('default', () => <Icon size={25} icon={CalendarIcon} />);
