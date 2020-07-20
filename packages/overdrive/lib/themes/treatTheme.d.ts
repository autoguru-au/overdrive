declare module 'treat/theme' {
	type OverdriveTheme = import('./makeTheme').OverdriveTheme;

	export interface Theme extends OverdriveTheme {}
}
