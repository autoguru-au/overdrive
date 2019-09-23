import clsx from 'clsx';
import React, {
	createContext,
	FunctionComponent,
	OlHTMLAttributes,
	useContext,
} from 'react';

import styles from './OrderedList.scss';

const cycles: Array<OlHTMLAttributes<HTMLOListElement>['type']> = [
	'1',
	'i',
	'a',
	'A',
	'I',
];

interface Props
	extends Pick<OlHTMLAttributes<HTMLOListElement>, 'type' | 'start'> {
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
			className={clsx(styles.root, className)}
			type={cycles[myCycle]}
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
