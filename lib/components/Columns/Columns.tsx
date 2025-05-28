import clsx from 'clsx';
import * as React from 'react';
import {
	ComponentProps,
	createContext,
	forwardRef,
	ReactNode,
	useMemo,
} from 'react';

import {
	useNegativeMarginLeft,
	useNegativeMarginTop,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import type { ThemeTokens as Tokens } from '../../themes';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { ResponsiveProp } from '../../utils/responsiveProps.css';
import { Box } from '../Box/Box';

import * as styles from './Columns.css';

export interface Props
	extends Omit<ComponentProps<typeof Box>, 'css'>,
		styles.ColumnsStyle {
	className?: string;
	columns?: number;
	space?: ResponsiveProp<keyof Tokens['space']>;
	spaceX?: ResponsiveProp<keyof typeof styles.space.spaceX>;
	spaceY?: ResponsiveProp<keyof typeof styles.space.spaceY>;

	children?: ReactNode;
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
			className,
			children,
			space,
			spaceX,
			spaceY,
			noWrap,
			wrappingDirection = 'default',
			align = 'stretch',
			is,
			as = is,
			...boxProps
		},
		ref,
	) => {
		const resolvedSpaceX = useMemo(
			() => spaceX || space || ['none'],
			[space, spaceX],
		);
		const resolvedSpaceY = useMemo(
			() => spaceY || space || ['none'],
			[space, spaceY],
		);

		const marginLeftFix = useNegativeMarginLeft(resolvedSpaceX);
		const marginTopFix = useNegativeMarginTop(resolvedSpaceY);

		return (
			<Box
				ref={ref}
				as={as}
				display="flex"
				flexDirection="row"
				className={clsx(
					marginLeftFix,
					marginTopFix,
					styles.columnsStyle({ align, noWrap, wrappingDirection }),
					className,
				)}
				{...boxProps}
			>
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
								typeof as === 'string' &&
								['ul', 'ol'].includes(as),
						}),
						[as, resolvedSpaceX, resolvedSpaceY],
					)}
				>
					{children}
				</ColumnContext.Provider>
			</Box>
		);
	},
);

Columns.displayName = 'Columns';
