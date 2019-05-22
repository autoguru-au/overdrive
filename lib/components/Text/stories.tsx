import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { ETextVariant, Text } from '.';

const baseProps = () => ({
	variant: select('Variant', { Nothing: null, ...ETextVariant }, null),
	muted: boolean('Muted', false),
});

storiesOf('Components|Type/Text', module).add('default', () => (
	<Text {...baseProps()}>Hello World</Text>
));
