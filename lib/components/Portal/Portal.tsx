import React, { FunctionComponent, ReactNode, useContext } from 'react';
import { createPortal } from 'react-dom';

import { PortalContext } from './context';

interface Props {
	children: ReactNode;
	className?: string;
}

const buildPortalElement = (): Element => {
	const element: Element = document.createElement('div');
	element.setAttribute('id', `od-portal-${Math.round(Math.random() * 1e6)}`);
	document.body.append(element);

	return element;
};

export const Portal: FunctionComponent<Props> = ({ children }) => {
	if (typeof window === 'undefined') return null;

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const portalContext = useContext(PortalContext);
	console.log(portalContext);
	const context = portalContext || {
		portalInstance: buildPortalElement(),
	};

	return (
		<PortalContext.Provider value={context}>
			{createPortal(children, context.portalInstance)}
		</PortalContext.Provider>
	);
};
