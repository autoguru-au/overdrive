import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import React from 'react';
import { Grid } from './Grid';
import { EGridDirection } from './index';
import { Box } from '../Box';
import { Text } from '../Text';
import { GridItem } from './GridItem';
import { EGridSpace, EWrap } from './enums';

storiesOf('Layout|Grid', module).add('Grid default', () => (
	<Grid
		direction={select('Direction', EGridDirection, EGridDirection.Row)}
		wrap={select('Wrap', EWrap, EWrap.Wrap)}
		padding={select('Padding', EGridSpace, EGridSpace.Space0)}
		gutter={select('Gutter', EGridSpace, EGridSpace.Space0)}>
		{new Array(24).fill(0).map((_, index) => (
			<GridItem key={index}>
				<Box distance={2}>
					<Text>Box {index + 1}</Text>
				</Box>
			</GridItem>
		))}
	</Grid>
));
