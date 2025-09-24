import React, {
	createContext,
	type FunctionComponent,
	type ReactNode,
	useCallback,
	useMemo,
	useRef,
} from 'react';

import { useId, useUncontrolledState } from '../../utils';

import type { TabAppearance } from './Tab.css';

interface TabsContextValue {
	id?: string;
	activeIndex: number;
	appearance: TabAppearance;
	onChange?: (index: number) => void;
	registerTab: (index: number, el: HTMLElement | null) => void;
	getTab: (index: number) => HTMLElement | undefined;
	getTabCount: () => number;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

/**
 * ## Tabs
 *
 * A tabbed interface component that manages tab navigation and content panels. The tabs system consists of several coordinated components:
 *
 * ### Component Structure
 *
 * - **Tabs** - Root container that provides context and state management
 * - **TabList** - Container for tab navigation elements with keyboard navigation and scrolling support
 * - **Tab** - Individual clickable tab with support for indications and custom rendering
 * - **TabPanes** - Container for tab content panels with optional inactive rendering
 * - **TabPane** - Individual content panel associated with each tab
 *
 * ### Component Props Overview
 *
 * #### TabList Props
 * - `stretch?: boolean` - Whether tabs should stretch to fill available width
 * - `scrollable?: boolean` - Enable horizontal scrolling with navigation buttons (cannot be used with stretch)
 *
 * #### Tab Props
 * - `id?: string` - Custom ID for the tab element (auto-generated if not provided)
 * - `as?: ElementType | ReactElement` - Custom component or element to render the tab as
 * - `indication?: number` - Optional numeric badge displayed on the tab
 *
 * #### TabPanes Props
 * - `renderInactivePanes?: boolean` - Whether to render inactive tab panels in the DOM (hidden but present)
 * - `paddingTop?: string` - Top padding for the panes container (default: '6')
 * - `paddingBottom?: string` - Bottom padding for the panes container (default: '6')
 *
 * #### TabPane Props
 * - `id?: string` - Custom ID for the tab panel element (auto-generated if not provided)
 *
 * ### Visual Variants
 *
 * The `appearance` prop supports different visual styles:
 * - `"underlined"` (default) - Tabs with bottom border indication
 * - `"pill"`
 * - `"minimal"`
 */
export interface TabsProps {
	/** Custom ID for the tabs container. Auto-generated if not provided. */
	id?: string | null;
	/** Index of the currently active tab (0-based) */
	active: number;
	/** Visual appearance style for the tabs */
	appearance?: TabAppearance;
	/** Tab navigation and content elements (typically TabList and TabPanes) */
	children?: ReactNode;
	/** Callback fired when the active tab changes */
	onChange?: (index: number) => void;
}

export const Tabs: FunctionComponent<TabsProps> = ({
	id: incomingId,
	active = 0,
	appearance = 'underlined',
	onChange,
	children,
}) => {
	const [activeState, setActiveState] = useUncontrolledState<number>(
		active,
		onChange,
	);

	const id = useId(incomingId ?? undefined)!;

	// Registry for tab DOM elements
	const tabRefs = useRef<Map<number, HTMLElement>>(new Map());

	const registerTab = useCallback((index: number, el: HTMLElement | null) => {
		if (el) tabRefs.current.set(index, el);
		else tabRefs.current.delete(index);
	}, []);

	const getTab = useCallback(
		(index: number) => tabRefs.current.get(index),
		[],
	);

	const getTabCount = useCallback(() => tabRefs.current.size, []);

	return (
		<TabsContext.Provider
			value={useMemo(
				() => ({
					id,
					activeIndex: activeState,
					appearance,
					onChange: setActiveState,
					registerTab,
					getTab,
					getTabCount,
				}),
				[
					id,
					activeState,
					appearance,
					setActiveState,
					registerTab,
					getTab,
					getTabCount,
				],
			)}
		>
			{children}
		</TabsContext.Provider>
	);
};
