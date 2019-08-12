import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { createRef, useCallback, useRef, useState } from 'react';
import { Box } from '../Box';
import { Button, EButtonSize } from '../Button';
import { EAlignment } from './alignment';
import { Positioner } from './Positioner';

const alignmentPicker = () =>
	select('Alignment', EAlignment, EAlignment.BOTTOM_LEFT);

storiesOf('Utility|Positioner', module)
	.addParameters({ chromatic: { disable: true } })
	.add('default', () => {
		const Impl = () => {
			const triggerRef = useRef();
			const [isOpen, setIsOpen] = useState(true);

			return (
				<div>
					<Button
						ref={triggerRef}
						size={EButtonSize.Small}
						onClick={useCallback(() => setIsOpen(!isOpen), [
							isOpen,
						])}>
						Open me
					</Button>
					<Positioner
						isOpen={isOpen}
						triggerRef={triggerRef}
						alignment={alignmentPicker()}
						onRequestClose={action('onRequestClose')}>
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
	.add('illustrate a scroll', () => {
		const triggerRef = createRef<HTMLButtonElement>();

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
					<div
						style={{
							marginTop: 'calc((100vh*5) / 2)',
							marginLeft: 'calc((100vw*5) / 2)',
						}}>
						<Button ref={triggerRef} size={EButtonSize.Small}>
							I'm the trigger
						</Button>
					</div>

					<Positioner
						isOpen
						triggerRef={triggerRef}
						alignment={alignmentPicker()}
						onRequestClose={action('onRequestClose')}>
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
	});
