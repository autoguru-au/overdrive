import React, {
	cloneElement,
	createElement,
	forwardRef,
	isValidElement,
	useCallback,
	useEffect,
	useMemo,
	useState,
	type AriaAttributes,
	type ComponentProps,
	type ElementType,
	type MouseEventHandler,
	type PropsWithChildren,
	type Ref,
	type ReactElement,
} from 'react';

import type { TestIdProp } from '../../types';
import { useBox } from '../Box/useBox/useBox';
import { Icon, type IconProps } from '../Icon/Icon';
import { ProgressSpinner } from '../ProgressSpinner/ProgressSpinner';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

import * as styles from './Button.css';
import type { StyledButtonProps } from './Button.css';

type ButtonPrimitive = ComponentProps<'button'>;

type ComponentPropsWithRef<T = Element> = React.HTMLAttributes<T> & {
	ref: Ref<T>;
};

const DOUBLE_CLICK_DETECTION_PERIOD = 700;
const LOCALE_TEXT_DEFAULT = {
	loading: 'loading',
} as const;

type LocaleText = Partial<Record<keyof typeof LOCALE_TEXT_DEFAULT, string>>;

export interface ButtonProps
	extends Pick<
			ButtonPrimitive,
			| 'children'
			| 'id'
			| 'onBlur'
			| 'onClick'
			| 'onFocus'
			| 'onKeyDown'
			| 'onMouseEnter'
			| 'onMouseLeave'
			| 'type'
			| 'className'
		>,
		Pick<
			AriaAttributes,
			| 'aria-label'
			| 'aria-controls'
			| 'aria-describedby'
			| 'aria-expanded'
			| 'aria-haspopup'
		>,
		StyledButtonProps,
		TestIdProp {
	/**
	 * Disabling the button will prevent it from receiving keyboard focus or click events
	 */
	disabled?: boolean;
	/**
	 * Element or component to render as, in place of `<button>`.
	 *
	 * Accepts a component type or an element to clone — pass an element when it
	 * needs its own props, e.g. `as={<a href="/pricing" />}`. Cannot be an HTML
	 * tag name; `<button>` is what carries the interactive and disabled
	 * semantics, so reach for an interactive element rather than a `<div>`.
	 */
	as?: ElementType | ReactElement;
	/**
	 * Swaps the button's content for a progress spinner and disables it, for
	 * on-page data handling. The label stays in the DOM but hidden, so the
	 * button keeps its width.
	 */
	isLoading?: boolean;
	/**
	 * Stretches the button to the full width of its container.
	 */
	isFullWidth?: boolean;
	/**
	 * Pill shaped button appearance
	 */
	rounded?: boolean;
	/**
	 * Allows rapid repeat clicks.
	 *
	 * By default the button disables itself for 700ms after a click to swallow
	 * accidental double submissions; set this when repeat clicks are the point,
	 * such as a stepper or a counter.
	 */
	withDoubleClicks?: boolean;
	/**
	 * Language content overrides
	 */
	localeText?: LocaleText;
}

const Spinner = ({
	isInverse,
	label,
	children,
}: PropsWithChildren<{ isInverse: boolean; label: string }>) => (
	<>
		{/* The spinner itself is decoration; `label` is what reaches assistive
		    technology, appended to the button's own label rather than replacing
		    it — "Submit loading", not "loading". */}
		<div aria-hidden className={styles.spinnerWrapper}>
			<ProgressSpinner colour={isInverse ? 'secondary' : 'light'} />
		</div>
		{/* `opacity`, not `visibility: hidden` — the label has to stay in the
		    accessibility tree while it makes room for the spinner. */}
		<div className={styles.hiddenContent}>{children}</div>
		{/* After the label, so the name reads "Submit loading". */}
		<VisuallyHidden>{label}</VisuallyHidden>
	</>
);

export const calcIconSize = (size: ButtonProps['size']) =>
	size === 'small' ? size : 'medium';

/**
 * The Button supports a variety of appearances and is one of the main interactive Overdrive
 * components. `variant`, `size` and `rounded` provide the main choices.
 *
 * **Choosing a button** — pick by how much you want the user to take the action,
 * not by colour. Each variant's story carries the fuller version of this.
 *
 * | Use | When | Prop |
 * |---|---|---|
 * | **Primary** | The action we want them to take. Two or three per page at most, or it stops reading as "the" action. | `variant="primary"` |
 * | **Primary outlined** | Another important action worth promoting, when a stronger primary already owns the page. | `variant="primary" outlined` |
 * | **Secondary** | We don't mind either way — optional, and not a path we are pushing them down. | `variant="secondary"` |
 * | **Critical** | Not something we want them to do unless they are sure. Destructive, so pair it with a confirmation. | `variant="danger"` |
 * | **Critical outlined** | A destructive action that isn't the page's main event, or one sitting beside a solid Critical. | `variant="danger" outlined` |
 *
 * `brand`, `information`, `warning` and `success` are legacy variants, not part
 * of the DS-2026 button classes. They keep their pre-DS-2026 colours and have no
 * Figma counterpart — prefer the four above for new work.
 *
 * By default the button will have a disabled timeout to avoid multiple rapid clicks.
 * To prevent this feature, use the `withDoubleClicks` prop.
 *
 * It is recommended to use the `onPress` and related event handler provided by react-aria.
 * For more information see the
 * [usePress](https://react-spectrum.adobe.com/react-aria/usePress.html) documentation.
 *
 * Use the `isLoading` prop where there is on-page data handling.
 *
 * _NOTE:_ Button `as` prop cannot be provided an HTML tag. `<button>` components are
 * interactive and accessible for use with event handlers and disabled or loading states.
 *
 * Please _DO NOT_ use a `<div>` tag as a button, choose an interactive HTML element.
 *
 * @example
 * <Button
 *   variant="primary"
 *   size="medium"
 *   onPress={() => console.info('button clicked')}
 * >
 *   Click Me
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			as = 'button',
			children,
			className,
			id,
			type = 'button',

			disabled = false,
			isLoading = false,
			isFullWidth = false,
			localeText,
			minimal = false,
			outlined = false,
			rounded = false,
			size = 'medium',
			testId,
			variant = 'secondary',
			withDoubleClicks = false,

			onBlur,
			onClick: incomingOnClick,
			onFocus,
			onKeyDown,
			onMouseEnter,
			onMouseLeave,

			'aria-label': ariaLabel,
			'aria-controls': ariaControls,
			'aria-describedby': ariaDescribedBy,
			'aria-expanded': ariaExpanded,
			'aria-haspopup': ariaHasPopup,
		},
		ref,
	) => {
		const [functionallyDisabled, setFunctionallyDisabled] =
			useState<boolean>(false);

		const language = { ...LOCALE_TEXT_DEFAULT, ...localeText };
		// `minimal` wins; limited to the intents that have outlined tokens.
		const isOutlined =
			outlined &&
			!minimal &&
			(variant === 'primary' || variant === 'danger');
		// Which fills need the dark spinner. DS-2026 turned `primary` into a
		// mint fill with a near-black label, so a light spinner on it is about
		// 1.4:1 — `critical` keeps a white label on red and stays light.
		const hasDarkLabel = variant === 'primary' || variant === 'secondary';
		const isInverse = minimal || isOutlined || hasDarkLabel;
		const isSingleIconChild = useMemo(
			() =>
				isValidElement(children) &&
				children.type === Icon &&
				typeof children.type !== 'string',
			[children],
		);
		const shape =
			(isSingleIconChild && 'iconOnly') ||
			(rounded && 'rounded') ||
			'default';

		const onClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
			(event) => {
				// `aria-disabled` is advisory only, so the guard the native
				// `disabled` attribute used to give us has to live here —
				// including for Enter and Space, which arrive as clicks.
				if (isLoading) {
					event.preventDefault();
					event.stopPropagation();
					return;
				}
				if (!withDoubleClicks) setFunctionallyDisabled(true);
				if (typeof incomingOnClick === 'function')
					incomingOnClick(event);
			},
			[isLoading, withDoubleClicks, incomingOnClick],
		);

		const { Component, componentProps } = useBox({
			as,
			// Loading deliberately does NOT set the native attribute: a
			// `disabled` element leaves the tab order, so focus would jump to
			// the body the moment the button was pressed and the user would
			// never hear the busy state. `aria-disabled` keeps it focusable and
			// announced; `onClick` above enforces the inertness.
			disabled,
			id,
			odComponent: 'button',
			testId,
			type: as === 'button' ? type : undefined,

			className: [
				styles.button({
					intent: variant,
					isFullWidth,
					isLoading,
					minimal,
					outlined: isOutlined,
					rounded,
					shape,
					size,
				}),
				className,
			],
			pointerEvents: functionallyDisabled ? 'none' : undefined,

			'aria-label': ariaLabel,
			'aria-busy': isLoading || undefined,
			// Only while loading — on a genuinely `disabled` button the native
			// attribute already conveys this, and both would be redundant.
			'aria-disabled': isLoading || undefined,
			'aria-controls': ariaControls,
			'aria-describedby': ariaDescribedBy,
			'aria-expanded': ariaExpanded,
			'aria-haspopup': ariaHasPopup,
			'data-loading': isLoading ? '' : undefined,

			onBlur,
			onClick,
			onFocus,
			onKeyDown,
			onMouseEnter,
			onMouseLeave,
		});

		const buttonContents = useMemo(() => {
			if (isSingleIconChild) {
				const iconProps = children as ReactElement<
					ComponentProps<typeof Icon>
				>;
				// if it is an icon button, allow custom icon size from the element
				// otherwise, standardise the size
				const iconSize = iconProps?.props?.size ?? calcIconSize(size);
				return cloneElement(children as React.ReactElement<IconProps>, {
					size: iconSize,
				});
			}
			return children;
		}, [isSingleIconChild, children, size]);

		useEffect(() => {
			if (functionallyDisabled) {
				const timer = setTimeout(() => {
					setFunctionallyDisabled(false);
				}, DOUBLE_CLICK_DETECTION_PERIOD);

				return () => clearTimeout(timer);
			}
			return void 0;
		}, [functionallyDisabled]);

		const child = isLoading ? (
			<Spinner isInverse={isInverse} label={language.loading}>
				{buttonContents}
			</Spinner>
		) : (
			buttonContents
		);
		return React.isValidElement(as)
			? cloneElement(
					as,
					{ ...componentProps, ref } as ComponentPropsWithRef,
					child,
				)
			: createElement(Component, { ...componentProps, ref }, child);
	},
);

Button.displayName = 'Button';
