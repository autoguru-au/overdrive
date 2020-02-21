import React, {
	Context,
	createContext,
	FunctionComponent,
	useContext,
} from 'react';

interface Props {
	children;
}
export const PortalContext: Context<{
	portalInstance: Element;
}> = createContext(null);

export const usePortalContext = () => useContext(PortalContext);

const buildPortalElement = (): Element => {
	const element: Element = document.createElement('div');
	element.setAttribute('id', `od-portal-${Math.round(Math.random() * 1e6)}`);
	document.body.append(element);

	return element;
};

export const PortalProvider: FunctionComponent<Props> = ({ children }) => {
	const portalContext = usePortalContext();
	const context = portalContext || {
		portalInstance: buildPortalElement(),
	};

	return (
		<PortalContext.Provider value={context}>
			{children}
		</PortalContext.Provider>
	);
};
