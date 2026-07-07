import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { FlexInline } from '../components/Flex/FlexInline';
import { FlexStack } from '../components/Flex/FlexStack';
import { Heading } from '../components/Heading/Heading';
import { Text } from '../components/Text/Text';
import {
	namedTextStyleMap,
	TEXT_STYLES,
	type NamedTextStyle,
} from '../styles/typography';
import { tokens } from '../themes/base/tokens';

import { codeVariable, small, titles } from './helpers/styles.css';

const { size: sizeScale, fontWeight } = tokens.typography;

const SAMPLE = 'Sphinx of black quartz, judge my vow';

const TypeScale = () => (
	<FlexStack gap="6">
		<Heading as="h2" className={titles}>
			Legacy size scale
		</Heading>

		{Object.entries(sizeScale)
			.filter(([key]) => !Number.isNaN(Number(key)))
			.reverse()
			.map(([key, { fontSize, lineHeight }]) => (
				<FlexInline gap="6" justify="baseline" key={key}>
					<span className={codeVariable}>size {key}</span>
					<span className={small}>
						{fontSize} / {lineHeight}
					</span>
					<Text size={key as keyof typeof sizeScale}>{SAMPLE}</Text>
				</FlexInline>
			))}
	</FlexStack>
);

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

const NamedStyles = () => (
	<FlexStack gap="6">
		<Heading as="h2" className={titles}>
			Named styles
		</Heading>

		{TEXT_STYLES.map((name) => {
			const { size } = namedTextStyleMap[name];
			const { fontSize, lineHeight } = sizeScale[size];
			return (
				<FlexStack gap="3" key={name}>
					<FlexInline gap="4" justify="baseline">
						<span className={codeVariable}>{name}</span>
						<span className={small}>
							{fontSize} / {lineHeight}
						</span>
					</FlexInline>
					{weightsByStyle[name].map((weight) => (
						<Text size={name} weight={weight} key={weight}>
							{SAMPLE} — {weight}
						</Text>
					))}
				</FlexStack>
			);
		})}
	</FlexStack>
);

const FontWeights = () => (
	<FlexStack gap="5">
		<Heading as="h2" className={titles}>
			Font weights
		</Heading>

		{Object.entries(fontWeight).map(([name, value]) => (
			<FlexInline gap="5" justify="baseline" key={name}>
				<span className={codeVariable}>
					{name} ({value})
				</span>
				<Text size="p1" weight={name as keyof typeof fontWeight}>
					{SAMPLE}
				</Text>
			</FlexInline>
		))}
	</FlexStack>
);

const DensitySample = () => (
	<FlexStack gap="5">
		<Heading as="h2" className={titles}>
			Dense UI sample
		</Heading>

		<FlexStack gap="4">
			<Heading as="h4">Booking details</Heading>
			<FlexStack gap="2">
				<Text as="label" size="p2" weight="semiBold">
					Registration
				</Text>
				<Text as="p" size="p2">
					ABC-123 · 2019 Toyota Corolla Ascent Sport
				</Text>
				<Text as="p" size="p3" color="soft">
					Vehicle details are provided by the customer and may require
					confirmation at drop-off.
				</Text>
			</FlexStack>
			<FlexStack gap="2">
				<Text as="label" size="p2" weight="semiBold">
					Service
				</Text>
				<Text as="p" size="p2">
					Logbook service · 60,000 km
				</Text>
			</FlexStack>
			<Text as="p" size="p4" color="soft">
				Prices include GST. Cancellation fees may apply within 24 hours
				of the booking time.
			</Text>
		</FlexStack>
	</FlexStack>
);

const meta: Meta = {
	title: 'Foundation/Typography',
	tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

export const Typography: Story = {
	render: () => (
		<FlexStack gap="8">
			<Heading as="h1">Typography</Heading>
			<NamedStyles />
			<TypeScale />
			<FontWeights />
			<DensitySample />
		</FlexStack>
	),
};
