import React, { useEffect } from 'react';

import { isBrowser } from '../../utils';
import {
	ThemeProvider,
	type ThemeProviderProps,
} from '../ThemeProvider/ThemeProvider';

export interface OverdriveProviderProps extends ThemeProviderProps {
	/**
	 * When set to true theme className must be present in a parent dom element of your components including portals.
	 * OD Portal component automatically adds theme class to the mounting node
	 */
	noBodyLevelTheming?: boolean;
	children?: React.ReactNode;
}

export const OverdriveProvider = ({
	noBodyLevelTheming = false,
	children,
	...props
}: OverdriveProviderProps) => {
	useEffect(() => {
		if (
			!isBrowser ||
			noBodyLevelTheming ||
			document.body.classList.contains(props.themeClass)
		)
			return;

		// Body has theme class applied to it, so we use css vars to apply body styles
		document.body.classList.add(props.themeClass);

		// Cleanup function to remove the class when component unmounts
		return () => {
			document.body.classList.remove(props.themeClass);
		};
	}, [noBodyLevelTheming, props.themeClass]);

	return <ThemeProvider {...props}>{children}</ThemeProvider>;
};

export default OverdriveProvider;
