import { colord } from "colord";

export const shadedColour = (colour: string, intensity: number, direction: 'forward'|'backward', isDarkTheme = false):string=>
	colord(colour)[((!isDarkTheme && direction === 'backward')||(isDarkTheme && direction === 'forward'))?'darken':'lighten'](intensity).toHex()
