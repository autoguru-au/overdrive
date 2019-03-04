import React, { ComponentType, FunctionComponent } from 'react';
import { ECloseCode } from './enums';
import { ModalPortal } from './ModalPortal';

export type TRequestCloseCallback<Payload> = (
	e: ECloseCode,
	payload?: Payload
) => void;

export interface IProps<Payload> {
	isOpen: boolean;

	onRequestClose?: TRequestCloseCallback<Payload>;
}

export const withModal = <TIncomingProps extends {} = {}, Payload = any>(
	WrappedComponent: ComponentType<IProps<Payload> & TIncomingProps>
): FunctionComponent<IProps<Payload> & TIncomingProps> => ({
	onRequestClose = () => void 0,
	isOpen,
	...rest
}) => (
	<ModalPortal isOpen={isOpen} onRequestClose={onRequestClose}>
		{isOpen && (
			<WrappedComponent
				onRequestClose={onRequestClose}
				isOpen={isOpen}
				{...rest as TIncomingProps}
			/>
		)}
	</ModalPortal>
);
