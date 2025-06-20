import { StarHalfIcon, StarIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, memo, NamedExoticComponent } from 'react';

import { sprinkles } from '../../styles';
import { ThemeTokens as Tokens } from '../../themes';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';

import * as styles from './StarRating.css';

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

const starSizeMap: Map<EStarRatingSize, keyof Tokens['icon']['size']> = new Map(
	[
		[EStarRatingSize.Medium, 'medium'],
		[EStarRatingSize.Small, 'small'],
	],
);

const labelSizeMap: Map<EStarRatingSize, keyof Tokens['typography']['size']> =
	new Map([
		[EStarRatingSize.Small, '3'],
		[EStarRatingSize.Medium, '4'],
	]);

export interface StarRatingProps {
	className?: string; // TODO: Remove this in the future
	rating: number;
	size?: EStarRatingSize;
	label?: string;
}

export const StarRating: NamedExoticComponent<StarRatingProps> = memo(
	({
		className = '',
		rating,
		label = rating,
		size = EStarRatingSize.Medium,
	}) => (
		<Box className={className} odComponent="star-rating">
			<Inline space="4" alignY="center">
				<Inline space="none" alignY="center">
					{Array.from({ length: totalStars })
						.fill(0)
						.map((_, index) => (
							<Star
								key={index}
								index={index}
								rating={rating}
								size={size}
							/>
						))}
				</Inline>
				{label === null ? null : (
					<Text
						size={labelSizeMap.get(size)}
						testId="star-rating-label"
					>
						{label}
					</Text>
				)}
			</Inline>
		</Box>
	),
);

StarRating.displayName = 'StarRating';

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

interface StarProps {
	index: number;
	rating: number;
	size: EStarRatingSize;
}

const Star: FunctionComponent<StarProps> = ({
	index,
	rating = 0,
	size = EStarRatingSize.Medium,
}) => {
	const starType = getStarIconType(index, rating);
	const star = starType === EStarType.Half ? StarHalfIcon : StarIcon;
	return (
		<Icon
			key={index}
			icon={star}
			size={starSizeMap.get(size)}
			className={clsx(
				sprinkles({ position: 'relative' }),
				styles.star.default,
				{
					[styles.star.empty]: starType === EStarType.Empty,
				},
			)}
		/>
	);
};
