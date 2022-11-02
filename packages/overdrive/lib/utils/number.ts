export const bigNumFormatter = (
	num: number,
): { value: number; descriptor: string } => {
	if (num < 1e3)
		return {
			value: num,
			descriptor: '',
		};
	// if value < 1000, nothing to do
	else if (num < 1e6)
		return {
			value: num / 1e3,
			descriptor: 'K',
		};
	// convert to K for number from > 1000 < 1 million
	else {
		// convert to M for number from > 1 million
		return {
			value: num / 1e6,
			descriptor: 'M',
		};
	}
};

export const toPrettyBigNumber = (
	number: number,
	fractionDigits = 1,
): string => {
	const formatChunks = bigNumFormatter(number);
	const value = Number.isInteger(formatChunks.value)
		? formatChunks.value
		: formatChunks.value.toFixed(fractionDigits);
	return `${value}${formatChunks.descriptor}`;
};

export const addWithSafeDecimal = (a: number, b: number): number =>
	Number((a + b).toFixed(12));
