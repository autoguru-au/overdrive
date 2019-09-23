import clsx from 'clsx';
import React, {
	createContext,
	FunctionComponent,
	OlHTMLAttributes,
	useContext,
} from 'react';

import styles from './OrderedList.scss';

type ListStyleType =
	| 'decimal'
	| 'lower-roman'
	| 'lower-alpha'
	| 'upper-alpha'
	| 'lower-roman';

const cycles: ListStyleType[] = [
	'decimal',
	'lower-roman',
	'lower-alpha',
	'upper-alpha',
	'lower-roman',
];

interface Props extends Pick<OlHTMLAttributes<HTMLOListElement>, 'start'> {
	type?: ListStyleType;
	className?: string;
}

interface ItemProps {
	className?: string;
}

const OrderedListContext = createContext(-1);

export const OrderedList: FunctionComponent<Props> & {
	Item: FunctionComponent<ItemProps>;
} = ({ children, className = '', type = null, start }) => {
	const cycle = useContext(OrderedListContext);
	const myCycle =
		type === null
			? cycle + 1 > cycles.length
				? 0
				: cycle + 1
			: cycles.indexOf(type);

	return (
		<ol
			className={clsx(
				styles.root,
				{ [styles.firstOccurrence]: cycle === -1 },
				className,
			)}
			style={{ listStyleType: cycles[myCycle] }}
			start={start}>
			<OrderedListContext.Provider value={myCycle}>
				{children}
			</OrderedListContext.Provider>
		</ol>
	);
};

OrderedList.Item = ({ className, children }) => {
	return <li className={clsx(styles.listItem, className)}>{children}</li>;
};
