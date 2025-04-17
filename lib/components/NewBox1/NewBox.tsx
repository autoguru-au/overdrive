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
type PolymorphicComponentProps<C extends ElementType, Props = object> = {
	as?: C;
} & Omit<ComponentPropsWithRef<C>, keyof Props | 'as'> &
	Props;

export type NewBoxProps<C extends ElementType = 'div'> =
	PolymorphicComponentProps<C, StyleProps>;

export const NewBox = <C extends ElementType = 'div'>({
	as,
	className,
	...props
}: NewBoxProps<C>) => {
	const Component = as || 'div';

	const { sprinklesProps, sprinklesResponsiveProps, filteredProps } =
		React.useMemo(() => {
			return Object.entries(props).reduce(
				(acc, [key, value]) => {
					if (isSprinklesProperty(key)) {
						acc.sprinklesProps[key] = value;
					} else if (isSprinklesResponsiveProperty(key)) {
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
						ComponentPropsWithRef<C>,
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

NewBox.displayName = 'NewBox';
