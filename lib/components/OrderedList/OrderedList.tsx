import React, {
	createContext,
	type FunctionComponent,
	type OlHTMLAttributes,
	ReactNode,
	useContext,
} from 'react';

import { textStyles } from '../../styles/typography';
import { useBox } from '../Box/useBox/useBox';
import { stack } from '../Flex/flex';

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

	const { Component, componentProps } = useBox({
		as: 'ol',
		className: [
			styles.root.default,
			stack({ gap: '2' }),
			textStyles({ colour: 'dark' }),
			{ [styles.root.firstOccurrence]: cycle === -1 },
			className,
		],
		marginTop: myCycle > 0 ? '2' : 'none',
		paddingLeft: '6',
		odComponent: 'ordered-list',
		start,
		style: { listStyleType: cycles[myCycle] },
	});

	return (
		<Component {...componentProps}>
			<OrderedListContext.Provider value={myCycle}>
				{children}
			</OrderedListContext.Provider>
		</Component>
	);
};

const Item: FunctionComponent<ItemProps> = ({ className, children }) => (
	<li className={className}>{children}</li>
);

OrderedList.Item = Item;
