import {
	FlexDirectionProperty,
	FlexWrapProperty,
	HeightProperty,
	WidthProperty,
} from 'csstype';
import React from 'react';
import { EGridSpace, ELayoutAlign, ELayoutPerpendicularAlign } from './enums';

export interface IProps {
	className?: string;
	direction?: FlexDirectionProperty;
	wrap?: FlexWrapProperty;
	padding?: EGridSpace;
	gutter?: EGridSpace;
	layoutAlign?: ELayoutAlign;
	width?: WidthProperty<string>;
	height?: HeightProperty<string>;
	tagName?: string;
	layoutPerpendicularAlign?: ELayoutPerpendicularAlign;
}

export interface IGridContext {
	direction: FlexDirectionProperty;
	padding: EGridSpace;
	gutter: EGridSpace;
	fullGrid?: boolean;
	gutterSpace?: string;
}

export const GridContext = React.createContext<Partial<IGridContext>>({});

export const spaceVarPrefix = '--global--space--';
export const spaceSizeMap: Map<EGridSpace, string> = new Map([
	[EGridSpace.Space0, `${spaceVarPrefix}0`],
	[EGridSpace.Space1, `${spaceVarPrefix}1`],
	[EGridSpace.Space2, `${spaceVarPrefix}2`],
	[EGridSpace.Space3, `${spaceVarPrefix}3`],
	[EGridSpace.Space4, `${spaceVarPrefix}4`],
	[EGridSpace.Space5, `${spaceVarPrefix}5`],
	[EGridSpace.Space6, `${spaceVarPrefix}6`],
	[EGridSpace.Space7, `${spaceVarPrefix}7`],
	[EGridSpace.Space8, `${spaceVarPrefix}8`],
	[EGridSpace.Space9, `${spaceVarPrefix}9`],
]);

export const layoutAlignCssMap: Map<
	ELayoutAlign,
	{ [key: string]: string }
> = new Map([
	[ELayoutAlign.Start, { justifyContent: 'flex-start' }],
	[ELayoutAlign.Center, { justifyContent: 'center' }],
	[ELayoutAlign.End, { justifyContent: 'flex-end' }],
	[ELayoutAlign.SpaceAround, { justifyContent: 'space-around' }],
	[ELayoutAlign.SpaceBetween, { justifyContent: 'space-between' }],
	[ELayoutAlign.SpaceEvenly, { justifyContent: 'space-evenly' }],
]);

export const layoutPerpendicularAlignCssMap: Map<
	ELayoutPerpendicularAlign,
	{ [key: string]: string }
> = new Map([
	[
		ELayoutPerpendicularAlign.Start,
		{ alignContent: 'flex-start', alignItems: 'flex-start' },
	],
	[
		ELayoutPerpendicularAlign.Center,
		{ alignContent: 'center', alignItems: 'center' },
	],
	[
		ELayoutPerpendicularAlign.End,
		{ alignContent: 'flex-end', alignItems: 'flex-end' },
	],
	[
		ELayoutPerpendicularAlign.Stretch,
		{ alignContent: 'stretch', alignItems: 'stretch' },
	],
]);
