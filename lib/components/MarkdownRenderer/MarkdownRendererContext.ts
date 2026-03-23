import { createContext, useContext } from 'react';

export type MarkdownRendererDensity = 'comfortable' | 'compact';

const markdownRendererDensityContext =
	createContext<MarkdownRendererDensity>('comfortable');

export const MarkdownRendererDensityProvider =
	markdownRendererDensityContext.Provider;

export const useMarkdownRendererDensity = (): MarkdownRendererDensity =>
	useContext(markdownRendererDensityContext);
