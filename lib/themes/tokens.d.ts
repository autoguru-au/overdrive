type Breakpoints = 'mobile' | 'tablet' | 'desktop' | 'largeDesktop';

export interface Tokens {
	breakpoints: Record<Breakpoints, [number, number]>;
}
