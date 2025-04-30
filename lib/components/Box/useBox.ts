import type { ClassValue } from 'clsx';
import type { ComponentPropsWithRef, ElementType } from 'react';

import { useDeepCompareMemo } from '../../hooks';
import type {
	Sprinkles,
	SprinklesResponsive,
	SprinklesLegacyColours,
} from '../../styles/sprinkles.css';
import { filterNonSprinklesProps } from '../../utils/sprinkles';

import { boxStyles } from './boxStyles';

export type StyleProps = Sprinkles &
	SprinklesResponsive &
	SprinklesLegacyColours;

export type PolymorphicBoxProps<E extends ElementType, Props = object> = {
	as?: E;
	className?: ClassValue;
} & Omit<ComponentPropsWithRef<E>, keyof Props | 'as' | 'className'> &
	Props;

export type UseBoxProps<E extends ElementType = 'div'> = PolymorphicBoxProps<
	E,
	StyleProps
>;

export const useBox = <E extends ElementType = 'div'>({
	as,
	className,
	...props
}: UseBoxProps<E>) => {
	const Component = as ?? 'div';

	const style = useDeepCompareMemo(
		() =>
			boxStyles({
				as, // boxStyles uses the 'as' prop to determine css resets based on tag name
				className,
				...props,
			}),
		[className, props],
	);

	const remainingProps = useDeepCompareMemo(
		() => filterNonSprinklesProps(props),
		[props],
	);

	return {
		Component,
		componentProps: {
			className: style,
			...remainingProps,
		},
	};
};
