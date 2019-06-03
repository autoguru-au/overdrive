import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { createRef, useCallback, useRef, useState } from 'react';
import { Box } from '../Box';
import { EAlignment } from './alignment';
import { Positioner } from './Positioner';

const alignmentPicker = () =>
	select('Alignment', EAlignment, EAlignment.BOTTOM_LEFT);

storiesOf('Utility|Positioner', module)
	.addParameters({
		chromatic: { delay: 300 },
	})
	.add('default', () => {
		const Impl = () => {
			const triggerRef = useRef();
			const [isOpen, setIsOpen] = useState(true);

			return (
				<div>
					<button
						ref={triggerRef}
						onClick={useCallback(() => setIsOpen(!isOpen), [
							isOpen,
						])}>
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
	})
	.add(
		'illustrate a scroll',
		() => {
			const triggerRef = createRef();

			return (
				<div
					style={{
						height: '100%',
						width: '100%',
						overflow: 'scroll',
					}}>
					<div
						style={{
							height: 'calc(100vh*5)',
							width: 'calc(100vw*5)',
						}}>
						<button
							style={{
								marginTop: 'calc((100vh*5) / 2)',
								marginLeft: 'calc((100vw*5) / 2)',
							}}
							ref={triggerRef}>
							I'm the trigger
						</button>
						<Positioner
							isOpen={true}
							triggerRef={triggerRef}
							alignment={alignmentPicker()}>
							<Box distance={1}>
								<div
									style={{
										padding: 'var(--global--space--2)',
									}}>
									Hello im from the consumer:{' '}
									{Math.ceil(Math.random() * 100)}
								</div>
							</Box>
						</Positioner>
					</div>
				</div>
			);
		},
		{ chromatic: { disable: true } }
	);
