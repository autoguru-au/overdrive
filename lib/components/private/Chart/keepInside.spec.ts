import { keepInside } from './keepInside';

/** An element with a fixed box. jsdom has no layout, so the box is a stub. */
const elementAt = (left: number, top: number, width = 100, height = 50) => {
	const element = document.createElement('div');
	element.getBoundingClientRect = () =>
		({
			left,
			top,
			right: left + width,
			bottom: top + height,
			width,
			height,
		}) as DOMRect;
	return element;
};

describe('keepInside', () => {
	it('does not move an element that is inside the bounds', () => {
		const element = elementAt(10, 10);
		keepInside(element, { left: 0, right: 200, top: 0, bottom: 200 });
		expect(element.style.transform).toBe('');
	});

	it('moves an element back from the right and the bottom', () => {
		const element = elementAt(150, 180);
		keepInside(element, { left: 0, right: 200, top: 0, bottom: 200 });
		expect(element.style.transform).toBe('translate(-50px, -30px)');
	});

	it('moves an element back from the left and the top', () => {
		const element = elementAt(-20, -5);
		keepInside(element, { left: 0, right: 200, top: 0, bottom: 200 });
		expect(element.style.transform).toBe('translate(20px, 5px)');
	});

	it('aligns an element that is wider than the bounds to the left', () => {
		const element = elementAt(30, 0, 300);
		keepInside(element, { left: 0, right: 200 });
		expect(element.style.transform).toBe('translate(-30px, 0px)');
	});

	it('does not move the element on the vertical axis without top and bottom', () => {
		const element = elementAt(0, -40);
		keepInside(element, { left: 0, right: 200 });
		expect(element.style.transform).toBe('');
	});

	it('clears the earlier move before it measures again', () => {
		const element = elementAt(10, 10);
		element.style.transform = 'translate(-50px, 0px)';
		keepInside(element, { left: 0, right: 200 });
		expect(element.style.transform).toBe('');
	});
});
