import cx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import { LoadingBox } from '../LoadingBox';
import styles from './style.scss';
import { ESize as EDetailTextSize } from './DetailText';

export interface IProps {
	size?: EDetailTextSize;
	className?: string;
	randomWidth?: boolean;
	blinking?: boolean;
}

const cssSizeMap: Map<EDetailTextSize, string> = new Map([
	[EDetailTextSize.Detail1, styles.loadingDetail1],
	[EDetailTextSize.Detail2, styles.loadingDetail2],
	[EDetailTextSize.Detail3, styles.loadingDetail3],
]);

const DetailTextLoaderComponent: FunctionComponent<IProps> = ({
	size = EDetailTextSize.Detail1,
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

export const DetailTextLoader = memo(DetailTextLoaderComponent);
