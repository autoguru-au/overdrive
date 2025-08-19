import { ArrowLeftIcon, ArrowRightIcon } from '@autoguru/icons';
import { invariant } from '@autoguru/utilities';
import React, {
	Children,
	type FunctionComponent,
	createContext,
	isValidElement,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { textStyles } from '../../styles/typography';
import { animate, ownerWindow, useEventCallback } from '../../utils';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

import * as styles from './TabList.css';
import { TabsContext } from './Tabs';

export interface TabListProps {
	stretch?: boolean;
	scrollable?: boolean;
	children?: ReactNode;
}

const defaultEnglish = {
	next: 'scroll tabs right',
	prev: 'scroll tabs left',
};

export const TabListContext = createContext<number | null>(null);

export const TabList: FunctionComponent<TabListProps> = ({
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

	const tabsContext = useContext(TabsContext);
	invariant(
		tabsContext !== null,
		'This tablist isnt nested beneath <Tabs />',
	);
	const { appearance, activeIndex, onChange } = tabsContext;

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
		scrollToItem(-wrapperRef.current!.clientWidth!);
	const handleEndButton = () =>
		scrollToItem(wrapperRef.current!.clientWidth!);

	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent) => {
			// Only handle when focus is within the tablist
			const tabsRoot = innerRef.current;
			if (!tabsRoot) return;

			const key = event.key;
			if (
				key !== 'ArrowRight' &&
				key !== 'ArrowLeft' &&
				key !== 'Home' &&
				key !== 'End'
			) {
				return;
			}

			event.preventDefault();

			const tabNodes =
				tabsRoot.querySelectorAll<HTMLElement>('[role="tab"]');
			if (tabNodes.length === 0) return;

			let nextIndex = activeIndex ?? 0;
			const lastIndex = tabNodes.length - 1;

			switch (key) {
				case 'ArrowRight': {
					nextIndex = (activeIndex + 1) % tabNodes.length;
					break;
				}
				case 'ArrowLeft': {
					nextIndex =
						(activeIndex - 1 + tabNodes.length) % tabNodes.length;
					break;
				}
				case 'Home': {
					nextIndex = 0;
					break;
				}
				case 'End': {
					nextIndex = lastIndex;
					break;
				}
			}

			if (nextIndex !== activeIndex) {
				// Update active tab
				onChange?.(nextIndex);
				// Ensure the newly active tab is visible and receives focus
				// Focus will automatically move due to roving tabindex on Tab
				// but we also scroll it into view if needed (especially when scrollable)
				queueMicrotask(() => {
					const el = tabNodes.item(nextIndex);
					el?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
					el?.focus?.();
				});
			}
		},
		[activeIndex, onChange],
	);

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
	}, [children, updateScrollButtonState]);

	const shouldShowScrollButtons =
		scrollable && (displayScroll.start || displayScroll.end);

	return (
		<Box
			alignItems="center"
			className={styles.styledTabList({
				appearance,
				scroll: scrollable,
			})}
		>
			{shouldShowScrollButtons ? (
				<Button
					minimal
					rounded
					withDoubleClicks
					size="small"
					disabled={!displayScroll.start}
					onClick={handleStartButton}
					aria-label={defaultEnglish.prev}
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
					onKeyDown={handleKeyDown}
					className={textStyles({ noWrap: true })}
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
					aria-label={defaultEnglish.next}
				>
					<Icon icon={ArrowRightIcon} />
				</Button>
			) : null}
		</Box>
	);
};
