import React, { FunctionComponent, ReactElement } from 'react';
import {
	EGridLayoutAlign,
	EGridLayoutPerpendicularAlign,
	EGridSpace,
	Grid,
	GridItem,
} from '../Grid';
import { EGridDirection, EWrap } from '../Grid/stories';
import styles from './style.scss';

export interface IProps {
	heading?: ReactElement | null;
	headingActions?: ReactElement | null;
}

export const TextContainer: FunctionComponent<IProps> = ({
	heading = null,
	headingActions = null,
	children,
}) => (
	<article className={styles.root}>
		{(!!heading || !!headingActions) && (
			<Grid
				width="100%"
				height={null}
				direction={EGridDirection.Row}
				layoutAlign={EGridLayoutAlign.Start}
				layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Center}
				wrap={EWrap.NoWrap}
				padding={EGridSpace.Space0}
				gutter={EGridSpace.Space4}
				Component="header">
				{!!heading && (
					<GridItem shrink={1} grow={1}>
						{heading}
					</GridItem>
				)}
				{!!headingActions && (
					<GridItem shrink={0} grow={0}>
						{headingActions}
					</GridItem>
				)}
			</Grid>
		)}
		{children}
	</article>
);
