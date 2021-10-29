declare module 'treat/theme' {
	type OverdriveTheme = import('./makeTheme').OverdriveTheme;

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface Theme extends OverdriveTheme {}
}
