import { Calendar } from '../../icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Icon } from './Icon';

storiesOf('Components|Icon', module).add('default', () => (
	<Icon size={25} icon={Calendar} fill={'green'} />
));
