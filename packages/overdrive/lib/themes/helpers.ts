import { colord } from 'colord';

export const shadedColour = (
	colour: string,
	intensity: number | null,
	direction: 'forward' | 'backward',
	isDarkTheme = false,
	transparency: number | null = 0,
): string =>
	colord(colour)
		[
			(!isDarkTheme && direction === 'backward') ||
			(isDarkTheme && direction === 'forward')
				? 'darken'
				: 'lighten'
		](intensity || void 0)
		.alpha(typeof transparency === 'number' ? 1 - transparency : 1)
		.toHex();
