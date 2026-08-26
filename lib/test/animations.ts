/**
 * jsdom implements neither Web Animations nor `getAnimations`, so specs that
 * exercise exit animations stub the DOM API itself and report the animations a
 * `[data-exiting]` rule would have started.
 */
let originalGetAnimations: PropertyDescriptor | undefined;
let isStubbed = false;

export const stubGetAnimations = (exitAnimations: () => Animation[]) => {
	if (!isStubbed) {
		originalGetAnimations = Object.getOwnPropertyDescriptor(
			Element.prototype,
			'getAnimations',
		);
		isStubbed = true;
	}

	Object.defineProperty(Element.prototype, 'getAnimations', {
		configurable: true,
		writable: true,
		value(this: HTMLElement) {
			return Object.hasOwn(this.dataset, 'exiting')
				? exitAnimations()
				: [];
		},
	});
};

/**
 * Puts `Element.prototype.getAnimations` back the way the environment had it
 */
export const restoreGetAnimations = () => {
	if (!isStubbed) return;
	isStubbed = false;

	if (originalGetAnimations) {
		Object.defineProperty(
			Element.prototype,
			'getAnimations',
			originalGetAnimations,
		);
	} else {
		Reflect.deleteProperty(Element.prototype, 'getAnimations');
	}

	originalGetAnimations = undefined;
};

/**
 * An animation that settles only when the returned `finish` is called
 */
export const deferredAnimation = () => {
	let finish!: () => void;
	const finished = new Promise<void>((resolve) => {
		finish = resolve;
	});

	return { animation: { finished } as unknown as Animation, finish };
};

/**
 * An animation with a finite duration that never resolves, modelling one the
 * browser has dropped part way through
 */
export const stalledAnimation = () =>
	({ finished: new Promise(() => {}) }) as unknown as Animation;

/**
 * An animation that runs forever, such as a loading spinner
 */
export const endlessAnimation = () =>
	({
		finished: new Promise(() => {}),
		effect: { getComputedTiming: () => ({ endTime: Infinity }) },
	}) as unknown as Animation;
