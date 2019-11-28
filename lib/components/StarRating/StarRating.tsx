import { StarHalfIcon, StarIcon } from '@autoguru/icons';
import clsx from 'clsx';
import React, { FunctionComponent, memo, ReactElement } from 'react';

import { Icon } from '../Icon';
import { Text } from '../Typography';
import { TSizeScale } from '../Typography/types';
import styles from './style.scss';

const totalStars = 5;

export enum EStarRatingSize {
	Medium = 'medium',
	Small = 'small',
}

enum EStarType {
	Full,
	Half,
	Empty,
}

const starSizeMap: Map<EStarRatingSize, number> = new Map([
	[EStarRatingSize.Medium, 20],
	[EStarRatingSize.Small, 16],
]);

const labelSizeMap: Map<EStarRatingSize, TSizeScale> = new Map([
	[EStarRatingSize.Small, 3],
	[EStarRatingSize.Medium, 4],
]);

const starCssMap: Map<EStarType, string> = new Map([
	[EStarType.Full, styles.fullStar],
	[EStarType.Half, styles.halfStar],
	[EStarType.Empty, styles.emptyStar],
]);

export interface Props {
	className?: string;
	rating: number;
	size?: EStarRatingSize;
	label?: string;
}

const StarRatingComponent: FunctionComponent<Props> = ({
	className = '',
	rating,
	label = rating,
	size = EStarRatingSize.Medium,
}) => (
	<span className={clsx([styles.root, className])}>
		<span className={styles.starList}>
			{new Array(totalStars)
				.fill(0)
				.map((_, index) => getStar(index, rating, size))}
		</span>
		{label !== null && (
			<Text size={labelSizeMap.get(size)} className={styles.label}>
				{label}
			</Text>
		)}
	</span>
);

const getStarIconType = (index: number, rating: number): EStarType => {
	if (index + 1 <= Math.floor(rating)) {
		// Is definitely full star
		return EStarType.Full;
	}

	if (index + 1 > Math.ceil(rating)) {
		// Is definitely empty star
		return EStarType.Empty;
	}

	const decimalPart = Math.round((rating - index) * 1e1);

	if (decimalPart <= 2) {
		return EStarType.Empty;
	}

	if (decimalPart >= 8) {
		return EStarType.Full;
	}

	return EStarType.Half;
};

const getStar = (
	index: number,
	rating = 0,
	size: EStarRatingSize = EStarRatingSize.Medium,
): ReactElement => {
	const starType = getStarIconType(index, rating);
	const star = starType === EStarType.Half ? StarHalfIcon : StarIcon;

	return (
		<Icon
			key={index}
			icon={star}
			size={starSizeMap.get(size)}
			className={clsx([styles.star, starCssMap.get(starType)])}
		/>
	);
};

export const StarRating = memo(StarRatingComponent);
