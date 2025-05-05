import { ChevronLeftIcon, ChevronRightIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import {
	ComponentProps,
	FunctionComponent,
	ReactNode,
	useMemo,
	useState,
} from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { useSwipeable } from 'react-swipeable';

import { SprinklesResponsive } from '../../styles/sprinkles.css';
import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Section } from '../Section/Section';
import { SliderProgress } from '../SliderProgress';

import * as styles from './HorizontalAutoScroller.css';
import {
	useHorizontalAutoScroller,
	UseHorizontalAutoScrollerProps,
} from './useHorizontalAutoScroller';

export interface Props
	extends Omit<UseHorizontalAutoScrollerProps, 'itemsRef'> {
	durationSeconds?: number;
	className?: string;
	columnWidth?: styles.SprinklesColumnWidth['flexBasis'];
	sliderProgressColour?: ComponentProps<
		typeof SliderProgress
	>['backgroundColour'];
	noControls?: boolean;
	space?: SprinklesResponsive['gap'];
	children: ReactNode | ReactNode[];
}

export const HorizontalAutoScroller: FunctionComponent<Props> = ({
	sliderProgressColour = 'primary',
	noControls = false,
	space = '5',
	durationSeconds = 10,
	children,
	itemsPerPage: incomingItemsPerPage,
	paused: incomingIsPaused,
	activePage: incomingActivePage,
	columnWidth = '1/2',
	className,
}) => {
	const incomingItems = useMemo(() => flattenChildren(children), [children]);
	const [activeIndex, setActiveIndex] = useState(incomingActivePage);

	const [itemsRef, setItemsRef] = useState<Array<HTMLElement>>();
	const items = useMemo(() => {
		const itemsRef: Array<HTMLElement> = [];
		const list = incomingItems.map((item, index) => (
			<Box
				ref={(el) => {
					if (el) itemsRef.push(el);
				}}
				key={index}
				flexGrow={0}
				flexShrink={0}
				alignSelf="stretch"
				className={styles.sprinklesColumnWidth({
					flexBasis: columnWidth,
				})}
			>
				<Box display="flex" height="full" width="full">
					<Box
						width="full"
						className={clsx(styles.item, {
							[styles.active]: index === activeIndex,
						})}
					>
						{item}
					</Box>
				</Box>
			</Box>
		));

		setItemsRef(itemsRef);

		return list;
	}, [incomingItems, activeIndex, columnWidth]);

	const {
		containerRef,
		pageCount,
		activePage,
		paused,
		next,
		prev,
		onClick,
		pause,
		resume,
	} = useHorizontalAutoScroller({
		itemsRef,
		itemsPerPage: incomingItemsPerPage,
		paused: incomingIsPaused,
		activePage: incomingActivePage,
		onChange: setActiveIndex,
	});

	const handlers = useSwipeable({
		onSwiped: (eventData) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			eventData.dir === 'Left' ? next() : prev();
		},
	});

	if (items.length < 2) {
		return <>{items}</>;
	}

	return (
		<Box
			alignItems="stretch"
			className={className}
			display="flex"
			flexDirection="column"
			gap="5"
			odComponent="horizontal-auto-scroller"
		>
			<Box
				overflow="hidden"
				position="relative"
				{...handlers}
				onContextMenu={(event) => {
					event.preventDefault();
					event.stopPropagation();
				}}
				onTouchStart={pause}
				onTouchEnd={resume}
				onClick={onClick}
			>
				{noControls ? null : (
					<Box
						className={[styles.controllerBtn, styles.prevBtn]}
						display="flex"
						alignItems="center"
						justifyContent="flex-start"
						position="absolute"
					>
						<Button
							rounded
							onClick={(event) => {
								event.stopPropagation();
								event.preventDefault();
								prev();
							}}
							variant="secondary"
						>
							<Icon icon={ChevronLeftIcon} />
						</Button>
					</Box>
				)}
				<Box
					alignItems="stretch"
					display="flex"
					overflow="hidden"
					px="8"
					flexWrap="nowrap"
					width="full"
					gap={space}
					ref={containerRef}
				>
					{noControls ? null : (
						<Box className={styles.controllerCol}>
							<span />
						</Box>
					)}
					{items}
					{noControls ? null : (
						<Box className={styles.controllerCol}>
							<span />
						</Box>
					)}
				</Box>
				{noControls ? null : (
					<Box
						className={[styles.controllerBtn, styles.nextBtn]}
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
						position="absolute"
					>
						<Button
							rounded
							onClick={(event) => {
								event.stopPropagation();
								event.preventDefault();
								next();
							}}
							variant="secondary"
						>
							<Icon icon={ChevronRightIcon} />
						</Button>
					</Box>
				)}
			</Box>
			<Box>
				<Section width="small">
					<SliderProgress
						backgroundColour={sliderProgressColour}
						duration={`${durationSeconds}s`}
						paused={paused}
						onRequestNext={next}
						totalCount={pageCount}
						activeIndex={activePage || 0}
					/>
				</Section>
			</Box>
		</Box>
	);
};
