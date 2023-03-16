import { ChevronLeftIcon, ChevronRightIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent, ReactNode, useMemo, useState } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { SliderProgress } from '..';
import { Box } from '../Box';
import { Button } from '../Button';
import { Column, Columns } from '../Columns';
import { Icon } from '../Icon';
import Section from '../Section/Section';
import { Stack } from '../Stack';

import * as styles from './HorizontalAutoScroller.css';
import { useHorizontalAutoScroller, UseHorizontalAutoScrollerProps } from './useHorizontalAutoScroller';

export interface Props
	extends Pick<ComponentProps<typeof Columns>, 'space'>,
		Omit<UseHorizontalAutoScrollerProps, 'itemsRef'> {
	durationSeconds?: number;
	className?: string;
	columnWidth?: ComponentProps<typeof Column>['width'];
	noControls?: boolean;

	children: ReactNode | ReactNode[];
}

export const HorizontalAutoScroller: FunctionComponent<Props> = ({
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
		const itemsRef:Array<HTMLElement> = [];
		const list = incomingItems.map((item, index) => (
			<Column
				ref={(el) => {
					if (el)
						itemsRef.push(el);
				}}
				key={index}
				noShrink
				width={columnWidth}
				justifyContent='stretch'
				alignSelf='stretch'>
				<Box
					width='full'
					className={clsx(styles.item, {
						[styles.active]: index === activeIndex,
					})}>
					{item}
				</Box>
			</Column>
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

	if (items.length < 2) {
		return <>{items}</>;
	}

	return (
		<Stack className={className} space='5'>
			<Box
				overflow='hidden'
				position='relative'
				onContextMenu={(event) => {
					event.preventDefault();
					event.stopPropagation();
				}}
				onTouchStart={pause}
				onTouchEnd={resume}
				onClick={onClick}>
				{noControls ? null : (
					<Box
						className={[styles.controllerBtn, styles.prevBtn]}
						display='flex'
						alignItems='center'
						justifyContent='flexStart'
						position='absolute'>
						<Button
							rounded
							onClick={(event) => {
								event.stopPropagation();
								event.preventDefault();
								prev();
							}}
							variant='secondary'>
							<Icon icon={ChevronLeftIcon} />
						</Button>
					</Box>
				)}
				<Columns
					ref={containerRef}
					overflow='hidden'
					noWrap
					width='full'
					space={space}>
					{noControls ? null : (
						<Column noShrink className={styles.controllerCol}>
							<span />
						</Column>
					)}
					{items}
					{noControls ? null : (
						<Column noShrink className={styles.controllerCol}>
							<span />
						</Column>
					)}
				</Columns>
				{noControls ? null : (
					<Box
						className={[styles.controllerBtn, styles.nextBtn]}
						display='flex'
						alignItems='center'
						justifyContent='flexEnd'
						position='absolute'>
						<Button
							rounded
							onClick={(event) => {
								event.stopPropagation();
								event.preventDefault();
								next();
							}}
							variant='secondary'>
							<Icon icon={ChevronRightIcon} />
						</Button>
					</Box>
				)}
			</Box>
			<Section width='small'>
				<SliderProgress
					backgroundColour='yellow500'
					duration={`${durationSeconds}s`}
					paused={paused}
					onRequestNext={next}
					totalCount={pageCount}
					activeIndex={activePage || 0}
				/>
			</Section>
		</Stack>
	);
};

export default HorizontalAutoScroller;
