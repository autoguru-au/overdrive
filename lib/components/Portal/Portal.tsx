import React, {
	createContext,
	useContext,
	useLayoutEffect,
	useState,
} from 'react';
import { createPortal } from 'react-dom';

const PortalContext = createContext<HTMLElement>(
	typeof document === 'undefined' ? null : document.body,
);

export const usePortalContext = () => useContext(PortalContext);

export function Portal({ children }) {
	const context = useContext(PortalContext);
	const [container] = useState(() => {
		if (typeof document !== 'undefined') {
			return document.createElement('div');
		}

		return null;
	});

	useLayoutEffect(() => {
		if (container && context) {
			context.appendChild(container);
			return () => void context.removeChild(container);
		}

		return undefined;
	}, [container, context]);

	return (
		<PortalContext.Provider value={container}>
			{container && createPortal(children, container)}
		</PortalContext.Provider>
	);
}
