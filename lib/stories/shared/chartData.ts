/**
 * Mock data for the chart stories and tests, from the Figma "Expenses by
 * category" frames (Reporting file, node 5526:9631). The weeks add up to
 * $26,400. The Figma KPI tile shows $29,950, but that value does not agree
 * with the columns, so the stories use the column values.
 */
import { overdriveTokens as tokens } from '../../themes/theme.css';

export type ExpenseKey = 'maintenance' | 'fuel' | 'tolls';

export const expenseSeries: Array<{
	key: ExpenseKey;
	label: string;
	color: string;
}> = [
	{
		key: 'maintenance',
		label: 'Maintenance',
		color: tokens.color.gamut.green['900'],
	},
	{ key: 'fuel', label: 'Fuel', color: tokens.color.gamut.red['700'] },
	{ key: 'tolls', label: 'Tolls', color: tokens.color.gamut.yellow['500'] },
];

const week = (
	id: string,
	label: string,
	maintenance: number,
	fuel: number,
	tolls: number,
) => ({ id, label, values: { maintenance, fuel, tolls } });

/** Eight weeks. The labels are the Figma labels, as an MFE gives them after `Intl.DateTimeFormat#formatRange`. */
export const weeklyExpenses = [
	week('2026-08-01', '1–7 Aug', 1170, 900, 370),
	week('2026-08-08', '8–14 Aug', 1100, 950, 370),
	week('2026-08-15', '15–21 Aug', 1420, 1180, 430),
	week('2026-08-22', '22–28 Aug', 970, 880, 350),
	week('2026-08-29', '29 Aug – 4 Sep', 3560, 1900, 760),
	week('2026-09-05', '5–11 Sep', 1270, 1420, 550),
	week('2026-09-12', '12–18 Sep', 1760, 1880, 700),
	week('2026-09-19', '19–23 Sep', 720, 1140, 650),
];

/** The same expenses for each category: the donut slices. */
export const expensesByCategory = expenseSeries.map((item) => ({
	...item,
	value: weeklyExpenses.reduce(
		(total, datum) => total + datum.values[item.key],
		0,
	),
}));

const currency = new Intl.NumberFormat('en-AU', {
	style: 'currency',
	currency: 'AUD',
	maximumFractionDigits: 0,
});

const compactCurrency = new Intl.NumberFormat('en-AU', {
	style: 'currency',
	currency: 'AUD',
	notation: 'compact',
	maximumFractionDigits: 1,
});

const percent = new Intl.NumberFormat('en-AU', {
	style: 'percent',
	maximumFractionDigits: 0,
});

export const formatCurrency = (value: number) => currency.format(value);
export const formatCompactCurrency = (value: number) =>
	compactCurrency.format(value);
export const formatPercent = (value: number) => percent.format(value);
