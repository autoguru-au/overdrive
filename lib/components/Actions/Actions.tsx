import * as React from 'react';
import {
	Children,
	ComponentProps,
	FunctionComponent,
	ReactElement,
} from 'react';

import { Column, Columns } from '../Columns';

interface Props
	extends Partial<
		Pick<ComponentProps<typeof Columns>, 'noWrap' | 'wrappingDirection'>
	> {
	children: ReactElement | ReactElement[];
}

export const Actions: FunctionComponent<Props> = ({
	children,
	noWrap,
	wrappingDirection,
}) => (
	<Columns space="3" noWrap={noWrap} wrappingDirection={wrappingDirection}>
		{Children.map(children, (child, idx) =>
			child !== undefined && child !== null ? (
				<Column key={idx}>{child}</Column>
			) : null,
		)}
	</Columns>
);
