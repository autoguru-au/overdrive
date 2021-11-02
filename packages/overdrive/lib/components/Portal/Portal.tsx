import type { ReactNode, Ref, RefObject } from 'react';
import { forwardRef, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { isHtmlElement, setRef } from '../../utils';
import { useTheme } from '../ThemeProvider';

export interface Props {
	children?: ReactNode;
	container?: Element;
}

type RefValue<T> = T extends RefObject<infer T> ? T : never;

function Portal({ children, container }: Props, ref: Ref<typeof container>) {
	const themeClass  = useTheme()?.themeClass;

	const [mountNode, setMountNode] = useState<RefValue<typeof ref> | null>(
		null,
	);

	useLayoutEffect(() => {
		setMountNode(isHtmlElement(container) ? container : document.body);
	}, [container]);

	useLayoutEffect(() => {
		if (mountNode) {
			mountNode.classList.add(themeClass);
			setRef(ref, mountNode);
		}

		return () => {
			mountNode?.classList.remove(themeClass);
			void setRef(ref, null);
		};
	}, [ref, mountNode, themeClass]);

	return mountNode ? createPortal(children, mountNode) : null;
}

const _Portal = forwardRef(Portal);
export { _Portal as Portal };
