import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { EMetaVariant, Meta } from '.';
import { CalendarIcon } from '@autoguru/icons';
import { Icon } from '../Icon';

storiesOf('Components|Meta', module).add('default', () => (
	<Meta
		variant={select('Variant', EMetaVariant, EMetaVariant.Primary)}
		icon={<Icon size={16} icon={CalendarIcon} />}
		label="Hello World"
	/>
));
