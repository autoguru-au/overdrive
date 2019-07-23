import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Text } from '../Typography';
import { Expandable } from './Expandable';
import { ExpandableItem } from './ExpandableItem';

storiesOf('Components|Expandable', module)
	.addDecorator(story => (
		<div
			style={{
				height: '100%',
				width: '100%',
				backgroundColor: 'white',
				flexDirection: 'row',
				boxSizing: 'border-box',
				display: 'flex',
				placeContent: 'center',
				alignItems: 'center',
			}}>
			<div
				style={{
					maxWidth: '300px',
					width: '100%',
					backgroundColor: 'white',
				}}>
				{story()}
			</div>
		</div>
	))
	.add('default list', () => (
		<Expandable multi={boolean('multi', false)}>
			{new Array(5).fill(0).map((_, index) => (
				<ExpandableItem
					key={index}
					className={`i${index + 1}`}
					title={
						<div style={{ paddingLeft: '24px' }}>
							<Text>Item {index + 1}</Text>
						</div>
					}
					body={<Text>Body {index + 1}</Text>}
				/>
			))}
		</Expandable>
	))
	.add('default solo item', () => (
		<ExpandableItem
			open={boolean('open', false)}
			title={
				<div style={{ paddingLeft: '24px' }}>
					<Text>Solo Item</Text>
				</div>
			}
			body={<Text>Solo Item Body</Text>}
			onClick={action('onClick')}
		/>
	))
	.add('with all items closed', () => (
		<Expandable multi>
			{new Array(5).fill(0).map((_, index) => (
				<ExpandableItem
					key={Math.round(Math.random() * 1e6)}
					open={false}
					title={
						<div style={{ paddingLeft: '24px' }}>
							<Text>Item {index + 1}</Text>
						</div>
					}
					body={<Text>Body {index + 1}</Text>}
				/>
			))}
		</Expandable>
	))
	.add('multi list with all items set to expanded', () => (
		<Expandable multi>
			{new Array(5).fill(0).map((_, index) => (
				<ExpandableItem
					key={Math.round(Math.random() * 1e6)}
					open
					title={
						<div style={{ paddingLeft: '24px' }}>
							<Text>Item {index + 1}</Text>
						</div>
					}
					body={<Text>Body {index + 1}</Text>}
				/>
			))}
		</Expandable>
	))
	.add('none-multi list with all items set to expanded', () => (
		<Expandable multi={false}>
			{new Array(5).fill(0).map((_, index) => (
				<ExpandableItem
					key={Math.round(Math.random() * 1e6)}
					open
					title={
						<div style={{ paddingLeft: '24px' }}>
							<Text>Item {index + 1}</Text>
						</div>
					}
					body={<Text>Body {index + 1}</Text>}
				/>
			))}
		</Expandable>
	));
