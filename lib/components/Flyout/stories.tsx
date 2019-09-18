import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useCallback, useRef, useState } from 'react';

import { Button, EButtonSize, EButtonVariant } from '../Button';
import { EPositionerAlignment } from '../Positioner';
import { TextInput } from '../TextInput';
import { Flyout } from '.';

const alignmentPicker = () =>
	select('Alignment', EPositionerAlignment, EPositionerAlignment.BOTTOM_LEFT);

storiesOf('Components|Flyout', module)
	.addParameters({ chromatic: { disable: true } })
	.add('standard', () => {
		const Impl = () => {
			const triggerRef = useRef();
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
								gridGap: 'var(--global--space--4)',
								padding: 'var(--global--space--4)',
							}}>
							<TextInput name="example" placeholder="example" />
							<div>
								<Button
									size={EButtonSize.Small}
									variant={EButtonVariant.Primary}
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
	});
