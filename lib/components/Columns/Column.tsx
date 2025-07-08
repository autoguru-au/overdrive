import { invariant } from '@autoguru/utilities';
import React, { forwardRef, ReactNode, useContext } from 'react';

import { elementStyles } from '../../styles';
import { useBox, type UseBoxProps } from '../Box/useBox/useBox';

import * as styles from './Column.css';
import { ColumnContext } from './Columns';

export interface ColumnProps
	extends Omit<UseBoxProps, 'alignSelf' | 'width' | 'css'>,
		styles.ColumnRecipeVariants {
	width?: styles.SprinklesColumnWidth['flexBasis'];
	className?: string;
	children: ReactNode | ReactNode[];
}

export const Column = forwardRef<HTMLElement, ColumnProps>(
	(
		{
			className,
			children,
			width,
			alignSelf,
			as,
			noShrink = false,
			grow = false,
			order,

			...boxProps
		},
		ref,
	) => {
		const columnsContext = useContext(ColumnContext);
		invariant(
			columnsContext !== null,
			'Column must be wrapped inside a Columns element',
		);

		const { isList, spaceXCls, spaceYCls } = columnsContext;
		const { Component, componentProps } = useBox({
			as,
			className,

			display: 'flex',
			height: 'full',
			width: 'full',
		});
		const Wrapper = isList ? 'li' : 'div';
		const wrapperStyles = elementStyles({
			as: Wrapper,
			className: [
				spaceXCls,
				spaceYCls,
				styles.sprinklesColumnWidthResponsive({
					flexBasis: width,
				}),
				styles.columnStyle({ alignSelf, grow, noShrink }),
			],
			order,
		});

		return (
			<Wrapper className={wrapperStyles}>
				<Component {...boxProps} {...componentProps} ref={ref}>
					{children}
				</Component>
			</Wrapper>
		);
	},
);

Column.displayName = 'Column';
