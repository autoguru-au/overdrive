import { ChevronLeftIcon, ChevronRightIcon } from '@autoguru/icons';
import * as React from 'react';
import { FunctionComponent } from 'react';

import { noop } from '../../utils';
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

export const SimplePagination: FunctionComponent<Props> =
	({ hasNext = false, hasPrevious = false, onChange = noop }) => {
		const handleClick = (direction: EChangeDirection) => () => {
			onChange(direction);
		};

		return (
			<Inline
				is='nav'
				space='6'
				aria-label='pagination'
				alignX="center"
				alignY="center">
				<Button
					rounded
					disabled={!hasPrevious}
					size="small"
					variant="secondary"
					aria-label="previous page"
					onClick={handleClick(EChangeDirection.Previous)}>
					<Icon size="medium" icon={ChevronLeftIcon} />
				</Button>
				<Button
					rounded
					disabled={!hasNext}
					size='small'
					variant='secondary'
					aria-label='next page'
					onClick={handleClick(EChangeDirection.Next)}>
					<Icon size='medium' icon={ChevronRightIcon} />
				</Button>
			</Inline>
		);
	};
