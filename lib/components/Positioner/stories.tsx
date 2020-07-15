import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import * as React from 'react';
import { createRef, useCallback, useRef, useState } from 'react';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { EAlignment } from './alignment';
import { Positioner } from './Positioner';

const alignmentPicker = () =>
	select('Alignment', EAlignment, EAlignment.BOTTOM_LEFT);

export default {
	title: 'Utility|Positioner',
	component: Positioner,
	parameters: {
		chromatic: { disable: true },
	},
};

export const standard = () => {
	const Impl = () => {
		const triggerRef = useRef(null);
		const [isOpen, setIsOpen] = useState(true);

		const closeHandler = useCallback(() => setIsOpen((prev) => !prev), []);

		return (
			<div>
				<Button ref={triggerRef} size="small" onClick={closeHandler}>
					Open me
				</Button>
				<Positioner
					isOpen={isOpen}
					triggerRef={triggerRef}
					alignment={alignmentPicker()}
					onRequestClose={closeHandler}>
					<Box
						boxShadow={1}
						backgroundColour="white"
						borderRadius="1"
						borderWidth={1}
						borderColour="gray"
						padding="2">
						<Text is="p">
							Hello im from the consumer:{' '}
							{Math.ceil(Math.random() * 100)}
						</Text>
					</Box>
				</Positioner>
			</div>
		);
	};

	return <Impl />;
};

export const illustrateAScroll = () => {
	const triggerRef = createRef<HTMLButtonElement>();

	return (
		<div
			style={{
				height: '100%',
				width: '100%',
			}}>
			<div
				style={{
					height: 'calc(100vh*5)',
					width: 'calc(100vw*5)',
				}}>
				<div
					style={{
						paddingTop: 'calc((100vh*5) / 2)',
						paddingLeft: 'calc((100vw*5) / 2)',
					}}>
					<Button ref={triggerRef} size="small">
						I'm the trigger
					</Button>
				</div>

				<Positioner
					isOpen
					triggerRef={triggerRef}
					alignment={alignmentPicker()}
					onRequestClose={action('onRequestClose')}>
					<Box
						boxShadow={1}
						backgroundColour="white"
						borderRadius="1"
						borderWidth={1}
						borderColour="gray"
						padding="2">
						<Text is="p">
							Hello im from the consumer:{' '}
							{Math.ceil(Math.random() * 100)}
						</Text>
					</Box>
				</Positioner>
			</div>
		</div>
	);
};
