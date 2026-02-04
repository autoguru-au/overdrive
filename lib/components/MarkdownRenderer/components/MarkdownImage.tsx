import React from 'react';

import * as styles from './MarkdownImage.css';

interface MarkdownImageProps {
	src?: string;
	alt?: string;
	node?: unknown;
}

export const MarkdownImage = ({
	src,
	alt,
	node: _node,
	...props
}: MarkdownImageProps) => (
	<img src={src} alt={alt ?? ''} className={styles.image} {...props} />
);

MarkdownImage.displayName = 'MarkdownImage';
