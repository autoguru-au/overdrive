import { MagnifyIcon, CloseIcon } from '@autoguru/icons';
import React from 'react';
import {
	mergeProps,
	useButton,
	useFocusRing,
	useSearchField,
	type AriaButtonProps,
	type AriaSearchFieldProps,
} from 'react-aria';
import { useSearchFieldState } from 'react-stately';

import { odStyle } from '../../styles/sprinkles.css';
import type { WithTestId } from '../../types';
import { mergeRefs } from '../../utils';
import { dataAttrs } from '../../utils/dataAttrs';
import { Icon } from '../Icon';

import {
	styledClearButton,
	styledInput,
	styledSearchBar,
} from './SearchBar.css';

const defaultEnglish = {
	label: 'Search',
	clear: 'clear search',
} as const;

type TextContent = keyof typeof defaultEnglish;

interface SearchBarProps extends AriaSearchFieldProps {
	/**
	 * The placeholder text is also used as the aria-label since the SearchBar does not have a label element
	 */
	placeholder: string;
	/**
	 * The event handler for when the search field's value changes
	 */
	onChange?: AriaSearchFieldProps['onChange'];
	/**
	 * Language content override
	 */
	lang?: Partial<Record<TextContent, string>>;
	/**
	 * Optional forwarded ref for the input element (React 19)
	 */
	ref?: React.Ref<HTMLInputElement>;
}

const ReactAriaButton = (props: AriaButtonProps & { className: string }) => {
	const ref = React.useRef<HTMLButtonElement>(null);
	const { buttonProps } = useButton(props, ref);
	return (
		<button {...buttonProps} className={props.className} ref={ref}>
			{props.children}
		</button>
	);
};

/**
 * Oversized search bar implemented via the react-aria `useSearchField` hook
 * ([docs](https://react-spectrum.adobe.com/react-aria/useSearchField.html)). This search bar is used primarily in
 * combination with the `OptionGrid` in order to filter displayed options and can be reset once text is entered.
 *
 * This field does not have a visible label, so an placeholder text is used as `aria-label`.
 * It is recommended to use the `onChange` prop to handle the input content, uncontrolled.
 */
export const SearchBar = (componentProps: WithTestId<SearchBarProps>) => {
	const { label, placeholder, ref: refForwarded } = componentProps;
	const textLabel =
		((label as string) ?? placeholder?.length)
			? placeholder
			: defaultEnglish.label;
	const props = {
		...componentProps,
		'aria-label': textLabel,
		placeholder: textLabel,
	};

	const state = useSearchFieldState(props);
	const refInput = React.useRef<HTMLInputElement>(null);
	const refWrapper = React.useRef<HTMLDivElement>(null);
	const { clearButtonProps, inputProps } = useSearchField(
		props,
		state,
		refInput,
	);
	const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);

	const handleWrapperClick = () => {
		refInput.current?.focus();
	};

	const ClearButton = () => {
		if (state.value === '') return null;

		return (
			<ReactAriaButton
				className={styledClearButton({})}
				{...clearButtonProps}
			>
				<Icon icon={CloseIcon} size="100%" />
			</ReactAriaButton>
		);
	};

	return (
		// this is a pass-through for mouse/touch interaction, the interactive element is keyboard focusable
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<div
			className={styledSearchBar({})}
			onClick={handleWrapperClick}
			ref={refWrapper}
			{...dataAttrs({
				focus: isFocused,
				'focus-visible': isFocusVisible,
				'test-id': props.testId,
			})}
		>
			<div>
				<Icon icon={MagnifyIcon} size="large" />
			</div>
			<div
				className={odStyle({
					display: 'flex',
					flexGrow: 1,
					alignItems: 'center',
				})}
			>
				<input
					{...mergeProps(inputProps, focusProps)}
					className={styledInput({})}
					ref={mergeRefs([refInput, refForwarded])}
				/>
				<ClearButton />
			</div>
		</div>
	);
};
