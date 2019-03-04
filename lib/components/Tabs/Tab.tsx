import { FunctionComponent } from 'react';

export interface IProps {
	title: string;
}

export const Tab: FunctionComponent<IProps> = () => {
	throw new Error("The Tab component isn't mean to be rendered by itself...");
};
