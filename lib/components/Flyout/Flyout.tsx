import React, { FunctionComponent, RefObject } from 'react';
import { EPositionerAlignment, Positioner } from '../Positioner';

import styles from './style.scss';

interface Props {
	alignment?: EPositionerAlignment;
	isOpen?: boolean;
	triggerRef: RefObject<HTMLElement>;

	onRequestClose?(): void;
}

export const Flyout: FunctionComponent<Props> = ({
	alignment = EPositionerAlignment.BOTTOM_LEFT,
	isOpen = false,
	onRequestClose = () => void 0,
	triggerRef,
	children,
}) => (
	<Positioner
		triggerRef={triggerRef}
		alignment={alignment}
		isOpen={isOpen}
		onRequestClose={onRequestClose}>
		<div className={styles.root}>{children}</div>
	</Positioner>
);
