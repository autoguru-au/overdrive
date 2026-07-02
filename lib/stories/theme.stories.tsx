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

const TokenDot = ({ token }: { token: ContrastColourToken }) => (
	<span
		style={{
			display: 'inline-block',
			width: 10,
			height: 10,
			borderRadius: '50%',
			background: contrastGuideColour(token),
			boxShadow: `inset 0 0 0 1px ${colourMap.gray['300']}`,
			flexShrink: 0,
		}}
	/>
);

const ChangeBadge = ({ was, note }: Pick<ProposedToken, 'was' | 'note'>) => (
	<span
		style={{
			display: 'inline-flex',
			alignItems: 'center',
			gap: 6,
			background: note ? colourMap.yellow['200'] : colourMap.blue['100'],
			color: colourMap.gray['900'],
			borderRadius: 4,
			padding: '2px 8px',
			fontWeight: 600,
			fontSize: 11,
			alignSelf: 'flex-start',
		}}
	>
		{was && <TokenDot token={was} />}
		{note ?? `was ${was}`}
	</span>
);

const Token2026 = ({
	group,
	name,
	token,
	was,
	note,
}: ProposedToken & { group: string }) => {
	const hex = contrastGuideColour(token);
	return (
		<FlexStack gap="1">
			<div
				style={{
					background: hex,
					borderRadius: 10,
					boxShadow: `inset 0 0 0 1px ${colourMap.gray['300']}`,
					height: 88,
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
			<div className={labels}>{spacesFromCamelCase(name)}</div>
			<code className={codeVariable}>
				--od-color-{group}-{kebabCaseFromCamelCase(name)}
			</code>
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
									<Token2026
										key={entry.name}
										group={group}
										{...entry}
									/>
								))}
							</div>
						</FlexStack>
					))}
				</FlexStack>
				<FlexStack gap="4">
					<Heading as="h2" className={labels}>
						What changes vs the current theme
					</Heading>
					<FlexStack gap="2">
						{changed.map(({ group, name, token, was, note }) => (
							<div
								key={`${group}-${name}`}
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: 8,
									fontSize: 13,
									flexWrap: 'wrap',
								}}
							>
								<code
									className={codeVariable}
									style={{ minWidth: 220 }}
								>
									color.{group}.{name}
								</code>
								{was && <TokenDot token={was} />}
								{was}
								{was !== token && (
									<>
										<span
											aria-hidden
											style={{
												color: colourMap.gray['600'],
											}}
										>
											→
										</span>
										<TokenDot token={token} />
										{token}
									</>
								)}
								{note && (
									<span
										style={{
											color: colourMap.gray['600'],
											fontSize: 12,
										}}
									>
										({note})
									</span>
								)}
							</div>
						))}
					</FlexStack>
				</FlexStack>
			</FlexStack>
		);
	},
};
