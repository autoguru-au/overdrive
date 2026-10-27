import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import React, { type FunctionComponent } from 'react';

import { typography } from '../../../styles/typography';
import { dataAttrs } from '../../../utils/dataAttrs';

import * as styles from './Chart.css';
import type { ChartSeries } from './types';

export interface ChartSwatchProps {
	/** The series colour. */
	color: string;
	/**
	 * `medium` (12px) for the legend, `small` (8px) for the tooltip.
	 * @default 'medium'
	 */
	size?: styles.SwatchVariants['size'];
}

/** The colour dot of a series. It is decorative: the label next to it gives the name. */
export const ChartSwatch: FunctionComponent<ChartSwatchProps> = ({
	color,
	size,
}) => (
	<span
		aria-hidden
		className={styles.swatch({ size })}
		style={assignInlineVars({ [styles.swatchColor]: color })}
	/>
);

ChartSwatch.displayName = 'ChartSwatch';

export interface ChartLegendItem extends ChartSeries {
	/** Text after the label, for example the value and the share of a slice. */
	detail?: string;
}

export interface ChartLegendProps {
	/** The legend items, in the order of the series. */
	items: ChartLegendItem[];
	/** `horizontal` for the column chart, `vertical` for the donut chart. */
	layout: NonNullable<styles.LegendVariants['layout']>;
	/** The key of the active item. The swatches of the other items dim. */
	activeKey?: string;
}

export const ChartLegend: FunctionComponent<ChartLegendProps> = ({
	items,
	layout,
	activeKey,
}) => (
	<ul className={styles.legend({ layout })}>
		{items.map((item) => (
			<li
				key={item.key}
				className={clsx(
					styles.legendItem,
					typography(
						layout === 'horizontal'
							? { size: '2', color: 'secondary' }
							: { size: '3', color: 'primary' },
					),
				)}
				{...dataAttrs({
					dimmed: activeKey !== undefined && activeKey !== item.key,
				})}
			>
				<ChartSwatch color={item.color} />
				<span>
					{item.label}
					{item.detail ? ` ${item.detail}` : null}
				</span>
			</li>
		))}
	</ul>
);

ChartLegend.displayName = 'ChartLegend';
