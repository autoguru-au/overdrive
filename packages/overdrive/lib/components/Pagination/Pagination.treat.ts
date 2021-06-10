import { style } from 'treat';
import { shadedColour } from '../../themes/helpers';

const paginationBubbleSize = '36px';

export const disabled = style(
	({ colours, shadeIntensity, isDark, transparency }) => ({
		color: shadedColour(
			colours.background.body,
			shadeIntensity.medium,
			'backward',
			isDark,
			transparency.slight,
		),
	}),
);

export const selectedItem = style(() => ({
	transition: 'none',
}));

export const activeItem = style(
	({ animation, colours, shadeIntensity, isDark, transparency }) => ({
		lineHeight: `calc(${paginationBubbleSize} - 3px)`,
		width: paginationBubbleSize,
		height: paginationBubbleSize,
		cursor: 'pointer',
		transition: `background-color 0.2s ${animation.easing.decelerate} 0s`,

		selectors: {
			[`&:not(${selectedItem}):hover`]: {
				backgroundColor: shadedColour(
					colours.background.body,
					shadeIntensity.slight,
					'backward',
					isDark,
					transparency.medium,
				),
			},
			[`&:not(${selectedItem}):active`]: {
				backgroundColor: shadedColour(
					colours.background.body,
					shadeIntensity.slight,
					'backward',
					isDark,
					transparency.slight,
				),
			},
		},
	}),
);
