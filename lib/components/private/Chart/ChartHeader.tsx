import React, { type FunctionComponent } from 'react';

import type { HeadingTags } from '../../../styles/typography';
import { Box } from '../../Box/Box';
import { Heading } from '../../Heading/Heading';
import { Text } from '../../Text/Text';

export interface ChartHeaderProps {
	/** The chart title. */
	title: string;
	/** Text under the title, for example the period of the data. */
	description?: string;
	/** The heading element of the title. */
	titleAs: HeadingTags;
}

/**
 * The header of a chart: the title and an optional description, as in the
 * Figma card (H4 title, p2 description).
 */
export const ChartHeader: FunctionComponent<ChartHeaderProps> = ({
	title,
	description,
	titleAs,
}) => {
	const heading = (
		<Heading as={titleAs} color="primary" size="h4">
			{title}
		</Heading>
	);

	return description ? (
		<Box display="flex" flexDirection="column" gap="1">
			{heading}
			<Text as="p" color="secondary" size="p2">
				{description}
			</Text>
		</Box>
	) : (
		heading
	);
};

ChartHeader.displayName = 'ChartHeader';
