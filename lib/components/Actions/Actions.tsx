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
	className?: string;
	children: ReactElement | ReactElement[];
}

// TODO: Has the potential to break on fragments
export const Actions: FunctionComponent<Props> = ({
	className,
	children,
	noWrap,
	wrappingDirection,
}) => (
	<Columns
		space="3"
		noWrap={noWrap}
		wrappingDirection={wrappingDirection}
		className={className}>
		{Children.map(children, (child, idx) => (
			<Column key={idx}>{child}</Column>
		))}
	</Columns>
);
