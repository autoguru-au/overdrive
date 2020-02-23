import { invariant } from '@autoguru/utilities';
import { FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

import { usePortalContext } from './PortalProvider';

interface Props {
	className?: string;
}

export const Portal: FunctionComponent<Props> = ({ children }) => {
	if (typeof window === 'undefined') return null;

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const portalContext = usePortalContext();
	invariant(portalContext, 'There is no portal context provided');

	return createPortal(children, portalContext.portalInstanceRef.current);
};
