import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
	AnchorHTMLAttributes,
	cloneElement,
	ComponentProps,
	forwardRef,
	ReactElement,
	ReactText,
	RefForwardingComponent,
} from 'react';

import { Text } from '..';
import styles from './TextLink.scss';

type TextProps = Omit<ComponentProps<typeof Text>, 'is' | 'white'>;
type AnchorProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'children' | 'style' | 'as' | keyof TextProps
>;

interface Props extends TextProps, AnchorProps {
	children: ReactText;
	className?: string;
	as?: ReactElement;
}

export const TextLink: RefForwardingComponent<
	HTMLAnchorElement,
	Props
> = forwardRef(
	(
		{ as, children, className, strong = true, muted, size, ...props },
		ref,
	) => {
		invariant(
			as !== void 0 && props.href !== void 0,
			'You cannot have both href and as defined.',
		);

		const body = (
			<Text
				is="span"
				muted={muted}
				size={size}
				strong={strong}
				className={clsx(styles.root, {
					[styles.strong]: strong,
				})}>
				{children}
			</Text>
		);

		if (as === void 0) {
			return (
				<a
					ref={ref as any}
					rel={props.rel || 'noopener noreferrer'}
					className={className}
					{...props}>
					{body}
				</a>
			);
		}

		return cloneElement(as, { ref, className }, body);
	},
);
