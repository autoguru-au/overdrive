import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading';
import { colourMap } from '../themes/base/colours';
import {
	contrastGuideColour,
	type ContrastColourToken,
} from '../themes/base/contrastGuide';
import { getContrastRatio } from '../themes/helpers';

import {
	labels,
	tokenCard,
	tokenCode,
	tokenDescription,
	tokenGrid,
} from './helpers/styles.css';

function spacesFromCamelCase(text: string) {
	// eslint-disable-next-line unicorn/prefer-string-replace-all
	return text.replace(/([A-Z])/g, ' $1').trim();
}

function kebabCaseFromCamelCase(text: string) {
	return (
		text
			// eslint-disable-next-line unicorn/prefer-string-replace-all
			.replace(/([A-Z])/g, '-$1')
			.trim()
			.toLocaleLowerCase()
	);
}

const meta: Meta = {
	title: 'Foundation/Theme Colours',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

interface ProposedToken {
	name: string;
	token: ContrastColourToken;
	/** Plain-language guidance on when to use this token */
	description: string;
	was?: ContrastColourToken;
	note?: string;
}

interface TokenSection {
	title: string;
	tokens: ProposedToken[];
}

interface TokenGroup {
	group: string;
	title: string;
	blurb: string;
	sections: TokenSection[];
}

/**
 * The full semantic colour set: current values carried over unchanged except
 * where a token needs an AA-safe fix (`was`), organised by human usage
 * category.
 */
const semanticTokens: TokenGroup[] = [
	{
		group: 'surface',
		title: 'Surface',
		blurb: 'Background colours for pages, panels and feedback banners.',
		sections: [
			{
				title: 'Base surfaces',
				tokens: [
					{
						name: 'page',
						token: 'white',
						description: 'The default page background.',
					},
					{
						name: 'hard',
						token: 'gray-900',
						description:
							'High-contrast dark surface — headers, footers, hero panels. Pair with inverse (white) content.',
					},
					{
						name: 'soft',
						token: 'gray-700',
						description:
							'Softer dark surface for secondary panels. Pair with inverse content.',
					},
				],
			},
			{
				title: 'Brand & feedback surfaces',
				tokens: [
					{
						name: 'accent',
						token: 'green-400',
						description:
							'Brand highlight — promo strips, selected states. Use gray-900 text.',
					},
					{
						name: 'success',
						token: 'green-800',
						was: 'green-700',
						description:
							'Positive feedback — confirmations, success banners. White text.',
					},
					{
						name: 'info',
						token: 'blue-600',
						description:
							'Informational notices and hints. White text.',
					},
					{
						name: 'danger',
						token: 'red-600',
						description:
							'Errors and destructive actions. White text.',
					},
					{
						name: 'warning',
						token: 'yellow-800',
						description:
							'Caution banners. Must use gray-900 text — never white on yellow.',
					},
				],
			},
		],
	},
	{
		group: 'content',
		title: 'Content',
		blurb: 'Text and icon colours that sit on the surfaces above.',
		sections: [
			{
				title: 'Body text',
				tokens: [
					{
						name: 'normal',
						token: 'gray-900',
						description: 'Default body text on light surfaces.',
					},
					{
						name: 'soft',
						token: 'gray-700',
						description: 'Secondary and supporting text.',
					},
					{
						name: 'inverse',
						token: 'white',
						description:
							'Text on hard, soft and strong feedback surfaces.',
					},
				],
			},
			{
				title: 'Status text',
				tokens: [
					{
						name: 'info',
						token: 'blue-600',
						description: 'Informational text on white.',
					},
					{
						name: 'danger',
						token: 'red-700',
						was: 'red-600',
						description: 'Error text on white.',
					},
					{
						name: 'success',
						token: 'green-800',
						was: 'green-700',
						description: 'Positive text on white.',
					},
					{
						name: 'warning',
						token: 'yellow-800',
						was: 'yellow-800',
						description:
							'Caution text — avoid on white; prefer gray-900 on a warning surface.',
						note: 'fails AA on white; no yellow passes',
					},
				],
			},
		],
	},
	{
		group: 'interactive',
		title: 'Interactive',
		blurb: 'Colours for controls: borders, links, focus, overlays and disabled states.',
		sections: [
			{
				title: 'Borders',
				tokens: [
					{
						name: 'border',
						token: 'gray-300',
						description:
							'Default border for inputs, cards and dividers.',
					},
					{
						name: 'borderMuted',
						token: 'gray-200',
						description: 'Subtle border for quiet separation.',
					},
					{
						name: 'borderDisabled',
						token: 'gray-100',
						description: 'Border of disabled controls.',
					},
				],
			},
			{
				title: 'Disabled states',
				tokens: [
					{
						name: 'surfaceDisabled',
						token: 'gray-400',
						description: 'Background of disabled controls.',
					},
					{
						name: 'contentDisabled',
						token: 'gray-600',
						description: 'Text and icons inside disabled controls.',
					},
				],
			},
			{
				title: 'Links',
				tokens: [
					{
						name: 'link',
						token: 'green-800',
						was: 'green-600',
						description:
							'Inline text links — deepened so links pass AA on white.',
					},
					{
						name: 'linkVisited',
						token: 'green-900',
						was: 'green-700',
						description: 'Visited links — one step darker.',
					},
				],
			},
			{
				title: 'Overlays',
				tokens: [
					{
						name: 'overlayBg',
						token: 'gray-300',
						description: 'Scrim behind modals and drawers.',
					},
					{
						name: 'overlayContainer',
						token: 'white',
						description: 'Surface of the modal or popover itself.',
					},
				],
			},
			{
				title: 'Focus & input',
				tokens: [
					{
						name: 'focusOutline',
						token: 'blue-500',
						description:
							'Keyboard focus ring — blue so it never blends with brand green.',
					},
					{
						name: 'placeholder',
						token: 'gray-700',
						description: 'Placeholder text inside inputs.',
					},
				],
			},
		],
	},
];

// smaller inverted ratio = higher contrast
const textOn = (hex: string): string =>
	getContrastRatio(colourMap.white, hex) <
	getContrastRatio(colourMap.gray['900'], hex)
		? colourMap.white
		: colourMap.gray['900'];

const ChangeBadge = ({ note }: Required<Pick<ProposedToken, 'note'>>) => (
	<span
		style={{
			display: 'inline-flex',
			alignItems: 'center',
			gap: 6,
			background: colourMap.yellow['200'],
			color: colourMap.gray['900'],
			borderRadius: 4,
			padding: '2px 8px',
			fontWeight: 600,
			fontSize: 11,
			alignSelf: 'flex-start',
		}}
	>
		{note}
	</span>
);

const SemanticToken = ({
	group,
	name,
	token,
	description,
	note,
}: ProposedToken & { group: string }) => {
	const hex = contrastGuideColour(token);
	return (
		<div className={tokenCard}>
			<div
				style={{
					background: hex,
					borderRadius: 8,
					boxShadow: `inset 0 0 0 1px ${colourMap.gray['300']}`,
					height: 80,
					padding: '10px 12px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
					color: textOn(hex),
				}}
			>
				<div style={{ fontWeight: 700, fontSize: 13, lineHeight: 1.4 }}>
					{token}
				</div>
				<div style={{ fontSize: 11, opacity: 0.85, lineHeight: 1.4 }}>
					{hex.toUpperCase()}
				</div>
			</div>
			<div className={labels} style={{ fontWeight: 600, fontSize: 14 }}>
				{spacesFromCamelCase(name)}
			</div>
			<div className={tokenDescription}>{description}</div>
			<code className={tokenCode}>
				--od-color-{group}-{kebabCaseFromCamelCase(name)}
			</code>
			{note && <ChangeBadge note={note} />}
		</div>
	);
};

export const ThemeColours: Story = {
	render: () => (
		<FlexStack gap="7">
			<hgroup>
				<Heading>Theme Colours</Heading>
				<p style={{ maxWidth: 720 }}>
					The full semantic colour set, organised by usage.
				</p>
			</hgroup>
			<FlexStack gap="7">
				{semanticTokens.map(({ group, title, blurb, sections }) => (
					<FlexStack gap="4" key={group}>
						<hgroup>
							<Heading as="h2" className={labels}>
								{title}
							</Heading>
							<p
								style={{
									margin: '4px 0 0',
									fontSize: 14,
									color: colourMap.gray['600'],
								}}
							>
								{blurb}
							</p>
						</hgroup>
						{sections.map((section) => (
							<FlexStack gap="3" key={section.title}>
								<div
									style={{
										fontSize: 13,
										fontWeight: 700,
										color: colourMap.gray['900'],
										borderBottom: `1px solid ${colourMap.gray['200']}`,
										paddingBottom: 4,
									}}
								>
									{section.title}
								</div>
								<div className={tokenGrid}>
									{section.tokens.map((entry) => (
										<SemanticToken
											key={entry.name}
											group={group}
											{...entry}
										/>
									))}
								</div>
							</FlexStack>
						))}
					</FlexStack>
				))}
			</FlexStack>
		</FlexStack>
	),
};
