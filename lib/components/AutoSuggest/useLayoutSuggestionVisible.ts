import { RefObject, useLayoutEffect } from 'react';

import { isBrowser } from '../../utils';

export const useLayoutSuggestionVisible = (
	highlightIndex: number,
	highlightRef: RefObject<HTMLElement>,
	suggestionListRef: RefObject<HTMLElement>,
) => {
	if (isBrowser) {
		// Its okay to wrap this... As the value wont change once rendered.
		// eslint-disable-next-line react-hooks/rules-of-hooks
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
						: highlightItem.offsetTop -
						  suggestionListItem.offsetTop;

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
		}, [highlightIndex, highlightRef, suggestionListRef]);
	}
};
