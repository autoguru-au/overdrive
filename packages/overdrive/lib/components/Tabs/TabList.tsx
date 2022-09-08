import { ArrowLeftIcon, ArrowRightIcon } from '@autoguru/icons';
import { invariant } from '@autoguru/utilities';
import type { FunctionComponent } from 'react';
import * as React from 'react';
import {
	Children,
	createContext,
	isValidElement,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { animate, ownerWindow, useEventCallback } from '../../utils';
import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { useTextStyles } from '../Text';

import * as styles from './TabList.css';

export interface Props {
	stretch?: boolean;
	scrollable?: boolean;
	children?: ReactNode;
}

export const TabListContext = createContext<number | null>(null);

export const TabList: FunctionComponent<Props> = ({
	children,
	stretch = false,
	scrollable = false,
}) => {
	invariant(
		!(stretch && scrollable),
		'Tabs: `stretch={true}` and `scrollable={true}` cannot be used at the same time.',
	);

	const wrapperRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);

	const tabs = Children.map(flattenChildren(children), (child, index) => {
		if (!isValidElement(child)) return null;

		return (
			<TabListContext.Provider value={index}>
				{child}
			</TabListContext.Provider>
		);
	});

	const [displayScroll, setDisplayScroll] = useState({
		start: false,
		end: false,
	});

	const updateScrollButtonState = useEventCallback(() => {
		if (scrollable) {
			const { scrollWidth, clientWidth, scrollLeft } =
				wrapperRef.current!;
			const showStartScroll = scrollLeft > 1;
			const showEndScroll = scrollLeft < scrollWidth - clientWidth - 1;

			if (
				showStartScroll !== displayScroll.start ||
				showEndScroll !== displayScroll.end
			) {
				setDisplayScroll({
					start: showStartScroll,
					end: showEndScroll,
				});
			}
		}
	});

	const handleOnScroll = useCallback(() => {
		updateScrollButtonState();
	}, []);

	const scrollToItem = (delta: number) => {
		if (wrapperRef.current) {
			const scrollValue = wrapperRef.current.scrollLeft + delta;
			animate(wrapperRef.current, 'scrollLeft', scrollValue, 300);
		}
	};

	const handleStartButton = () =>
		void scrollToItem(-wrapperRef.current!.clientWidth!);
	const handleEndButton = () =>
		void scrollToItem(wrapperRef.current!.clientWidth!);

	useEffect(() => {
		const win = ownerWindow(wrapperRef.current!);
		const handleResize = () => {
			updateScrollButtonState();
		};

		win.addEventListener('resize', handleResize, { passive: true });

		return () => {
			win.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		updateScrollButtonState();
	}, [children]);

	const shouldShowScrollButtons =
		scrollable && (displayScroll.start || displayScroll.end);

	return (
		<Box
			overflow="hidden"
			alignItems="center"
			className={[
				styles.root.default,
				shouldShowScrollButtons && styles.root.scroll,
			]}
		>
			{shouldShowScrollButtons ? (
				<Button
					minimal
					rounded
					withDoubleClicks
					size="small"
					disabled={!displayScroll.start}
					onClick={handleStartButton}
				>
					<Icon icon={ArrowLeftIcon} />
				</Button>
			) : null}
			<Box
				ref={wrapperRef}
				className={[scrollable && styles.listWrapperScroll]}
				onScroll={handleOnScroll}
			>
				<Box
					ref={innerRef}
					display={stretch ? 'flex' : 'block'}
					flexWrap="nowrap"
					width="full"
					role="tablist"
					aria-orientation="horizontal"
					className={useTextStyles({ noWrap: true })}
				>
					{tabs}
				</Box>
			</Box>
			{shouldShowScrollButtons ? (
				<Button
					minimal
					rounded
					withDoubleClicks
					size="small"
					disabled={!displayScroll.end}
					onClick={handleEndButton}
				>
					<Icon icon={ArrowRightIcon} />
				</Button>
			) : null}
		</Box>
	);
};

export default TabList;
