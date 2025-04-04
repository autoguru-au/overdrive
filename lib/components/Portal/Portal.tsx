import React, { forwardRef, useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { isBrowser, isHtmlElement, setRef } from '../../utils';
import { useTheme } from '../OverdriveProvider';

export interface PortalProps {
	children?: React.ReactNode;
	container?: HTMLElement;
	noThemedWrapper?: boolean;
}

type RefValue<T> = T extends React.RefObject<infer T> ? T : never;

function Portal(
	{ children, container, noThemedWrapper }: PortalProps,
	ref: React.Ref<typeof container>,
) {
	const { themeClass, portalMountPoint } = useTheme();
	const [mountPoint, setMountPoint] = useState<HTMLElement | null>(null);
	const [mountNode, setMountNode] = useState<RefValue<typeof ref> | null>(
		null,
	);

	// use local state to set the mount point if it populates after the component mounts
	useEffect(() => {
		if (!isBrowser || !portalMountPoint?.current) return;

		if (mountPoint !== portalMountPoint.current) {
			setMountPoint(portalMountPoint.current);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [portalMountPoint?.current]);

	useLayoutEffect(() => {
		if (!isBrowser) return;
		if (isHtmlElement(mountPoint)) {
			setMountNode(mountPoint);
			return;
		}
		setMountNode(isHtmlElement(container) ? container : document.body);
	}, [container, mountPoint]);

	useLayoutEffect(() => {
		if (!isBrowser) return;

		if (mountNode) {
			setRef(ref, mountNode);
		}

		return () => {
			setRef(ref, null);
		};
	}, [ref, mountNode]);

	if (!mountNode) return null;

	return noThemedWrapper
		? createPortal(children, mountNode)
		: createPortal(<div className={themeClass}>{children}</div>, mountNode);
}

const _Portal = forwardRef(Portal);
export { _Portal as Portal };

export default Portal;
