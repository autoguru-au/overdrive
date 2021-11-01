import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, createContext, forwardRef, useMemo } from 'react';

import { useNegativeMarginLeft, useNegativeMarginTop } from '../../hooks/useNegativeMargin/useNegativeMargin';
import { Box } from '../Box';

import * as styles from './Columns.css';
import { ResponsiveProp } from '../../utils/responsiveProps.css';
import { Tokens } from '../../themes/tokens';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';

export interface Props extends ComponentProps<typeof Box> {
	className?: string;
	columns?: number;
	space?: ResponsiveProp<keyof Tokens['space']>;
	spaceX?: ResponsiveProp<keyof typeof styles.space.spaceX>;
	spaceY?: ResponsiveProp<keyof typeof styles.space.spaceY>;
	noWrap?: boolean;
	wrappingDirection?: keyof typeof styles.wrapping;
	align?: keyof typeof styles.align;
}

interface ColumnContextValue {
	spaceXCls;
	spaceYCls;
	isList: boolean;
}

export const ColumnContext = createContext<ColumnContextValue | null>(null);

export const Columns = forwardRef<HTMLElement, Props>(
	(
		{
			className = '',
			children,
			space,
			spaceX,
			spaceY,
			noWrap,
			wrappingDirection = 'default',
			align = 'stretch',
			is,
			...boxProps
		},
		ref,
	) => {
		const resolvedSpaceX = spaceX || space || ['none'];
		const resolvedSpaceY = spaceY || space || ['none'];

		const marginLeftFix = useNegativeMarginLeft(resolvedSpaceX);
		const marginTopFix = useNegativeMarginTop(resolvedSpaceY);

		return (
			<Box
				ref={ref}
				is={is}
				display="flex"
				flexDirection="row"
				className={clsx(
					marginLeftFix,
					marginTopFix,
					styles.align[align],
					className,
					{
						[styles.wrapping.wrap]: !noWrap,
						[styles.wrapping.noWrap]: noWrap,
						[styles.wrapping.reverseWrap]:
							wrappingDirection === 'reverse',
					},
				)}
				{...boxProps}>
				<ColumnContext.Provider
					value={useMemo(
						() => ({
							spaceXCls: resolveResponsiveStyle(
								resolvedSpaceX,
								styles.space.spaceX,
							),
							spaceYCls: resolveResponsiveStyle(
								resolvedSpaceY,
								styles.space.spaceY,
							),
							isList:
								typeof is === 'string' &&
								['ul', 'ol'].includes(is),
						}),
						[resolvedSpaceX, resolvedSpaceY, styles],
					)}>
					{children}
				</ColumnContext.Provider>
			</Box>
		);
	},
);
