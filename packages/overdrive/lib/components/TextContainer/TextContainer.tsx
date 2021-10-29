import * as React from 'react';
import { FunctionComponent, ReactElement } from 'react';

import { Column, Columns } from '../Columns';
import { Stack } from '../Stack';

export interface Props {
	heading?: ReactElement;
	action?: ReactElement;
	className?: string;
	children: ReactElement | ReactElement[];
}

export const TextContainer: FunctionComponent<Props> = ({
	heading,
	className = '',
	children,
	action,
}) => (
	<Stack space="2" is="article" className={className}>
		<TextContainerHeading heading={heading} action={action} />
		{children}
	</Stack>
);

const TextContainerHeading: FunctionComponent<
	Omit<Props, 'className' | 'children'>
> = ({ heading, action }) => (
	<Columns noWrap align="centre" space="4">
		<Column grow>{heading!}</Column>
		{action ? <Column width="auto">{action!}</Column> : null}
	</Columns>
);
