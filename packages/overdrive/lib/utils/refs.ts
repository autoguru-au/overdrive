export const mergeRefs =
	<T>(...refs: Array<any>) =>
	(node: T) => {
		for (const ref of refs.filter(Boolean)) {
			ref.current = node;
		}
	};
