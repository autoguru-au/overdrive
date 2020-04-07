import { forwardRef, ReactElement, RefObject, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { isHtmlElement, setRef } from '../../utils';

export interface Props {
	children?: ReactElement | ReactElement[] | null;
	container?: Element;
}

type RefValue<T> = T extends RefObject<infer T> ? T : never;

export const Portal = forwardRef<Element, Props>(
	({ children, container }, ref) => {
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

			return () => void setRef(ref, null);
		}, [ref, mountNode]);

		return mountNode ? createPortal(children, mountNode) : mountNode;
	},
);
