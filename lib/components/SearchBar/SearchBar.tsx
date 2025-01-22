import { MagnifyIcon, CloseIcon } from '@autoguru/icons';
import React from 'react';
import {
	mergeProps,
	useButton,
	useFocusWithin,
	useSearchField,
	type AriaButtonProps,
	type AriaSearchFieldProps,
} from 'react-aria';
import { useSearchFieldState } from 'react-stately';

import { odStyle } from '../../styles/sprinkles.css';
import type { WithTestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Icon } from '../Icon';

import {
	styledClearButton,
	styledInput,
	styledSearchBar,
} from './SearchBar.css';

interface SearchBarProps extends AriaSearchFieldProps {
	/**
	 * The placeholder text is also used as the aria-label since the SearchBar does not have a label element
	 */
	placeholder: string;
}

const defaultEnglish = {
	label: 'Search for tasks',
	clear: 'clear search',
};

const ReactAriaButton = (props: AriaButtonProps & { className: string }) => {
	const ref = React.useRef<HTMLButtonElement>(null);
	const { buttonProps } = useButton(props, ref);
	return (
		<button {...buttonProps} className={props.className} ref={ref}>
			{props.children}
		</button>
	);
};

export const SearchBar = (componentProps: WithTestId<SearchBarProps>) => {
	const textLabel =
		(componentProps.label as string) ??
		componentProps.placeholder ??
		defaultEnglish.label;
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
	const { focusWithinProps } = useFocusWithin({
		onFocusWithin: () => {
			refWrapper.current?.setAttribute('data-focus', 'true');
		},
		onBlurWithin: () => {
			refWrapper.current?.removeAttribute('data-focus');
		},
	});

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
		<div
			className={styledSearchBar({})}
			onClick={handleWrapperClick}
			ref={refWrapper}
			{...dataAttrs({ 'test-id': props.testId })}
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
					{...mergeProps(inputProps, focusWithinProps)}
					className={styledInput({})}
					ref={refInput}
				/>
				<ClearButton />
			</div>
		</div>
	);
};
