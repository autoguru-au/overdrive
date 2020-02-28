import { CalendarIcon } from '@autoguru/icons';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Icon } from '../Icon';
import { EMetaVariant, Meta } from '.';

storiesOf('Components|Meta', module).add('Standard', () => (
	<Meta
		variant={select('Variant', EMetaVariant, EMetaVariant.Primary)}
		icon={<Icon size={16} icon={CalendarIcon} />}
		label="Hello World"
	/>
));
