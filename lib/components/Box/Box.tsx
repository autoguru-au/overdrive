import clsx from 'clsx';
import React, { type ElementType, type ComponentPropsWithRef } from 'react';

import {
	sprinkles,
	sprinklesResponsive,
	isSprinklesProperty,
	isSprinklesResponsiveProperty,
	type Sprinkles,
	type SprinklesResponsive,
} from '../../styles/sprinkles.css';

type StyleProps = Sprinkles & SprinklesResponsive;
type PolymorphicComponentProps<E extends ElementType, Props = object> = {
	as?: E;
	className?: clsx.ClassValue;
} & Omit<ComponentPropsWithRef<E>, keyof Props | 'as' | 'className'> &
	Props;

export type BoxProps<E extends ElementType = 'div'> = PolymorphicComponentProps<
	E,
	StyleProps
>;

export const Box = <E extends ElementType = 'div'>({
	as,
	className,
	...props
}: BoxProps<E>) => {
	const Component = as || 'div';

	const { sprinklesProps, sprinklesResponsiveProps, filteredProps } =
		React.useMemo(() => {
			return Object.entries(props).reduce(
				(acc, [key, value]) => {
					if (isSprinklesProperty(key)) {
						acc.sprinklesProps[key] = value;
					} else if (isSprinklesResponsiveProperty(key)) {
						//@ts-expect-error responsive sprinkles props are too complex to represent
						acc.sprinklesResponsiveProps[key] = value;
					} else {
						acc.filteredProps[key] = value;
					}
					return acc;
				},
				{
					sprinklesProps: {} as Sprinkles,
					sprinklesResponsiveProps: {} as SprinklesResponsive,
					filteredProps: {} as Exclude<
						ComponentPropsWithRef<E>,
						StyleProps
					>,
				},
			);
		}, [props]);

	return (
		<Component
			className={clsx(
				sprinkles(sprinklesProps),
				sprinklesResponsive(sprinklesResponsiveProps),
				className,
			)}
			{...filteredProps}
		/>
	);
};

Box.displayName = 'Box';
