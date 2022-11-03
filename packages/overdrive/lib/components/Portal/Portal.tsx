import type { ReactNode, Ref, RefObject } from 'react';
import * as React from 'react';
import { forwardRef, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { isBrowser, isHtmlElement, setRef } from '../../utils';
import { useTheme } from '../ThemeProvider';

export interface Props {
	children?: ReactNode;
	container?: Element;
	noThemedWrapper?: boolean;
}

type RefValue<T> = T extends RefObject<infer T> ? T : never;

function Portal(
	{ children, container, noThemedWrapper }: Props,
	ref: Ref<typeof container>,
) {
	const themeClass = useTheme()?.themeClass;

	const [mountNode, setMountNode] = useState<RefValue<typeof ref> | null>(
		null,
	);

	if (isBrowser) {
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
	}

	if (!mountNode) return null;

	return noThemedWrapper
		? createPortal(children, mountNode)
		: createPortal(<div className={themeClass}>{children}</div>, mountNode);
}

const _Portal = forwardRef(Portal);
export { _Portal as Portal };

export default Portal;
