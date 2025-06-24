import React, { Children, type ComponentProps, type ReactElement } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Column } from '../Columns/Column';
import { Columns } from '../Columns/Columns';

export interface ActionsProps
	extends Partial<
		Pick<ComponentProps<typeof Columns>, 'noWrap' | 'wrappingDirection'>
	> {
	children: ReactElement | ReactElement[];
	className?: string;
}

export const Actions = ({
	children,
	noWrap,
	wrappingDirection,
}: ActionsProps) => (
	<Columns space="3" noWrap={noWrap} wrappingDirection={wrappingDirection}>
		{Children.map(flattenChildren(children), (child) => (
			<Column>{child}</Column>
		))}
	</Columns>
);

export default Actions;
