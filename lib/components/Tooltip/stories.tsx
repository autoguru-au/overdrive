import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { EPositionerAlignment } from '../Positioner';
import { Tooltip } from '.';

const alignmentPicker = () =>
	select('Alignment', EPositionerAlignment, EPositionerAlignment.RIGHT);

storiesOf('Components|Tooltip', module)
	.addParameters({ chromatic: { disable: true } })
	.add('standard', () => (
		<Tooltip alignment={alignmentPicker()} label="Im the tooltip body">
			<div>Im the tooltip trigger</div>
		</Tooltip>
	));
