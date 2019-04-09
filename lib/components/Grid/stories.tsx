import { storiesOf } from '@storybook/react';
import { select, text, number } from '@storybook/addon-knobs';
import React from 'react';
import {
	EGridLayoutAlign,
	EGridLayoutPerpendicularAlign,
	EGridSpace,
	Grid,
	GridItem,
} from './index';
import { Box } from '../Box';
import { Text } from '../Text';

export enum EGridDirection {
	Column = 'column',
	ColumnReverse = 'column-reverse',
	Row = 'row',
	RowReverse = 'row-reverse',
}

export enum EWrap {
	Wrap = 'wrap',
	NoWrap = 'nowrap',
}

storiesOf('Components|Grid', module)
	.addDecorator(story => (
		<div
			style={{
				maxWidth: '500px',
				width: '100%',
				height: '400px',
				backgroundColor: '#F5F5F5',
				overflowY: 'auto',
			}}>
			{story()}
		</div>
	))
	.add('Grid default', () => (
		<Grid
			direction={select(
				'Direction',
				EGridDirection,
				EGridDirection.Row,
				'Grid'
			)}
			layoutAlign={select(
				'Align',
				EGridLayoutAlign,
				EGridLayoutAlign.Center,
				'Grid'
			)}
			layoutPerpendicularAlign={select(
				'Perpendicular Align',
				EGridLayoutPerpendicularAlign,
				EGridLayoutPerpendicularAlign.Start,
				'Grid'
			)}
			wrap={select('Wrap', EWrap, EWrap.Wrap, 'Grid')}
			padding={select('Padding', EGridSpace, EGridSpace.Space2, 'Grid')}
			gutter={select('Gutter', EGridSpace, EGridSpace.Space4, 'Grid')}>
			{new Array(number('Boxes', 36, undefined, 'boxes'))
				.fill(0)
				.map((_, index) => (
					<GridItem
						key={index}
						basis={text('Basis', '10%', 'Grid Item')}
						shrink={select('Shrink', [0, 1], 0, 'Grid Item')}
						grow={select('Grow', [0, 1], 0, 'Grid Item')}>
						<Box distance={1}>
							<Text>
								<span
									style={{
										textAlign: 'center',
										display: 'block',
										lineHeight: `${Math.abs(
											Math.sin(index / 2)
										) *
											40 +
											30}px`,
										height: `${Math.abs(
											Math.sin(index / 2)
										) *
											40 +
											30}px`,
									}}>
									{index + 1}
								</span>
							</Text>
						</Box>
					</GridItem>
				))}
		</Grid>
	));
