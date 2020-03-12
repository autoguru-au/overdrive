import { StarHalfIcon, StarIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import {
	FunctionComponent,
	memo,
	NamedExoticComponent,
	ReactElement,
} from 'react';
import { useStyles } from 'react-treat';
import { Theme } from 'treat/theme';

import { Column, Columns } from '../Columns';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import * as styleRefs from './StarRating.treat';

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

const starSizeMap: Map<EStarRatingSize, keyof Theme['icon']['size']> = new Map([
	[EStarRatingSize.Medium, 'medium'],
	[EStarRatingSize.Small, 'small'],
]);

const labelSizeMap: Map<
	EStarRatingSize,
	keyof Theme['typography']['size']
> = new Map([
	[EStarRatingSize.Small, '3'],
	[EStarRatingSize.Medium, '4'],
]);

interface Props {
	className?: string;
	rating: number;
	size?: EStarRatingSize;
	label?: string;
}

export const StarRating: NamedExoticComponent<Props> = memo(
	({
		className = '',
		rating,
		label = rating,
		size = EStarRatingSize.Medium,
	}) => {
		const styles = useStyles(styleRefs);

		return (
			<Columns className={clsx([styles.starList, className])} space="2">
				<Column className={styles.starList}>
					{new Array(totalStars).fill(0).map((_, index) => (
						<Star
							key={index}
							index={index}
							rating={rating}
							size={size}
						/>
					))}
				</Column>
				{label === null ? null : (
					<Column>
						<Text
							size={labelSizeMap.get(size)}
							className={styles.label}>
							{label}
						</Text>
					</Column>
				)}
			</Columns>
		);
	},
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

interface StarProps {
	index: number;
	rating: number;
	size: EStarRatingSize;
}

const Star: FunctionComponent<StarProps> = ({
	index,
	rating = 0,
	size = EStarRatingSize.Medium,
}): ReactElement => {
	const starType = getStarIconType(index, rating);
	const star = starType === EStarType.Half ? StarHalfIcon : StarIcon;
	const styles = useStyles(styleRefs);
	return (
		<Icon
			key={index}
			icon={star}
			size={starSizeMap.get(size)}
			className={clsx(styles.star.default, {
				[styles.star.empty]: starType === EStarType.Empty,
			})}
		/>
	);
};
