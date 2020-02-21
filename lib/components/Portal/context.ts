import { Context, createContext } from 'react';

export const PortalContext: Context<{
	portalInstance: Element;
}> = createContext(null);
