import clsx from 'clsx';
import React, { type ElementType, type ComponentPropsWithRef } from 'react';

import {
	sprinkles,
	type BoxSprinklesProps,
	type ShorthandBoxSprinklesProps,
} from './newbox.css';

type PolymorphicComponentProps<C extends ElementType, Props = object> = {
	as?: C;
} & Omit<ComponentPropsWithRef<C>, keyof Props | 'as'> &
	Props;

type BaseProps = {
	className?: string;
} & ShorthandBoxSprinklesProps;

export type NewBoxProps<C extends ElementType = 'div'> =
	PolymorphicComponentProps<C, BaseProps>;

/**
 * Typeguard function for all sprinkles props
 */
const isSprinklesProperty = (key: string): key is keyof BoxSprinklesProps => {
	return Boolean(sprinkles.properties[key]);
};

export const NewBox = <C extends ElementType = 'div'>({
	as,
	className,
	...props
}: NewBoxProps<C>) => {
	const Component = as || 'div';

	const { sprinklesProps, otherProps } = React.useMemo(() => {
		const sprinklesProps: BoxSprinklesProps = {};
		const otherProps: Record<string, unknown> = {};

		Object.entries(props).forEach(([key, value]) => {
			if (isSprinklesProperty(key)) {
				sprinklesProps[key as keyof BoxSprinklesProps] = value;
			} else {
				otherProps[key] = value;
			}
		});

		return { sprinklesProps, otherProps };
	}, [props]);

	return (
		<Component
			className={clsx(sprinkles(sprinklesProps), className)}
			{...otherProps}
		/>
	);
};

NewBox.displayName = 'NewBox';
