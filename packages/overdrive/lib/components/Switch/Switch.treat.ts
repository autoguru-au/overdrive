import { style, styleMap } from 'treat';
import { shadedColour } from '../../themes/helpers';

const handleSize = '24px';
const handleOffset = '2px';
const borderSize = '1px';

export const root = style(({ border }) => ({
	width: `calc((2 * ${handleSize}) + ${handleOffset} - 2 * ${borderSize})`,
	height: `calc(${handleSize} + (${handleOffset} * 2))`,
	transition: 'background-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
	border: `${borderSize} solid ${border.colours.gray}`,
}));

export const handle = styleMap(() => ({
	default: {
		top: `calc(${handleOffset} - ${borderSize})`,
		left: `calc(${handleOffset} - ${borderSize})`,
		width: `${handleSize}`,
		height: `${handleSize}`,
		transition: 'transform 0.2s cubic-bezier(0, 0, 0.2, 1) 0s',
		willChange: 'transform',
	},
	transition: {
		transform: `translateX(calc(${handleSize} - (2 * ${handleOffset})))`,
	},
}));

export const toggled = style(({ colours, isDark, shadeIntensity }) => ({
	borderColor: shadedColour(
		colours.intent.primary.background,
		shadeIntensity.slight,
		'backward',
		isDark,
	),
}));

export const disabled = styleMap(
	({ border, colours, shadeIntensity, isDark, transparency }) => ({
		default: {
			selectors: {
				'&[aria-disabled=true]': {
					cursor: 'not-allowed',
					borderColor: border.colours.light,
					backgroundColor: shadedColour(
						border.colours.light,
						shadeIntensity.slight,
						'forward',
						isDark,
					),
				},
			},
		},
		toggled: {
			selectors: {
				'&[aria-disabled=true]': {
					borderColor: shadedColour(
						border.colours.light,
						shadeIntensity.slight,
						'forward',
						isDark,
					),
					backgroundColor: shadedColour(
						colours.intent.primary.background,
						null,
						'forward',
						isDark,
						transparency.intense,
					),
				},
			},
		},
	}),
);
