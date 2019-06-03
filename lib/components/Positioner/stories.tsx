import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useCallback, useRef, useState } from 'react';
import { Box } from '../Box';
import { EAlignment } from './alignment';
import { Positioner } from './Positioner';

const alignmentPicker = () =>
	select('Alignment', EAlignment, EAlignment.BOTTOM_LEFT);

storiesOf('Utility|Positioner', module).add('default', () => {
	const Impl = () => {
		const triggerRef = useRef();
		const [isOpen, setIsOpen] = useState(true);

		return (
			<div>
				<button
					ref={triggerRef}
					onClick={useCallback(() => setIsOpen(!isOpen), [isOpen])}>
					Open me
				</button>
				<Positioner
					isOpen={isOpen}
					triggerRef={triggerRef}
					alignment={alignmentPicker()}>
					<Box distance={1}>
						<div style={{ padding: 'var(--global--space--2)' }}>
							Hello im from the consumer:{' '}
							{Math.ceil(Math.random() * 100)}
						</div>
					</Box>
				</Positioner>
			</div>
		);
	};

	return <Impl />;
});
