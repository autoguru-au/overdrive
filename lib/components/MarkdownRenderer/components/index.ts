import type { Components } from 'react-markdown';

import { MarkdownBlockquote } from './MarkdownBlockquote';
import { MarkdownCodeBlock } from './MarkdownCodeBlock';
import { MarkdownEmphasis } from './MarkdownEmphasis';
import {
	MarkdownH1,
	MarkdownH2,
	MarkdownH3,
	MarkdownH4,
	MarkdownH5,
	MarkdownH6,
} from './MarkdownHeading';
import { MarkdownHorizontalRule } from './MarkdownHorizontalRule';
import { MarkdownImage } from './MarkdownImage';
import { MarkdownInlineCode } from './MarkdownInlineCode';
import { MarkdownLink } from './MarkdownLink';
import { MarkdownListItem } from './MarkdownListItem';
import { MarkdownOrderedList } from './MarkdownOrderedList';
import { MarkdownParagraph } from './MarkdownParagraph';
import { MarkdownStrikethrough } from './MarkdownStrikethrough';
import { MarkdownStrong } from './MarkdownStrong';
import { MarkdownTable, MarkdownTd, MarkdownTh } from './MarkdownTable';
import { MarkdownUnorderedList } from './MarkdownUnorderedList';

export function createComponentMap(): Components {
	return {
		h1: MarkdownH1,
		h2: MarkdownH2,
		h3: MarkdownH3,
		h4: MarkdownH4,
		h5: MarkdownH5,
		h6: MarkdownH6,
		p: MarkdownParagraph,
		strong: MarkdownStrong,
		em: MarkdownEmphasis,
		del: MarkdownStrikethrough,
		a: MarkdownLink,
		hr: MarkdownHorizontalRule,
		code: MarkdownInlineCode,
		pre: MarkdownCodeBlock,
		blockquote: MarkdownBlockquote,
		img: MarkdownImage,
		table: MarkdownTable,
		th: MarkdownTh,
		td: MarkdownTd,
		ul: MarkdownUnorderedList,
		ol: MarkdownOrderedList,
		li: MarkdownListItem,
	};
}
