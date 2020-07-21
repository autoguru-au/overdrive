import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, createContext, forwardRef, useMemo } from 'react';
import { useStyles } from 'react-treat';
import { ClassRef } from 'treat';
import type { Theme } from 'treat/theme';

import {
	useNegativeMarginLeft,
	useNegativeMarginTop,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import { resolveResponsiveStyle, ResponsiveProp } from '../../utils';
import { Box } from '../Box';
import * as styleRefs from './Columns.treat';

export interface Props extends ComponentProps<typeof Box> {
	className?: string;
	columns?: number;
	space?: ResponsiveProp<keyof Theme['space']>;
	spaceX?: ResponsiveProp<keyof typeof styleRefs.space.spaceX>;
	spaceY?: ResponsiveProp<keyof typeof styleRefs.space.spaceY>;
	noWrap?: boolean;
	wrappingDirection?: keyof typeof styleRefs.wrapping;
	align?: keyof typeof styleRefs.align;
}

interface ColumnContextValue {
	spaceXCls?: ClassRef;
	spaceYCls?: ClassRef;
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

		const styles = useStyles(styleRefs);

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
