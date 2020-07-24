import clsx from 'clsx';
import * as React from 'react';
import {
	createContext,
	FunctionComponent,
	OlHTMLAttributes,
	ReactChild,
	useContext,
} from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { Stack } from '../Stack';
import { useTextStyles } from '../Text';
import * as styleRefs from './OrderedList.treat';

type ListStyleType = 'decimal' | 'lower-roman' | 'lower-alpha' | 'upper-alpha';

const cycles: ListStyleType[] = [
	'decimal',
	'lower-roman',
	'lower-alpha',
	'upper-alpha',
	'lower-roman',
];

export interface Props
	extends Pick<OlHTMLAttributes<HTMLOListElement>, 'start'> {
	type?: ListStyleType;
	className?: string;
	children?: ReactChild | ReactChild[];
}

export interface ItemProps {
	className?: string;
}

const OrderedListContext = createContext(-1);

export const OrderedList: FunctionComponent<Props> & {
	Item: FunctionComponent<ItemProps>;
} = ({ children, className = '', type = null, start }) => {
	const cycle = useContext(OrderedListContext);
	const styles = useStyles(styleRefs);

	let myCycle: number;
	if (cycle + 1 > cycles.length) {
		myCycle = type === null ? 0 : cycles.indexOf(type);
	} else {
		myCycle = type === null ? cycle + 1 : cycles.indexOf(type);
	}

	return (
		<Box
			is="ol"
			paddingLeft="6"
			marginTop={myCycle > 0 ? '2' : 'none'}
			className={clsx(
				styles.root.default,
				useTextStyles({ colour: 'dark' }),
				{ [styles.root.firstOccurrence]: cycle === -1 },
				className,
			)}
			style={{ listStyleType: cycles[myCycle] }}
			start={start}>
			<OrderedListContext.Provider value={myCycle}>
				<Stack space="2">{children}</Stack>
			</OrderedListContext.Provider>
		</Box>
	);
};

const Item: FunctionComponent<ItemProps> = ({ className = '', children }) => (
	<Box is="li" className={className}>
		{children}
	</Box>
);

OrderedList.Item = Item;
