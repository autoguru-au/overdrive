import * as React from 'react';
import { ComponentType, FunctionComponent } from 'react';

import { ModalPortal } from './ModalPortal';

export type TRequestCloseCallback<Payload> = (
	e: string,
	payload?: Payload,
) => void;

export interface Props<Payload> {
	isOpen: boolean;

	onRequestClose?: TRequestCloseCallback<Payload>;
}

export const withModal = <TIncomingProps extends {} = {}, Payload = any>(
	WrappedComponent: ComponentType<Props<Payload> & TIncomingProps>,
): FunctionComponent<Props<Payload> & TIncomingProps> => ({
	onRequestClose = () => void 0,
	isOpen,
	...rest
}) => (
	<ModalPortal isOpen={isOpen} onRequestClose={onRequestClose}>
		{isOpen && (
			<WrappedComponent
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				{...(rest as TIncomingProps)}
			/>
		)}
	</ModalPortal>
);
