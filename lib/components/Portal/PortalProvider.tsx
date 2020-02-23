import React, {
	Context,
	createContext,
	FunctionComponent,
	RefObject,
	useContext,
	useRef,
} from 'react';

export const PortalContext: Context<{
	portalInstanceRef: RefObject<HTMLDivElement>;
}> = createContext(null);

export const usePortalContext = () => useContext(PortalContext);

const buildPortalElement = (): HTMLDivElement => {
	if (typeof window === 'undefined') return null;

	const element: HTMLDivElement = document.createElement('div');
	document.body.append(element);

	return element;
};

export const PortalProvider: FunctionComponent = ({ children }) => {
	const rootElementRef = useRef<HTMLDivElement>(buildPortalElement());
	const portalContext = usePortalContext();
	const context = rootElementRef?.current
		? portalContext ?? {
				portalInstanceRef: rootElementRef,
		  }
		: null;

	return (
		<PortalContext.Provider value={context}>
			{children}
		</PortalContext.Provider>
	);
};
