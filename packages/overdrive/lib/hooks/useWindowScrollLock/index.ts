import { useEffect } from 'react';

//Block window scrolling till unmounted
export const useWindowScrollLock = () =>
	useEffect(() => {
		const scrollPos = window.scrollY;
		document.documentElement.style.position = 'fixed';
		document.documentElement.style.overflow = 'hidden';
		document.documentElement.style.maxHeight = '100%';
		document.documentElement.style.width = '100%';

		return () => {
			document.documentElement.style.position = '';
			document.documentElement.style.overflow = '';
			document.documentElement.style.maxHeight = '';
			document.documentElement.style.width = '';
			window.scrollTo(0, scrollPos);
		};
	}, []);
