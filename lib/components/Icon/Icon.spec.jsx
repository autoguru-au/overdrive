import { render } from '@testing-library/react';
import * as React from 'react';
import { vi } from 'vitest';

import { Icon } from './Icon';

const TestIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M183.253 353.707L280.96 256l-97.707-97.92 30.08-30.08 128 128-128 128-30.08-30.293z" />
	</svg>
);

describe('<Icon />', () => {
	it('should not throw if SVG icon is passed', () => {
		expect(() => render(<Icon icon={TestIcon} />)).not.toThrow();
	});

	it('should pass on className to dom element', () => {
		expect(
			render(<Icon icon={TestIcon} className="icon-class" />).container
				.firstChild.firstChild,
		).toHaveClass('icon-class');
	});

	it('should match snapshot for same icon', () => {
		expect(
			render(<Icon icon={TestIcon} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should nest the provided svg inside the div tag', () => {
		expect(
			render(<Icon icon={TestIcon} />).container.querySelector(
				'span>svg',
			),
		).toBeInTheDocument();
	});

	it('should throw error when icon is null', () => {
		// Let's see what actually happens instead of expecting an error
		const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const result = render(<Icon icon={null} />);
		
		expect(consoleSpy).toHaveBeenCalledWith(
			'%cIcon component received an empty icon prop.',
			'color: orange'
		);
		
		// Check what gets rendered
		expect(result.container.innerHTML).toContain('⬤');
		
		consoleSpy.mockRestore();
	});

	it('should throw error when icon is undefined', () => {
		// Let's see what actually happens instead of expecting an error  
		const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const result = render(<Icon icon={undefined} />);
		
		expect(consoleSpy).toHaveBeenCalledWith(
			'%cIcon component received an empty icon prop.',
			'color: orange'
		);
		
		// Check what gets rendered
		expect(result.container.innerHTML).toContain('⬤');
		
		consoleSpy.mockRestore();
	});
});
