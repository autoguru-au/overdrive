type Breakpoint = 'mobile' | 'desktop' | 'tablet' | 'largeDesktop';

interface Theme extends Readonly<Tokens> {}

interface Tokens {
	breakpoints: Record<Breakpoint, [number, number]>;
}
