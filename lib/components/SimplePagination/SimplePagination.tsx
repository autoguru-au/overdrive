import { ChevronLeftIcon, ChevronRightIcon } from '@autoguru/icons';
import * as React from 'react';
import { FunctionComponent } from 'react';

import { noop } from '../../utils';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Inline } from '../Inline/Inline';

export enum EChangeDirection {
	Previous = 'previous',
	Next = 'next',
}

type TOnChangeEventHandler = (event: EChangeDirection) => void;

export interface SimplePaginationProps {
	hasNext?: boolean;
	hasPrevious?: boolean;
	onChange?: TOnChangeEventHandler;
}

export const SimplePagination: FunctionComponent<SimplePaginationProps> = ({
	hasNext = false,
	hasPrevious = false,
	onChange = noop,
}) => {
	const handleClick = (direction: EChangeDirection) => () => {
		onChange(direction);
	};

	return (
		<Inline
			as="nav"
			space="6"
			aria-label="pagination"
			alignX="center"
			alignY="center"
		>
			<Button
				rounded
				withDoubleClicks
				size="small"
				variant="secondary"
				aria-label="previous page"
				onClick={handleClick(EChangeDirection.Previous)}
				isDisabled={!hasPrevious}
			>
				<Icon size="medium" icon={ChevronLeftIcon} />
			</Button>
			<Button
				rounded
				withDoubleClicks
				size="small"
				variant="secondary"
				aria-label="next page"
				onClick={handleClick(EChangeDirection.Next)}
				isDisabled={!hasNext}
			>
				<Icon size="medium" icon={ChevronRightIcon} />
			</Button>
		</Inline>
	);
};
