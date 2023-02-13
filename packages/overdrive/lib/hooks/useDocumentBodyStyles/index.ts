import { tokens } from '../../themes/base/tokens';
import { useEffect } from 'react';
import { isBrowser } from '../../utils';

export const useDocumentBodyStyles = () => {
	useEffect(() => {
		if (!isBrowser) return;
		document.body.style.backgroundColor = tokens.body.backgroundColour;
		document.body.style.color = tokens.body.colour;
	}, []);

};
