import React, { FunctionComponent } from 'react';
import { IProps } from './grid-utils';
import { FullGrid } from './FullGrid';
import { LightGrid } from './LightGrid';

export const Grid: FunctionComponent<IProps> = ({ wrap = 'nowrap', ...rest }) =>
	wrap !== 'wrap' ? (
		<LightGrid wrap={wrap} {...rest} />
	) : (
		<FullGrid wrap={wrap} {...rest} />
	);
