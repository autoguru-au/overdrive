import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import { LoadingBox } from '../LoadingBox';
import styles from './style.scss';
import { ESize as EHeadingSize } from './Heading';

export interface IProps {
	size?: EHeadingSize;
	className?: string;
	randomWidth?: boolean;
	blinking?: boolean;
}

const cssSizeMap: Map<EHeadingSize, string> = new Map([
	[EHeadingSize.Heading1, styles.loaderHeading1],
	[EHeadingSize.Heading2, styles.loaderHeading2],
	[EHeadingSize.Heading3, styles.loaderHeading3],
	[EHeadingSize.Heading4, styles.loaderHeading4],
	[EHeadingSize.Heading5, styles.loaderHeading5],
	[EHeadingSize.Heading6, styles.loaderHeading6],
]);

const HeadingLoaderComponent: FunctionComponent<IProps> = ({
	size = EHeadingSize.Heading1,
	randomWidth = false,
	blinking = true,
	className = '',
}) => (
	<LoadingBox
		blinking={blinking}
		className={cx([styles.root, cssSizeMap.get(size), className])}
		randomWidth={randomWidth}
	/>
);

export const HeadingLoader = memo(HeadingLoaderComponent);
