import { select } from '@storybook/addon-knobs';
import * as React from 'react';

import { EAlignment } from '../Positioner/alignment';
import { Tooltip } from '.';

export default {
	title: 'Components/Tooltip',
	decorators: [
		(Story) => (
			<div style={{ marginLeft: 100, marginTop: 100 }}>
				<Story />
			</div>
		),
	],
	parameters: { chromatic: { disable: true } },
};

const alignmentPicker = () =>
	select('Alignment', EAlignment, EAlignment.BOTTOM);

export const Standard = () => (
	<Tooltip alignment={alignmentPicker()} label="Im the tooltip body">
		<div style={{ display: 'inline' }}>Im the tooltip trigger</div>
	</Tooltip>
);

export const TooltipSideBySide = () => (
	<>
		<Tooltip alignment={alignmentPicker()} label="Im the tooltip body">
			<div style={{ display: 'inline-block' }}>
				Im the tooltip trigger
			</div>
		</Tooltip>
		<Tooltip alignment={alignmentPicker()} label="Im the tooltip body">
			<div style={{ display: 'inline-block' }}>
				Im the tooltip trigger
			</div>
		</Tooltip>
		<Tooltip alignment={alignmentPicker()} label="Im the tooltip body">
			<div style={{ display: 'inline-block' }}>
				Im the tooltip trigger
			</div>
		</Tooltip>
	</>
);
