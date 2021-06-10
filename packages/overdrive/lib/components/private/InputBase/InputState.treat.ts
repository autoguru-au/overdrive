import { style, styleMap, styleTree } from 'treat';
import { shadedColour } from '../../../themes/helpers';

const activeColour = style(({ typography, shadeIntensity, isDark }) => ({
	color: shadedColour(
		typography.colour.information,
		shadeIntensity.slight,
		'backward',
		isDark,
	),
}));

const activeBorderColour = style(({ typography, shadeIntensity, isDark }) => ({
	borderColor: shadedColour(
		typography.colour.information,
		shadeIntensity.slight,
		'backward',
		isDark,
	),
}));

export const disabled = styleMap(
	({ typography, shadeIntensity, isDark, transparency }) => ({
		colour: {
			color: shadedColour(
				typography.colour.muted,
				shadeIntensity.intense,
				'forward',
				isDark,
				transparency.medium,
			),
		},
		borderColour: {
			borderColor: shadedColour(
				typography.colour.muted,
				null,
				'forward',
				isDark,
				transparency.intense,
			),
		},
	}),
);

export const natural = styleTree(
	({ typography, shadeIntensity, isDark, transparency }, styleNode) => ({
		default: {
			colour: styleNode({
				color: shadedColour(
					typography.colour.muted,
					shadeIntensity.medium,
					'forward',
					isDark,
				),
			}),
			borderColour: styleNode({
				borderColor: shadedColour(
					typography.colour.muted,
					shadeIntensity.intense,
					'forward',
					isDark,
					transparency.medium,
				),
			}),
		},
		hover: {
			colour: activeColour,
			borderColour: activeBorderColour,
		},
		active: {
			colour: activeColour,
			borderColour: activeBorderColour,
		},
	}),
);

export const active = {
	default: {
		colour: activeColour,
		borderColour: activeBorderColour,
	},
	hover: {
		colour: activeColour,
		borderColour: activeBorderColour,
	},
	active: {
		colour: activeColour,
		borderColour: activeBorderColour,
	},
};

export const success = styleTree(
	({ typography, shadeIntensity, isDark }, styleNode) => ({
		default: {
			colour: styleNode({ color: typography.colour.success }),
			borderColour: styleNode({ borderColor: typography.colour.success }),
		},
		hover: {
			colour: styleNode({
				color: shadedColour(
					typography.colour.success,
					shadeIntensity.medium,
					'forward',
					isDark,
				),
			}),
			borderColour: styleNode({
				borderColor: shadedColour(
					typography.colour.success,
					shadeIntensity.medium,
					'forward',
					isDark,
				),
			}),
		},
		active: {
			colour: styleNode({
				color: shadedColour(
					typography.colour.success,
					shadeIntensity.medium,
					'backward',
					isDark,
				),
			}),
			borderColour: styleNode({
				borderColor: shadedColour(
					typography.colour.success,
					shadeIntensity.medium,
					'backward',
					isDark,
				),
			}),
		},
	}),
);

export const error = styleTree(
	({ typography, shadeIntensity, isDark }, styleNode) => ({
		default: {
			colour: styleNode({
				color: shadedColour(
					typography.colour.danger,
					shadeIntensity.slight,
					'backward',
					isDark,
				),
			}),
			borderColour: styleNode({
				borderColor: shadedColour(
					typography.colour.danger,
					shadeIntensity.slight,
					'backward',
					isDark,
				),
			}),
		},
		hover: {
			colour: styleNode({ color: typography.colour.danger }),
			borderColour: styleNode({ borderColor: typography.colour.danger }),
		},
		active: {
			colour: styleNode({
				color: shadedColour(
					typography.colour.danger,
					shadeIntensity.medium,
					'backward',
					isDark,
				),
			}),
			borderColour: styleNode({
				borderColor: shadedColour(
					typography.colour.danger,
					shadeIntensity.medium,
					'backward',
					isDark,
				),
			}),
		},
	}),
);
