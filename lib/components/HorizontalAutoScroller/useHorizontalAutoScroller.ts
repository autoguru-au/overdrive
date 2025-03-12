import {
	Reducer,
	startTransition,
	useCallback,
	useEffect,
	useMemo,
	useReducer,
} from 'react';
import { useInView } from 'react-intersection-observer';

interface State {
	pageCount: number;
	activePage?: number | null;
	paused: boolean;
}

export interface UseHorizontalAutoScrollerProps
	extends Partial<Omit<State, 'pageCount'>> {
	itemsRef?: Array<HTMLElement>;
	itemsPerPage?: number;

	onChange?(page: number): void;
}

interface Returns extends State {
	containerRef: ReturnType<typeof useInView>[0];

	next(): void;

	prev(): void;

	pause(): void;

	resume(): void;

	onClick(): void;

	goToPage(page: number): void;
}

type Actions =
	| {
			type: 'GO_TO_PAGE';
			payload: number;
	  }
	| {
			type: 'SET_PAGE_COUNT';
			payload: number;
	  }
	| {
			type: 'NEXT_PAGE';
	  }
	| {
			type: 'PREV_PAGE';
	  }
	| {
			type: 'PAUSE';
	  }
	| {
			type: 'RESUME';
	  }
	| {
			type: 'CLICK_NEXT';
	  };

const getNextPge = (prevState: State): number => {
	if (
		typeof prevState.activePage === 'number' &&
		prevState.activePage + 1 < prevState.pageCount
	) {
		return prevState.activePage + 1;
	}
	return 0;
};

const getPrevPage = (prevState: State): number => {
	if (
		typeof prevState.activePage === 'number' &&
		prevState.activePage - 1 >= 0
	) {
		return prevState.activePage - 1;
	}
	return prevState.pageCount - 1;
};

const stateReducer: Reducer<State, Actions> = (prevState, action) => {
	switch (action.type) {
		case 'GO_TO_PAGE': {
			return {
				...prevState,
				activePage: action.payload,
			};
		}
		case 'SET_PAGE_COUNT': {
			return {
				...prevState,
				pageCount: action.payload,
			};
		}
		case 'NEXT_PAGE':
		case 'CLICK_NEXT': {
			return {
				...prevState,
				paused: false,
				activePage: getNextPge(prevState),
			};
		}
		case 'PREV_PAGE': {
			return {
				...prevState,
				paused: false,
				activePage: getPrevPage(prevState),
			};
		}
		case 'PAUSE': {
			return {
				...prevState,
				paused: true,
			};
		}
		case 'RESUME': {
			return {
				...prevState,
				paused: false,
			};
		}
		default: {
			return prevState;
		}
	}
};

export const useHorizontalAutoScroller = ({
	itemsRef,
	itemsPerPage = 1,
	paused: incomingIsPaused = false,
	activePage: incomingActivePage = null,
	onChange = () => void 0,
}: UseHorizontalAutoScrollerProps): Returns => {
	const [{ pageCount, activePage, paused }, dispatch] = useReducer(
		stateReducer,
		{
			paused: incomingIsPaused,
			activePage: void 0,
			pageCount: itemsRef?.length
				? Math.ceil(itemsRef.length / itemsPerPage)
				: 1,
		},
	);

	useEffect(() => {
		dispatch({
			type: 'SET_PAGE_COUNT',
			payload: itemsRef?.length
				? Math.ceil(itemsRef.length / itemsPerPage)
				: 1,
		});
	}, [itemsRef?.length, itemsPerPage]);

	const onViewChange = useCallback(
		(inView) => {
			if (inView && typeof activePage !== 'number')
				dispatch({
					type: 'GO_TO_PAGE',
					payload:
						typeof incomingActivePage === 'number'
							? incomingActivePage
							: 0,
				});
		},
		[incomingActivePage, activePage],
	);

	const [containerRef, inView, entry] = useInView({
		triggerOnce: false,
		rootMargin: '0px',
		onChange: onViewChange,
	});

	const next = useCallback(() => {
		dispatch({ type: 'NEXT_PAGE' });
	}, []);

	const prev = useCallback(() => {
		dispatch({ type: 'PREV_PAGE' });
	}, []);

	const goToPage = useCallback((page: number) => {
		dispatch({ type: 'GO_TO_PAGE', payload: page });
	}, []);

	const onClick = useCallback(() => {
		dispatch({ type: 'CLICK_NEXT' });
	}, []);

	const pause = useCallback(() => {
		dispatch({ type: 'PAUSE' });
	}, []);

	const resume = useCallback(() => {
		dispatch({ type: 'RESUME' });
	}, []);

	useEffect(() => {
		if (typeof activePage !== 'number' || !itemsRef?.length) return;

		onChange(activePage);
		startTransition(() => {
			entry?.target.scrollTo({
				top: 0,
				left:
					itemsRef[activePage].getBoundingClientRect().left -
					itemsRef[0].getBoundingClientRect().left,
				behavior: 'smooth',
			});
		});
	}, [itemsRef, activePage, entry?.target, onChange]);

	return useMemo(
		() => ({
			containerRef,
			paused: paused || !inView,
			pageCount,
			activePage,
			next,
			prev,
			goToPage,
			onClick,
			pause,
			resume,
		}),
		[containerRef, pageCount, activePage, paused, inView],
	);
};
