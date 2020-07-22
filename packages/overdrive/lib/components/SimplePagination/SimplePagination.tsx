import { ChevronLeftIcon, ChevronRightIcon } from '@autoguru/icons';
import * as React from 'react';
import { memo, NamedExoticComponent } from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Inline } from '../Inline';

export enum EChangeDirection {
	Previous = 'previous',
	Next = 'next',
}

type TOnChangeEventHandler = (event: EChangeDirection) => void;

export interface Props {
	hasNext?: boolean;
	hasPrevious?: boolean;
	onChange?: TOnChangeEventHandler;
}

export const SimplePagination: NamedExoticComponent<Props> = memo(
	({
		hasNext = false,
		hasPrevious = false,
		onChange = () => undefined,
	}) => {
		const handleClick = (direction: EChangeDirection) => () => {
			onChange(direction);
		};

		return (
			<Inline is="nav" space='6' aria-label="pagination">
				<Button
					rounded
					disabled={!hasPrevious}
					size="small"
					variant="secondary"
					aria-label="previous page"
					onClick={handleClick(EChangeDirection.Previous)}>
					<Icon
						size="medium"
						icon={ChevronLeftIcon}
					/>
				</Button>
				<Button
					rounded
					disabled={!hasNext}
					size="small"
					variant="secondary"
					aria-label="next page"
					onClick={handleClick(EChangeDirection.Next)}>
					<Icon
						size="medium"
						icon={ChevronRightIcon}
					/>
				</Button>
			</Inline>
		);
	},
);
