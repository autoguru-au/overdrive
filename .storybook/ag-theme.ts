import { create } from '@storybook/theming';

const brand = {
	brandTitle: 'AutoGuru - Car servicing and repairs made easy',
	brandUrl: 'https://www.autoguru.com.au/',
	colorPrimary: '#01c68c',
	colorSecondary: '#00dd95',
	barHoverColor: '#01c68c',
};

export const lightTheme = create({
	...brand,
	base: 'light',
	brandImage: 'https://cdn.autoguru.com.au/images/logos/otto.svg',
	barSelectedColor: '#05987a',
	barTextColor: '#34384c',
});

export const darkTheme = create({
	...brand,
	base: 'dark',
	brandImage: 'https://cdn.autoguru.com.au/images/logos/otto-white.svg',
	barSelectedColor: '#00dd95',
	barTextColor: '#d4d9dd',
	textColor: '#d4d9dd',
});

export default { light: lightTheme, dark: darkTheme };
