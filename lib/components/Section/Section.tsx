import React, { cloneElement, type FunctionComponent } from 'react';

import { SprinklesResponsive } from '../../styles/sprinkles.css';
import { useBox, type UseBoxProps } from '../Box';

import * as styles from './Section.css';

export interface SectionProps {
	width?: SprinklesResponsive['maxWidth'];
}

export const Section: FunctionComponent<UseBoxProps & SectionProps> = ({
	children,
	width: maxWidth = 'medium',
	...props
}) => {
	const { Component, componentProps, reactElement } = useBox({
		className: styles.root,
		maxWidth: maxWidth as SprinklesResponsive['maxWidth'],
		width: 'full',
		...props,
	});

	if (reactElement) {
		return cloneElement(reactElement, componentProps, children);
	}

	return <Component {...componentProps}>{children}</Component>;
};
