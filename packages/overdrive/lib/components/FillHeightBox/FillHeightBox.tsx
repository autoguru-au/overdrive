import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

import useWindowHeightFill, {
	UseWindowHeightFillProps,
} from '../../hooks/useWindowHeightFill/useWindowHeightFill';
import { ScrollPane } from '../ScrollPane';

type Props = Omit<UseWindowHeightFillProps, 'containerRef'> &
	ComponentProps<typeof ScrollPane>;

export const FillHeightBox: FunctionComponent<Props> = ({
	includeMobile,
	bottomGap,
	serverVhFallback,
	observedElementRef,
	style,
	...scrollPaneProps
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const containerHeight = useWindowHeightFill({
		containerRef,
		includeMobile,
		observedElementRef,
		bottomGap,
		serverVhFallback,
	});

	return (
		<ScrollPane
			{...scrollPaneProps}
			ref={containerRef}
			style={{ ...style, maxHeight: containerHeight }}
		/>
	);
};
