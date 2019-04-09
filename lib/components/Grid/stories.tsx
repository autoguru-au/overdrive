import { storiesOf } from '@storybook/react';
import { select, text, number } from '@storybook/addon-knobs';
import React from 'react';
import {
	EGridItemAlignSelf,
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

const decorate = story => (
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
);

const getBox = (
	index,
	basis,
	addKnobs = false,
	hasAlignToggle = false,
	label?,
	width?,
	height?
) => (
	<GridItem
		key={index}
		width={width}
		height={height}
		basis={addKnobs ? text('Basis', basis, 'Grid Item') : basis}
		align={
			hasAlignToggle
				? select(
						'Align self',
						EGridItemAlignSelf,
						EGridItemAlignSelf.Auto,
						'Grid Item'
				  )
				: EGridItemAlignSelf.Auto
		}
		shrink={addKnobs ? select('Shrink', [0, 1], 0, 'Grid Item') : 0}
		grow={addKnobs ? select('Grow', [0, 1], 0, 'Grid Item') : 0}>
		<Box distance={1}>
			<Text>
				<span
					style={{
						padding: '0 10px',
						textAlign: 'center',
						display: 'block',
						lineHeight: `${Math.abs(Math.sin(index / 2)) * 40 +
							30}px`,
						height: `${Math.abs(Math.sin(index / 2)) * 40 + 30}px`,
					}}>
					{label}
				</span>
			</Text>
		</Box>
	</GridItem>
);

const getBoxes = (
	boxesNum: number,
	basis = '120px',
	addKnobs = false,
	width?,
	height?
) =>
	new Array(boxesNum)
		.fill(0)
		.map((_, index) =>
			getBox(index, basis, addKnobs, false, index + 1, width, height)
		);

storiesOf('Components|Grid', module)
	.addDecorator(decorate)
	.add('default', () => (
		<Grid
			width="100%"
			height="100%"
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
			{getBoxes(number('Boxes', 36, undefined, 'boxes'), '100px', true)}
		</Grid>
	));

storiesOf('Components|Grid/Row', module)
	.addDecorator(decorate)
	.add('start | start', () => (
		<Grid
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(20)}
		</Grid>
	))
	.add('center | start', () => (
		<Grid
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Center}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(20)}
		</Grid>
	))
	.add('end | start', () => (
		<Grid
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.End}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(20)}
		</Grid>
	))
	.add('space-between | start', () => (
		<Grid
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.SpaceBetween}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(20)}
		</Grid>
	))
	.add('space-around | start', () => (
		<Grid
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.SpaceAround}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(20)}
		</Grid>
	))
	.add('space-evenly | start', () => (
		<Grid
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.SpaceEvenly}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(20)}
		</Grid>
	))
	.add('start | center', () => (
		<Grid
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Center}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(20)}
		</Grid>
	))
	.add('start | end', () => (
		<Grid
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.End}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(20)}
		</Grid>
	))
	.add('start | stretch', () => (
		<Grid
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Stretch}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(20)}
		</Grid>
	))
	.add('item align', () => {
		const boxes = getBoxes(20, '60px');

		return (
			<Grid
				direction={EGridDirection.Row}
				layoutAlign={EGridLayoutAlign.Start}
				layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
				wrap={EWrap.Wrap}
				padding={EGridSpace.Space2}
				gutter={EGridSpace.Space4}>
				{[
					...boxes.slice(0, 5),
					getBox(6, '60px', false, true, 'Align'),
					...boxes.slice(6, 19),
				]}
			</Grid>
		);
	});

storiesOf('Components|Grid/Column', module)
	.addDecorator(decorate)
	.add('start | start', () => (
		<Grid
			direction={EGridDirection.Column}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(4, '60px')}
		</Grid>
	))
	.add('center | start', () => (
		<Grid
			direction={EGridDirection.Column}
			layoutAlign={EGridLayoutAlign.Center}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(4, '60px')}
		</Grid>
	))
	.add('end | start', () => (
		<Grid
			direction={EGridDirection.Column}
			layoutAlign={EGridLayoutAlign.End}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(4, '60px')}
		</Grid>
	))
	.add('space-between | start', () => (
		<Grid
			direction={EGridDirection.Column}
			layoutAlign={EGridLayoutAlign.SpaceBetween}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(4, '60px')}
		</Grid>
	))
	.add('space-around | start', () => (
		<Grid
			direction={EGridDirection.Column}
			layoutAlign={EGridLayoutAlign.SpaceAround}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(4, '60px')}
		</Grid>
	))
	.add('space-evenly | start', () => (
		<Grid
			direction={EGridDirection.Column}
			layoutAlign={EGridLayoutAlign.SpaceEvenly}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(4, '60px')}
		</Grid>
	))
	.add('start | center', () => (
		<Grid
			direction={EGridDirection.Column}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Center}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(4, '60px')}
		</Grid>
	))
	.add('start | end', () => (
		<Grid
			direction={EGridDirection.Column}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.End}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(4, '60px')}
		</Grid>
	))
	.add('start | stretch', () => (
		<Grid
			direction={EGridDirection.Column}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Stretch}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(4, '60px')}
		</Grid>
	))
	.add('item align', () => {
		const boxes = getBoxes(80, '100px', false, '100px');

		return (
			<Grid
				width="800px"
				direction={EGridDirection.Column}
				layoutAlign={EGridLayoutAlign.SpaceBetween}
				layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
				wrap={EWrap.Wrap}
				padding={EGridSpace.Space2}
				gutter={EGridSpace.Space4}>
				{[
					...boxes.slice(0, 7),
					getBox(8, '60px', false, true, 'Align'),
					...boxes.slice(9, 79),
				]}
			</Grid>
		);
	});
