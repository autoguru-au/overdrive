import { FunctionComponent } from 'react';

export interface Props {
	title: string;
	indication?: number;
}

export const Tab: FunctionComponent<Props> = () => {
	throw new Error("The Tab component isn't mean to be rendered by itself...");
};
