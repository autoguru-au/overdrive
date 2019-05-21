import { warning } from '@autoguru/utilities';
import cx from 'clsx';
import React, { FunctionComponent, memo, ReactElement } from 'react';
import { StarHalfIcon, StarIcon } from '../../icons';
import { DetailText, EDetailTextSize } from '../DetailText';
import { Icon } from '../Icon';
import styles from './style.scss';

const totalStars = 5;

export enum ESize {
	Medium = 'medium',
	Small = 'small',
}

enum EStarType {
	Full,
	Half,
	Empty,
}

const starSizeMap: Map<ESize, number> = new Map([
	[ESize.Medium, 20],
	[ESize.Small, 16],
]);

const labelSizeMap: Map<ESize, EDetailTextSize> = new Map([
	[ESize.Small, EDetailTextSize.Detail3],
	[ESize.Medium, EDetailTextSize.Detail2],
]);

const starCssMap: Map<EStarType, string> = new Map([
	[EStarType.Full, styles.fullStar],
	[EStarType.Half, styles.halfStar],
	[EStarType.Empty, styles.emptyStar],
]);

export interface IProps {
	className?: string;
	ratingValue?: number; // @deprecated
	rating: number;
	size?: ESize;
	label?: string;
}

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
	rating: number = 0,
	size: ESize
): ReactElement => {
	const starType = getStarIconType(index, rating);
	const star: () => JSX.Element =
		starType === EStarType.Half ? StarHalfIcon : StarIcon;

	return (
		<Icon
			icon={star}
			size={starSizeMap.get(size)}
			key={index}
			className={cx([styles.star, starCssMap.get(starType)])}
		/>
	);
};

const StarRatingComponent: FunctionComponent<IProps> = ({
	className = '',
	rating,
	ratingValue = void 0,
	label = rating || ratingValue,
	size = ESize.Medium,
}) => {
	// @deprecated block
	{
		warning(
			ratingValue !== void 0,
			'The `ratingValue` prop is deprecated, please use the `rating` prop'
		);

		if (ratingValue !== void 0) {
			rating = ratingValue;
		}
	}

	return (
		<span className={cx([styles.root, className])}>
			<span className={styles.starList}>
				{new Array(totalStars)
					.fill(0)
					.map((_, index) => getStar(index, rating, size))}
			</span>
			<DetailText size={labelSizeMap.get(size)} className={styles.label}>
				{label}
			</DetailText>
		</span>
	);
};

export const StarRating = memo(StarRatingComponent);
