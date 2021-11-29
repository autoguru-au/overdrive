import { colord } from 'colord';

export const shadedColour = (
	colour: string,
	intensity: number | string | null,
	direction: 'forward' | 'backward',
	isDarkTheme = false,
	transparency: number | string | null = 0,
): string => {
	const intensityValue =
		typeof intensity === 'string' ? Number(intensity) : intensity;
	const transparencyValue =
		typeof transparency === 'string' ? Number(transparency) : transparency;

	return colord(colour)
		[
			(!isDarkTheme && direction === 'backward') ||
			(isDarkTheme && direction === 'forward')
				? 'darken'
				: 'lighten'
		](intensityValue || void 0)
		.alpha(
			typeof transparencyValue === 'number' ? 1 - transparencyValue : 1,
		)
		.toHex();
};
