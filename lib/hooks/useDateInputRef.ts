import { useImperativeHandle, type RefObject, type ForwardedRef } from 'react';

type ElementTypes = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

/**
 * Custom hook for creating a composite ref that provides HTMLInputElement compatibility
 * for the DateInput component while maintaining proper focus management for the date field segments.
 */
export const useDateInputRef = (
	ref: ForwardedRef<ElementTypes> | RefObject<ElementTypes>,
	hiddenInputRef: RefObject<HTMLInputElement | null>,
	dateFieldRef: RefObject<HTMLDivElement | null>,
) => {
	useImperativeHandle(ref, () => {
		const hiddenInput = hiddenInputRef.current;
		const dateField = dateFieldRef.current;

		if (!hiddenInput) return {} as ElementTypes;

		// Use Proxy for cleaner implementation that inherits all HTMLInputElement properties
		return new Proxy(hiddenInput, {
			get(target, prop) {
				switch (prop) {
					case 'focus': {
						return (options?: FocusOptions) => {
							const firstSegment = dateField?.querySelector(
								'[role="spinbutton"]',
							) as HTMLElement;
							(firstSegment || dateField)?.focus(options);
						};
					}
					case 'click': {
						return () => {
							const firstSegment = dateField?.querySelector(
								'[role="spinbutton"]',
							) as HTMLElement;
							(firstSegment || dateField)?.click();
						};
					}
					case 'type': {
						return 'date';
					}
					default: {
						// Pass through to the hidden input for all other properties
						return target[prop as keyof HTMLInputElement];
					}
				}
			},
		});
	}, []);
};
