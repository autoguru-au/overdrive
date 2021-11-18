import type { ReactNode, Ref, RefObject } from 'react';
import * as React from 'react';
import { forwardRef, useLayoutEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { isHtmlElement, setRef } from '../../utils';
import { useTheme } from '../ThemeProvider';

export interface Props {
	children?: ReactNode;
	container?: Element;
	noThemedWrapper?: boolean;
}

type RefValue<T> = T extends RefObject<infer T> ? T : never;

function Portal({ children, container, noThemedWrapper }: Props, ref: Ref<typeof container>) {
	const themeClass = useTheme()?.themeClass;

	const [mountNode, setMountNode] = useState<RefValue<typeof ref> | null>(
		null,
	);

	useLayoutEffect(() => {
		setMountNode(isHtmlElement(container) ? container : document.body);
	}, [container]);

	useLayoutEffect(() => {
		if (mountNode) {
			setRef(ref, mountNode);
		}

		return () => {
			void setRef(ref, null);
		};
	}, [ref, mountNode]);

	return useMemo(() => {
		mountNode
			? createPortal(noThemedWrapper ? { children } : (
				<div className={themeClass}>{children}</div>
			), mountNode)
			: null;
	}, [mountNode, children, themeClass, noThemedWrapper]);
}

// @ts-ignore
const _Portal = forwardRef(Portal);
export { _Portal as Portal };
