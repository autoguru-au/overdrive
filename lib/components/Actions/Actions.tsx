import * as React from 'react';
import {
	Children,
	ComponentProps,
	FunctionComponent,
	ReactElement,
} from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Column, Columns } from '../Columns';

export interface Props
	extends Partial<
		Pick<ComponentProps<typeof Columns>, 'noWrap' | 'wrappingDirection'>
	> {
	children: ReactElement | ReactElement[];
	className?: string;
}

export const Actions: FunctionComponent<Props> = ({
	children,
	noWrap,
	wrappingDirection,
}) => (
	<Columns space="3" noWrap={noWrap} wrappingDirection={wrappingDirection}>
		{Children.map(flattenChildren(children), (child) => (
			<Column>{child}</Column>
		))}
	</Columns>
);

export default Actions;
