import { wrapEvent } from '@autoguru/utilities';
import cx from 'clsx';
import React, {
	FunctionComponent,
	memo,
	useContext,
	useRef,
} from 'react';
import { ChevronDownIcon, Icon } from '../Icon';
import styles from './style.scss';
import { ExpandableContext, IExpandableContext } from './Expandable';

export interface IProps {
	className?: string;
	id?: string;
	open?: boolean;
	title: JSX.Element;
	body?: JSX.Element;

	onClick?(e: React.MouseEvent<HTMLElement, MouseEvent>): void;

	onChange?(open: boolean): void;
}

const expandableClicked = (id, expandableClicked: (id: string) => void) => {
	expandableClicked(id);
};

const ExpandableItemComponent: FunctionComponent<IProps> = ({
	className = '',
	id,
	open = false,
	title,
	body,
	onClick,
	onChange = () => void 0,
}) => {
	console.log('__________________REDDRAW');
	const expandableContext: IExpandableContext = useContext(ExpandableContext);
	const map =
		expandableContext && expandableContext.openedItemsMap
			? expandableContext.openedItemsMap[id]
			: null;
	const isOpen = expandableContext ? map && map.open : open;
	const hasTopGap = map && map.topGap;
	const hasBottomGap = map && map.bottomGap;

	const prevOpen = useRef<boolean>(isOpen);

	if (prevOpen.current !== isOpen) {
		prevOpen.current = isOpen;
		onChange(isOpen);
	}

	return (
		<article
			className={cx(
				styles.expandableItem,
				{
					[styles.open]: isOpen,
					[styles.topGap]: hasTopGap,
					[styles.bottomGap]: hasBottomGap,
				},
				className
			)}
			aria-label="expandable item"
			aria-expanded={isOpen ? 'true' : 'false'}>
			<header
				aria-label="expandable item header"
				className={styles.title}
				onClick={wrapEvent(
					() =>
						expandableContext &&
						typeof expandableContext.expandableClicked ===
							'function' &&
						expandableClicked(
							id,
							expandableContext.expandableClicked
						),
					onClick
				)}>
				<Icon
					className={styles.arrow}
					size={16}
					icon={ChevronDownIcon}
				/>
				{title}
			</header>
			{isOpen && body && (
				<section
					aria-label="expandable item body"
					className={styles.body}>
					{body}
				</section>
			)}
		</article>
	);
};

export const ExpandableItem = memo(ExpandableItemComponent);
