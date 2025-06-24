import clsx from 'clsx';
import React, {
	createContext,
	type FunctionComponent,
	type OlHTMLAttributes,
	ReactNode,
	useContext,
} from 'react';

import { textStyles } from '../../styles/typography';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';

import * as styles from './OrderedList.css';

type ListStyleType = 'decimal' | 'lower-roman' | 'lower-alpha' | 'upper-alpha';

const cycles: ListStyleType[] = [
	'decimal',
	'lower-roman',
	'lower-alpha',
	'upper-alpha',
	'lower-roman',
];

export interface OrderedListProps
	extends Pick<OlHTMLAttributes<HTMLOListElement>, 'start'> {
	type?: ListStyleType;
	className?: string;
	children?: ReactNode;
}

export interface ItemProps {
	className?: string;
	children?: ReactNode;
}

const OrderedListContext = createContext(-1);

export const OrderedList: FunctionComponent<OrderedListProps> & {
	Item: FunctionComponent<ItemProps>;
} = ({ children, className, type = null, start }) => {
	const cycle = useContext(OrderedListContext);

	let myCycle: number;
	if (cycle + 1 > cycles.length) {
		myCycle = type === null ? 0 : cycles.indexOf(type);
	} else {
		myCycle = type === null ? cycle + 1 : cycles.indexOf(type);
	}

	return (
		<Box
			as="ol"
			paddingLeft="6"
			marginTop={myCycle > 0 ? '2' : 'none'}
			className={clsx(
				styles.root.default,
				textStyles({ colour: 'dark' }),
				{ [styles.root.firstOccurrence]: cycle === -1 },
				className,
			)}
			style={{ listStyleType: cycles[myCycle] }}
			start={start}
			odComponent="ordered-list"
		>
			<OrderedListContext.Provider value={myCycle}>
				<Stack space="2">{children}</Stack>
			</OrderedListContext.Provider>
		</Box>
	);
};

const Item: FunctionComponent<ItemProps> = ({ className, children }) => (
	<Box as="li" className={className}>
		{children}
	</Box>
);

OrderedList.Item = Item;
