import { ArrowLeftIcon, ArrowRightIcon } from '@autoguru/icons';
import { invariant } from '@autoguru/utilities';
import type { FunctionComponent } from 'react';
import * as React from 'react';
import {
	Children,
	isValidElement,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { useStyles } from 'react-treat';

import { animate, ownerWindow, useEventCallback } from '../../utils';
import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { TabIndexProvider } from './context';
import * as styleRefs from './TabList.treat';

export interface Props {
	stretch?: boolean;
	scrollable?: boolean;
}

export const TabList: FunctionComponent<Props> = ({
	children,
	stretch = false,
	scrollable = false,
}) => {
	invariant(
		!(stretch && scrollable),
		'Tabs: `stretch={true}` and `scrollable={true}` cannot be used at the same time.',
	);

	const styles = useStyles(styleRefs);

	const wrapperRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);

	const childs = useMemo(
		() =>
			Children.map(flattenChildren(children), (child, index) => {
				if (!isValidElement(child)) return null;

				return (
					<TabIndexProvider index={index}>{child}</TabIndexProvider>
				);
			}),
		[children],
	);

	const [displayScroll, setDisplayScroll] = useState({
		start: false,
		end: false,
	});

	const updateScrollButtonState = useEventCallback(() => {
		if (scrollable) {
			const {
				scrollWidth,
				clientWidth,
				scrollLeft,
			} = wrapperRef.current!;
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
		void scrollToItem(-wrapperRef.current?.clientWidth!);
	const handleEndButton = () =>
		void scrollToItem(wrapperRef.current?.clientWidth!);

	useEffect(() => {
		const win = ownerWindow(wrapperRef.current!);
		const handleResize = () => {
			updateScrollButtonState();
		};

		win.addEventListener('resize', handleResize);

		return () => {
			win.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		updateScrollButtonState();
	}, [childs]);

	const shouldShowScrollButtons =
		scrollable && (displayScroll.start || displayScroll.end);

	return (
		<Box
			className={[
				styles.root.default,
				shouldShowScrollButtons && styles.root.scroll,
			]}>
			{shouldShowScrollButtons ? (
				<Button
					minimal
					rounded
					size="small"
					disabled={!displayScroll.start}
					onClick={handleStartButton}>
					<Icon icon={ArrowLeftIcon} />
				</Button>
			) : null}
			<Box
				ref={wrapperRef}
				className={[
					stretch && styles.listWrapper.stretch,
					scrollable && styles.listWrapper.scroll,
				]}
				onScroll={handleOnScroll}>
				<Box
					ref={innerRef}
					role="tablist"
					className={[
						styles.list.default,
						stretch && styles.list.stretch,
					]}>
					{childs}
				</Box>
			</Box>
			{shouldShowScrollButtons ? (
				<Button
					minimal
					rounded
					size="small"
					disabled={!displayScroll.end}
					onClick={handleEndButton}>
					<Icon icon={ArrowRightIcon} />
				</Button>
			) : null}
		</Box>
	);
};
