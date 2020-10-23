import { select } from '@storybook/addon-knobs';
import * as React from 'react';
import { useCallback, useRef, useState } from 'react';

import { Button } from '../Button';
import { EAlignment } from '../Positioner/alignment';
import { TextInput } from '../TextInput';

import { Flyout } from '.';

const alignmentPicker = () =>
	select('Alignment', EAlignment, EAlignment.BOTTOM_LEFT);

export default {
	title: 'Components/Flyout',
	component: Flyout,
	parameters: { chromatic: { disable: true } },
};

export const standard = () => {
	const Impl = () => {
		const triggerRef = useRef(null);
		const [isOpen, setIsOpen] = useState(true);
		const closer = useCallback(() => setIsOpen(false), []);
		const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

		return (
			<>
				<Button ref={triggerRef} onClick={toggle}>
					some trigger
				</Button>
				<Flyout
					triggerRef={triggerRef}
					alignment={alignmentPicker()}
					isOpen={isOpen}
					onRequestClose={closer}>
					<div
						style={{
							display: 'grid',
							gridTemplateRows: 'repeat(2, auto)',
							gridGap: '16px',
							padding: '16px',
						}}>
						<TextInput name="example" placeholder="example" />
						<div>
							<Button
								size="small"
								variant="primary"
								onClick={closer}>
								Save
							</Button>
						</div>
					</div>
				</Flyout>
			</>
		);
	};

	return <Impl />;
};
