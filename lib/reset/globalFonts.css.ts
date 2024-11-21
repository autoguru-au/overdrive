import { globalFontFace } from '@vanilla-extract/css';

globalFontFace('AvertaStandard', {
	fontStyle: 'normal',
	fontWeight: 400,
	fontDisplay: 'swap',
	src: `local('Averta Std Regular'), local('AvertaStd-Regular'),url('https://cdn.autoguru.com.au/assets/fonts/avertastd-regular-webfont.woff2') format('woff2'),url('https://cdn.autoguru.com.au/assets/fonts/avertastd-regular-webfont.woff') format('woff')`,
});

globalFontFace('AvertaStandard', {
	fontStyle: 'normal',
	fontWeight: 500,
	fontDisplay: 'swap',
	src: `local('Averta Std Semibold'), local('AvertaStd-Semibold'),url('https://cdn.autoguru.com.au/assets/fonts/avertastd-semibold-webfont.woff2') format('woff2'),url('https://cdn.autoguru.com.au/assets/fonts/avertastd-semibold-webfont.woff') format('woff')`,
});

globalFontFace('AvertaStandard', {
	fontStyle: 'normal',
	fontWeight: 700,
	fontDisplay: 'swap',
	src: `local('Averta Std Bold'), local('AvertaStd-Bold'),url('https://cdn.autoguru.com.au/assets/fonts/avertastd-bold-webfont.woff2') format('woff2'),url('https://cdn.autoguru.com.au/assets/fonts/avertastd-bold-webfont.woff') format('woff')`,
});
