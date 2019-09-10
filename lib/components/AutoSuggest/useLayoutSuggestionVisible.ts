import { RefObject, useLayoutEffect } from 'react';

export const useLayoutSuggestionVisible = (
	highlightIndex: number,
	highlightRef: RefObject<HTMLElement>,
	suggestionListRef: RefObject<HTMLElement>,
) => {
	useLayoutEffect(() => {
		if (
			highlightRef.current &&
			suggestionListRef.current &&
			highlightIndex > -1
		) {
			const highlightItem = highlightRef.current;
			const suggestionListItem = suggestionListRef.current;

			const itemOffsetRelativeToContainer =
				highlightItem.offsetParent === suggestionListItem
					? highlightItem.offsetTop
					: highlightItem.offsetTop - suggestionListItem.offsetTop;

			let { scrollTop } = suggestionListItem;

			if (itemOffsetRelativeToContainer < scrollTop) {
				scrollTop = itemOffsetRelativeToContainer;
			} else if (
				itemOffsetRelativeToContainer + highlightItem.offsetHeight >
				scrollTop + suggestionListItem.offsetHeight
			) {
				scrollTop =
					itemOffsetRelativeToContainer +
					highlightItem.offsetHeight -
					suggestionListItem.offsetHeight;
			}

			if (scrollTop !== suggestionListItem.scrollTop) {
				suggestionListItem.scrollTop = scrollTop;
			}
		}
	}, [highlightIndex]);
};
