import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

import useWindowHeightFill, {
	UseWindowHeightFillProps,
} from '../../hooks/useWindowHeightFill/useWindowHeightFill';
import { ScrollPane } from '../ScrollPane/ScrollPane';

type FillHeightBoxProps = Omit<UseWindowHeightFillProps, 'containerRef'> &
	ComponentProps<typeof ScrollPane>;

export const FillHeightBox: FunctionComponent<FillHeightBoxProps> = ({
	includeMobile,
	bottomGap,
	serverVhFallback,
	observedElementRef,
	style,
	maxHeight,
	...scrollPaneProps
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const containerHeight = useWindowHeightFill({
		// @ts-expect-error containerRef can be null
		containerRef,
		includeMobile,
		observedElementRef,
		bottomGap,
		serverVhFallback,
		maxHeight,
	});

	return (
		<ScrollPane
			{...scrollPaneProps}
			ref={containerRef}
			style={{ ...style, maxHeight: containerHeight }}
		/>
	);
};
