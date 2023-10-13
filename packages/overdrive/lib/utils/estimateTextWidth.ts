// Estimate input width based on the width of each character in the value prop
const narrowChars = /[!"'()*+,./:;<=>?I[\\\]^_`b-vx-z{|}~\-]/g;
const wideChars = /[\dA-HJ-Z]/g;
const narrowCharWidth = 0.5; // Fraction of ch to assign to narrow characters
const defaultCharWidth = 0.8; // Fraction of ch to assign to narrow characters
export const estimateTextWidth = (value: string) => {
	if (!value) return '0ch';
	const charWidths = value.split('').map((char) => {
		if (narrowChars.test(char)) return narrowCharWidth;
		if (wideChars.test(char)) return 1;
		return defaultCharWidth;
	});
	return charWidths.reduce((sum, width) => sum + width, 0) + 'ch';
};
