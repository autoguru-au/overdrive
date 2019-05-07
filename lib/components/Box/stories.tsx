import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, EBoxVariant, IBoxProps } from '.';

const baseProps = (): IBoxProps => ({
	distance: select('Distance', [0, 1, 2, 3], 1),
	variant: select('Variant', EBoxVariant, EBoxVariant.default),
	borderColour: text('Border Colour', 'gray-300'), // TODO: This needs to be programmatic
	strokeWidth: select('Stroke Width', [1, 4], 1),
});

storiesOf('Components|Box', module).add('default', () => (
	<Box
		{...baseProps()}
		children={<div style={{ width: 150, height: 150 }} />}
	/>
));
