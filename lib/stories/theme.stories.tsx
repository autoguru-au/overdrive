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
import { overdriveTokens } from '../themes/theme.css';

import {
	codeVariable,
	gridSwatches,
	labels,
	variantColourSwatch,
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
	tags: ['!autodocs', 'updated'],
};
export default meta;

type Story = StoryObj;

export const ThemeColours: Story = {
	render: () => {
		return (
			<FlexStack gap="7">
				<hgroup>
					<Heading>Theme Colours</Heading>
					<p style={{ fontStyle: 'italic' }}>
						These colours are a work in progress. Tokens may be
						added, renamed or colours reassigned.
					</p>
				</hgroup>
				<FlexStack gap="7">
					{Object.entries(overdriveTokens.color)
						.filter(([key]) => key !== 'gamut')
						.map(([group, colours]) => (
							<FlexStack gap="4" key={group}>
								<Heading as="h2" className={labels}>
									{group}
								</Heading>

								<div className={gridSwatches}>
									{Object.entries(colours).map(
										([colour, cssVar]) => (
											<FlexStack gap="1" key={colour}>
												<div
													className={variantColourSwatch(
														{
															shape: 'rectangle',
														},
													)}
													style={
														{
															background: cssVar,
														} as React.CSSProperties
													}
												></div>

												<div className={labels}>
													{spacesFromCamelCase(
														colour,
													)}
												</div>
												<code className={codeVariable}>
													--od-color-{group}-
													{kebabCaseFromCamelCase(
														colour,
													)}
												</code>
											</FlexStack>
										),
									)}
								</div>
							</FlexStack>
						))}
				</FlexStack>
			</FlexStack>
		);
	},
};

interface ProposedToken {
	name: string;
	token: ContrastColourToken;
	was?: ContrastColourToken;
	note?: string;
}

/**
 * The full proposed Design System 2026 semantic set: current values carried
 * over unchanged except where the contrast guide requires a fix (`was`).
 */
const proposed2026: Record<string, ProposedToken[]> = {
	surface: [
		{ name: 'page', token: 'white' },
		{ name: 'hard', token: 'gray-900' },
		{ name: 'soft', token: 'gray-700' },
		{ name: 'accent', token: 'green-400' },
		{ name: 'success', token: 'green-800', was: 'green-700' },
		{ name: 'info', token: 'blue-600' },
		{ name: 'danger', token: 'red-600' },
		{ name: 'warning', token: 'yellow-800' },
	],
	content: [
		{ name: 'normal', token: 'gray-900' },
		{ name: 'soft', token: 'gray-700' },
		{ name: 'inverse', token: 'white' },
		{ name: 'info', token: 'blue-600' },
		{ name: 'danger', token: 'red-700', was: 'red-600' },
		{ name: 'success', token: 'green-800', was: 'green-700' },
		{
			name: 'warning',
			token: 'yellow-800',
			was: 'yellow-800',
			note: 'fails AA on white; no yellow passes — pending design decision',
		},
	],
	interactive: [
		{ name: 'border', token: 'gray-300' },
		{ name: 'borderMuted', token: 'gray-200' },
		{ name: 'borderDisabled', token: 'gray-100' },
		{ name: 'surfaceDisabled', token: 'gray-400' },
		{ name: 'contentDisabled', token: 'gray-600' },
		{ name: 'link', token: 'green-800', was: 'green-600' },
		{ name: 'linkVisited', token: 'green-900', was: 'green-700' },
		{ name: 'overlayBg', token: 'gray-300' },
		{ name: 'overlayContainer', token: 'white' },
		{ name: 'placeholder', token: 'gray-700' },
		{ name: 'focusOutline', token: 'blue-500' },
	],
};

// smaller inverted ratio = higher contrast
const textOn = (hex: string): string =>
	getContrastRatio(colourMap.white, hex) <
	getContrastRatio(colourMap.gray['900'], hex)
		? colourMap.white
		: colourMap.gray['900'];

const ChangeBadge = ({ was, note }: Pick<ProposedToken, 'was' | 'note'>) => (
	<span
		style={{
			background: note ? colourMap.yellow['200'] : colourMap.blue['100'],
			color: colourMap.gray['900'],
			borderRadius: 4,
			padding: '1px 6px',
			fontWeight: 600,
			fontSize: 11,
			alignSelf: 'flex-start',
		}}
	>
		{note ?? `changed · was ${was}`}
	</span>
);

const Token2026 = ({ name, token, was, note }: ProposedToken) => {
	const hex = contrastGuideColour(token);
	return (
		<FlexStack gap="1">
			<div
				style={{
					background: hex,
					borderRadius: 8,
					boxShadow: `inset 0 0 0 1px ${colourMap.gray['300']}`,
					height: 72,
					padding: '8px 10px',
					display: 'flex',
					alignItems: 'flex-end',
					color: textOn(hex),
					fontSize: 12,
					fontWeight: 600,
				}}
			>
				{token}
			</div>
			<div className={labels}>{spacesFromCamelCase(name)}</div>
			<code className={codeVariable}>{hex.toUpperCase()}</code>
			{was && <ChangeBadge was={was} note={note} />}
		</FlexStack>
	);
};

export const ThemeColours2026: Story = {
	render: () => {
		const changed = Object.entries(proposed2026).flatMap(
			([group, entries]) =>
				entries
					.filter((entry) => entry.was)
					.map((entry) => ({ group, ...entry })),
		);
		return (
			<FlexStack gap="7">
				<hgroup>
					<Heading>Theme Colours 2026</Heading>
					<p style={{ maxWidth: 720 }}>
						The full proposed Design System 2026 semantic set.
						Values are carried over from the current theme except
						where the{' '}
						<a href="?path=/docs/foundation-contrast-guide--docs">
							Contrast Guide
						</a>{' '}
						requires a fix — those tokens carry a badge showing the
						current value they replace. Proposals pending design
						sign-off; the shipped theme is unchanged.
					</p>
				</hgroup>
				<FlexStack gap="7">
					{Object.entries(proposed2026).map(([group, entries]) => (
						<FlexStack gap="4" key={group}>
							<Heading as="h2" className={labels}>
								{group}
							</Heading>
							<div className={gridSwatches}>
								{entries.map((entry) => (
									<Token2026 key={entry.name} {...entry} />
								))}
							</div>
						</FlexStack>
					))}
				</FlexStack>
				<FlexStack gap="4">
					<Heading as="h2" className={labels}>
						What changes vs the current theme
					</Heading>
					<ul style={{ margin: 0, paddingLeft: 20, fontSize: 14 }}>
						{changed.map(({ group, name, token, was, note }) => (
							<li key={`${group}-${name}`}>
								<code className={codeVariable}>
									color.{group}.{name}
								</code>{' '}
								—{' '}
								{was === token
									? `${token} (${note})`
									: `${was} → ${token}`}
							</li>
						))}
					</ul>
				</FlexStack>
			</FlexStack>
		);
	},
};
