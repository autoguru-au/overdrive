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
import {
	EBreakpointLabels,
	getBreakpointMediaQuery,
	IBreakPoint,
	useMedia,
} from './breakpoint-utils';

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
			<div
				style={{
					height: '100%',
					flexDirection: 'row',
					boxSizing: 'border-box',
					display: 'flex',
					placeContent: 'center',
					alignItems: 'center',
				}}>
				<p
					style={{
						padding: '0 10px',
						textAlign: 'center',
						display: 'block',
						lineHeight: `${Math.abs(Math.sin(index / 2)) * 40 +
							30}px`,
						height: `${Math.abs(Math.sin(index / 2)) * 40 + 30}px`,
					}}>
					{label}
				</p>
			</div>
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

const MyResponsiveGrid = ({}) => {
	const breakpoints: Array<IBreakPoint> = [
		{
			label: EBreakpointLabels.Mobile,
			lower: 320,
			upper: 650,
		},
		{
			label: EBreakpointLabels.Desktop,
			lower: 651,
			upper: 1200,
		},
		{
			label: EBreakpointLabels.LargeDesktop,
			lower: 1201,
		},
	];

	const queries = breakpoints.map(breakpoint =>
		getBreakpointMediaQuery(breakpoint)
	);
	const values = ['100%', '30%', '10%'];
	const columnWidth = useMedia(
		// Media queries
		queries,
		// Column counts (relates to above media queries by array index)
		values,
		// Default column count
		values[0]
	);

	return (
		<Grid
			width="100%"
			height={null}
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
				EGridLayoutPerpendicularAlign.Center,
				'Grid'
			)}
			wrap={select('Wrap', EWrap, EWrap.Wrap, 'Grid')}
			padding={select('Padding', EGridSpace, EGridSpace.Space2, 'Grid')}
			gutter={select('Gutter', EGridSpace, EGridSpace.Space4, 'Grid')}>
			{getBoxes(120, columnWidth, false)}
		</Grid>
	);
};

storiesOf('Components|Grid', module)
	.addDecorator(decorate)
	.add('default', () => (
		<Grid
			width="100%"
			height={null}
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
	))
	.add('responsive', () => <MyResponsiveGrid />);

storiesOf('Components|Grid/Row', module)
	.addDecorator(decorate)
	.add('start | start', () => (
		<Grid
			width="100%"
			height={null}
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(60)}
		</Grid>
	))
	.add('center | start', () => (
		<Grid
			width="100%"
			height={null}
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Center}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(60)}
		</Grid>
	))
	.add('end | start', () => (
		<Grid
			width="100%"
			height={null}
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.End}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(60)}
		</Grid>
	))
	.add('space-between | start', () => (
		<Grid
			width="100%"
			height={null}
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.SpaceBetween}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(60)}
		</Grid>
	))
	.add('space-around | start', () => (
		<Grid
			width="100%"
			height={null}
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.SpaceAround}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(60)}
		</Grid>
	))
	.add('space-evenly | start', () => (
		<Grid
			width="100%"
			height={null}
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.SpaceEvenly}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(60)}
		</Grid>
	))
	.add('start | center', () => (
		<Grid
			width="100%"
			height={null}
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Center}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(60)}
		</Grid>
	))
	.add('start | end', () => (
		<Grid
			width="100%"
			height={null}
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.End}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(60)}
		</Grid>
	))
	.add('start | stretch', () => (
		<Grid
			width="100%"
			height={null}
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Stretch}
			wrap={EWrap.Wrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(60)}
		</Grid>
	))
	.add('nowrap', () => (
		<Grid
			width="100%"
			height={null}
			direction={EGridDirection.Row}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Center}
			wrap={EWrap.NoWrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(60)}
		</Grid>
	))
	.add('item align', () => {
		const boxes = getBoxes(60, '60px');

		return (
			<Grid
				width="100%"
				height={null}
				direction={EGridDirection.Row}
				layoutAlign={EGridLayoutAlign.Start}
				layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Start}
				wrap={EWrap.Wrap}
				padding={EGridSpace.Space2}
				gutter={EGridSpace.Space4}>
				{[
					...boxes.slice(0, 5),
					getBox(6, '60px', false, true, 'Align'),
					...boxes.slice(6, 60),
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
	.add('nowrap', () => (
		<Grid
			direction={EGridDirection.Column}
			layoutAlign={EGridLayoutAlign.Start}
			layoutPerpendicularAlign={EGridLayoutPerpendicularAlign.Center}
			wrap={EWrap.NoWrap}
			padding={EGridSpace.Space2}
			gutter={EGridSpace.Space4}>
			{getBoxes(40, '60px')}
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
