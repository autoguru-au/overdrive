type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'largeDesktop';

interface Theme extends Tokens {}

interface Tokens {
	breakpoints: Record<Breakpoint, [number, number]>;
}
