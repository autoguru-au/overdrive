import { WarningIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Heading } from '../components/Heading/Heading';
import { Icon } from '../components/Icon';
import { Text } from '../components/Text/Text';
import {
	namedTextStyleMap,
	TEXT_STYLES,
	type NamedTextStyle,
} from '../styles/typography';
import { overdriveTokens } from '../themes';
import { tokens } from '../themes/base/tokens';

const { size: sizeScale, fontWeight } = tokens.typography;
const { gamut } = overdriveTokens.color;

// Weights sanctioned by DS 2026 typography — `medium` (500) is a token but is
// not part of the type spec, so it is flagged deprecated here.
const DEPRECATED_WEIGHTS = new Set(['medium']);

const SAMPLE = 'Sphinx of black quartz, judge my vow';

// ---------------------------------------------------------------------------
// Design tokens for this page — mirror the Foundation/Colour Palette styling so
// every Foundation page reads as one system.
// ---------------------------------------------------------------------------
const INK = '#212338';
const SOFT = '#5c6172';
const BORDER = '#e4e7ea';
const HAIRLINE = '#eef0f2';
const SURFACE = '#f6f7f9';
const MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace';
const SHADOW =
	'0 1px 2px rgba(33, 35, 56, 0.04), 0 8px 24px rgba(33, 35, 56, 0.06)';

const page: React.CSSProperties = {
	color: INK,
	display: 'flex',
	flexDirection: 'column',
	gap: 48,
	maxWidth: 960,
};

const lead: React.CSSProperties = {
	color: SOFT,
	fontSize: 15,
	lineHeight: 1.6,
	margin: '8px 0 0',
	maxWidth: 720,
};

const card: React.CSSProperties = {
	background: '#ffffff',
	border: `1px solid ${BORDER}`,
	borderRadius: 16,
	boxShadow: SHADOW,
	padding: 24,
};

const chip: React.CSSProperties = {
	color: INK,
	fontFamily: MONO,
	fontSize: 13,
	fontWeight: 700,
	letterSpacing: '0.02em',
};

const metaChip: React.CSSProperties = {
	color: SOFT,
	fontFamily: MONO,
	fontSize: 11.5,
};

const weightTag: React.CSSProperties = {
	background: SURFACE,
	borderRadius: 999,
	color: SOFT,
	fontSize: 10.5,
	letterSpacing: '0.06em',
	padding: '2px 8px',
	textTransform: 'uppercase',
};

const codeVar: React.CSSProperties = {
	background: SURFACE,
	borderRadius: 5,
	color: INK,
	fontFamily: MONO,
	fontSize: '0.85em',
	padding: '1px 5px',
};

const sectionHeading = (children: React.ReactNode, sub?: React.ReactNode) => (
	<div style={{ marginBottom: 8 }}>
		<Heading as="h2">{children}</Heading>
		{sub ? <p style={lead}>{sub}</p> : null}
	</div>
);

// Shared table shell + row so every scale on this page reads identically.
const tableCard: React.CSSProperties = {
	...card,
	overflow: 'hidden',
	padding: 0,
};

const tableRow = (
	columns: string,
	first: boolean,
	align: React.CSSProperties['alignItems'] = 'baseline',
): React.CSSProperties => ({
	alignItems: align,
	borderTop: first ? 'none' : `1px solid ${HAIRLINE}`,
	display: 'grid',
	gap: 16,
	gridTemplateColumns: columns,
	padding: '16px 24px',
});

const headCell: React.CSSProperties = {
	color: SOFT,
	fontSize: 10.5,
	fontWeight: 700,
	letterSpacing: '0.08em',
	textTransform: 'uppercase',
};

const TableHead = ({
	columns,
	labels,
}: {
	columns: string;
	labels: string[];
}) => (
	<div
		style={{
			...tableRow(columns, true, 'center'),
			background: SURFACE,
			borderBottom: `1px solid ${BORDER}`,
			paddingBottom: 12,
			paddingTop: 12,
		}}
	>
		{labels.map((label) => (
			<span key={label} style={headCell}>
				{label}
			</span>
		))}
	</div>
);

// ---------------------------------------------------------------------------
// Named styles — the preferred 2026 scale. One specimen card per style.
// ---------------------------------------------------------------------------
const weightsByStyle: Record<
	NamedTextStyle,
	Array<'normal' | 'semiBold' | 'bold'>
> = {
	h1: ['bold', 'normal'],
	h2: ['bold', 'normal'],
	h3: ['bold', 'normal'],
	h4: ['bold', 'normal'],
	p1: ['normal', 'semiBold', 'bold'],
	p2: ['normal', 'semiBold', 'bold'],
	p3: ['normal', 'semiBold', 'bold'],
	p4: ['normal', 'bold'],
};

const NAMED_COLUMNS = '56px 130px 148px minmax(0, 1fr)';

const NamedStyles = () => (
	<section>
		{sectionHeading(
			'Named styles',
			<>
				The preferred way to pick a size in new and updated designs.
				Accepted by the <code style={codeVar}>size</code> prop of{' '}
				<code style={codeVar}>&lt;Text&gt;</code> and{' '}
				<code style={codeVar}>&lt;Heading&gt;</code>. Each style applies its
				default weight — bold for headings, regular for paragraphs — unless{' '}
				<code style={codeVar}>weight</code> is set.
			</>,
		)}
		<div style={tableCard}>
			<TableHead
				columns={NAMED_COLUMNS}
				labels={['Style', 'Size / Line height', 'Weights', 'Sample']}
			/>
			{TEXT_STYLES.map((name, i) => {
				const { size } = namedTextStyleMap[name];
				const { fontSize, lineHeight } = sizeScale[size];
				return (
					<div
						key={name}
						style={tableRow(NAMED_COLUMNS, i === 0, 'center')}
					>
						<span style={chip}>{name}</span>
						<span style={metaChip}>
							{fontSize} / {lineHeight}
						</span>
						<div
							style={{
								alignItems: 'flex-start',
								display: 'flex',
								flexDirection: 'column',
								gap: 6,
							}}
						>
							{weightsByStyle[name].map((weight) => (
								<span key={weight} style={weightTag}>
									{weight}
								</span>
							))}
						</div>
						<Text size={name}>{SAMPLE}</Text>
					</div>
				);
			})}
		</div>
	</section>
);

// ---------------------------------------------------------------------------
// Legacy size scale — untouched numeric scale, shown compactly.
// ---------------------------------------------------------------------------
const LEGACY_COLUMNS = '84px 130px minmax(0, 1fr)';

const LegacyScale = () => {
	const rows = Object.entries(sizeScale)
		.filter(([key]) => !Number.isNaN(Number(key)))
		.reverse();
	return (
		<section>
			{sectionHeading(
				'Legacy size scale',
				<>
					The numeric size scale (<code style={codeVar}>1</code>–
					<code style={codeVar}>9</code>) is untouched, so existing screens
					don’t change. Adopt the named styles above screen by screen.
				</>,
			)}
			<div style={tableCard}>
				<TableHead
					columns={LEGACY_COLUMNS}
					labels={['Scale', 'Size / Line height', 'Sample']}
				/>
				{rows.map(([key, { fontSize, lineHeight }], i) => (
					<div key={key} style={tableRow(LEGACY_COLUMNS, i === 0)}>
						<span style={chip}>size {key}</span>
						<span style={metaChip}>
							{fontSize} / {lineHeight}
						</span>
						<Text size={key as keyof typeof sizeScale}>{SAMPLE}</Text>
					</div>
				))}
			</div>
		</section>
	);
};

// ---------------------------------------------------------------------------
// Font weights.
// ---------------------------------------------------------------------------
const WEIGHT_COLUMNS = '132px 72px minmax(0, 1fr) 200px';

const FontWeights = () => (
	<section>
		{sectionHeading(
			'Font weights',
			'Averta Std ships four weights. Use regular for prose, semiBold for emphasis and labels, and bold for headings.',
		)}
		<div style={tableCard}>
			<TableHead
				columns={WEIGHT_COLUMNS}
				labels={['Weight', 'Value', 'Sample', 'Status']}
			/>
			{Object.entries(fontWeight).map(([name, value], i) => {
				const deprecated = DEPRECATED_WEIGHTS.has(name);
				return (
					<div
						key={name}
						style={{
							...tableRow(WEIGHT_COLUMNS, i === 0, 'center'),
							...(deprecated
								? { background: gamut.yellow[100] }
								: null),
						}}
					>
						<span style={chip}>{name}</span>
						<span style={metaChip}>{value}</span>
						<Text
							size="p1"
							weight={name as keyof typeof fontWeight}
						>
							{SAMPLE}
						</Text>
						{deprecated ? (
							<span
								style={{
									alignItems: 'center',
									color: SOFT,
									display: 'inline-flex',
									fontSize: 11.5,
									gap: 6,
								}}
							>
								<span
									style={{
										color: gamut.yellow[500],
										display: 'inline-flex',
										height: 15,
										width: 15,
									}}
								>
									<Icon icon={WarningIcon} size="100%" />
								</span>
								deprecated · do not use
							</span>
						) : (
							<span aria-hidden="true" />
						)}
					</div>
				);
			})}
		</div>
	</section>
);

// ---------------------------------------------------------------------------
// Usage rules — guidance cards.
// ---------------------------------------------------------------------------
const usageRules: Array<{ label: string; body: React.ReactNode }> = [
	{
		label: 'Headings',
		body: (
			<>
				Use <code style={codeVar}>h1</code>–<code style={codeVar}>h4</code>{' '}
				for the page hierarchy. <code style={codeVar}>h1</code> is reserved
				for the page title (one per page); <code style={codeVar}>h2</code>{' '}
				for major sections; <code style={codeVar}>h3</code>/
				<code style={codeVar}>h4</code> for sub-sections and card titles.
				The 2026 hierarchy stops at <code style={codeVar}>h4</code>.
			</>
		),
	},
	{
		label: 'Body',
		body: (
			<>
				<code style={codeVar}>p1</code> (16px) is the default reading size
				for content pages. In dense SaaS screens — tables, forms,
				dashboards — use <code style={codeVar}>p2</code> (14px) as the
				working body size; it keeps rows compact while staying readable.
			</>
		),
	},
	{
		label: 'Labels',
		body: (
			<>
				Form and field labels use <code style={codeVar}>p2</code> with{' '}
				<code style={codeVar}>semiBold</code> weight.
			</>
		),
	},
	{
		label: 'Captions & helper text',
		body: (
			<>
				Use <code style={codeVar}>p3</code> (12px) for hint text,
				timestamps, metadata and table footnotes, typically in a soft
				colour.
			</>
		),
	},
	{
		label: 'Fine print',
		body: (
			<>
				<code style={codeVar}>p4</code> (10px) is for legal lines, badges
				and micro-labels only. Never use <code style={codeVar}>semiBold</code>{' '}
				at this size and avoid paragraphs of it.
			</>
		),
	},
	{
		label: 'Weights',
		body: (
			<>
				Regular for prose, <code style={codeVar}>semiBold</code> for
				emphasis and interactive text, bold for headings. Don’t use weight
				alone to create hierarchy across more than two levels — change size
				too.
			</>
		),
	},
];

const UsageRules = () => (
	<section>
		{sectionHeading('Usage rules')}
		<div style={tableCard}>
			{usageRules.map(({ label, body }, i) => (
				<div
					key={label}
					style={tableRow('180px 1fr', i === 0, 'start')}
				>
					<Text size="p2" weight="semiBold">
						{label}
					</Text>
					<p
						style={{
							color: SOFT,
							fontSize: 13.5,
							lineHeight: 1.6,
							margin: 0,
						}}
					>
						{body}
					</p>
				</div>
			))}
		</div>
	</section>
);

// ---------------------------------------------------------------------------
// Dense UI sample — the scale in a realistic layout.
// ---------------------------------------------------------------------------
const DensitySample = () => (
	<section>
		{sectionHeading(
			'In context',
			'A dense booking panel built from p2 body, semiBold labels and p3/p4 helper text.',
		)}
		<div style={{ ...card, background: SURFACE, maxWidth: 420 }}>
			<Heading as="h4" size="h4">
				Booking details
			</Heading>
			<div style={{ display: 'grid', gap: 16, marginTop: 16 }}>
				<div style={{ display: 'grid', gap: 4 }}>
					<Text as="label" size="p2" weight="semiBold">
						Registration
					</Text>
					<Text as="p" size="p2">
						ABC-123 · 2019 Toyota Corolla Ascent Sport
					</Text>
					<Text as="p" size="p3" color="soft">
						Vehicle details are provided by the customer and may
						require confirmation at drop-off.
					</Text>
				</div>
				<div style={{ display: 'grid', gap: 4 }}>
					<Text as="label" size="p2" weight="semiBold">
						Service
					</Text>
					<Text as="p" size="p2">
						Logbook service · 60,000 km
					</Text>
				</div>
				<Text as="p" size="p4" color="soft">
					Prices include GST. Cancellation fees may apply within 24
					hours of the booking time.
				</Text>
			</div>
		</div>
	</section>
);

// ---------------------------------------------------------------------------
// Hero.
// ---------------------------------------------------------------------------
const Hero = () => (
	<section style={{ ...card, padding: 32 }}>
		<div
			style={{
				fontFamily: 'AvertaStandard, system-ui, sans-serif',
				fontSize: 72,
				fontWeight: 700,
				letterSpacing: 0,
				lineHeight: 1.1,
			}}
		>
			Ag
		</div>
		<p style={{ ...lead, marginTop: 16 }}>
			Overdrive typography follows the AutoGuru Design System 2026. The
			typeface is <strong style={{ color: INK }}>Averta Std</strong> (
			<code style={codeVar}>AvertaStandard, system-ui, sans-serif</code>)
			with letter-spacing <code style={codeVar}>0</code> everywhere.
		</p>
		<div
			style={{
				borderTop: `1px solid ${HAIRLINE}`,
				display: 'flex',
				flexWrap: 'wrap',
				gap: 32,
				marginTop: 24,
				paddingTop: 20,
			}}
		>
			<div>
				<div style={{ ...metaChip, marginBottom: 4 }}>Heading ratio</div>
				<div style={{ fontSize: 20, fontWeight: 700 }}>1.25</div>
			</div>
			<div>
				<div style={{ ...metaChip, marginBottom: 4 }}>
					Paragraph ratio
				</div>
				<div style={{ fontSize: 20, fontWeight: 700 }}>1.40</div>
			</div>
			<div>
				<div style={{ ...metaChip, marginBottom: 4 }}>Named styles</div>
				<div style={{ fontSize: 20, fontWeight: 700 }}>
					{TEXT_STYLES.length}
				</div>
			</div>
			<div>
				<div style={{ ...metaChip, marginBottom: 4 }}>Weights</div>
				<div style={{ fontSize: 20, fontWeight: 700 }}>
					{Object.keys(fontWeight).length}
				</div>
			</div>
		</div>
	</section>
);

const meta: Meta = {
	title: 'Foundation/Typography',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const Typography: Story = {
	render: () => (
		<div style={page}>
			<Heading as="h1">Typography</Heading>
			<Hero />
			<NamedStyles />
			<FontWeights />
			<UsageRules />
			<DensitySample />
			<LegacyScale />
		</div>
	),
};
