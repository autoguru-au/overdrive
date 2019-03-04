import cx from 'clsx';
import React, { FunctionComponent } from 'react';
import styles from './style.scss';

export interface IProps {
	variant?: EVariant | null;
	size?: ESize;
	className?: string;
}

export enum EVariant {
	Mobile = 'mobile',
	Desktop = 'desktop',
}

export enum ESize {
	Heading1 = 'heading-1',
	Heading2 = 'heading-2',
	Heading3 = 'heading-3',
	Heading4 = 'heading-4',
	Heading5 = 'heading-5',
	Heading6 = 'heading-6',
}

const cssSizeMap: Map<ESize, string> = new Map([
	[ESize.Heading1, styles.Heading1],
	[ESize.Heading2, styles.Heading2],
	[ESize.Heading3, styles.Heading3],
	[ESize.Heading4, styles.Heading4],
	[ESize.Heading5, styles.Heading5],
	[ESize.Heading6, styles.Heading6],
]);

const headingTagsMap = new Map<ESize, string>([
	[ESize.Heading1, 'h1'],
	[ESize.Heading2, 'h2'],
	[ESize.Heading3, 'h3'],
	[ESize.Heading4, 'h4'],
	[ESize.Heading5, 'h5'],
	[ESize.Heading6, 'h6'],
]);

export const Heading: FunctionComponent<IProps> = ({
	variant = null,
	size = ESize.Heading1,
	className = '',
	children,
}) => {
	const cls = cx([styles.root, cssSizeMap.get(size), className], {
		[styles.variantMobile]: !!variant && variant === EVariant.Mobile,
		[styles.variantDesktop]: !!variant && variant === EVariant.Desktop,
	});

	const Tag = headingTagsMap.get(size) as any; // TODO: Fix this any

	return <Tag className={cls} size={size} children={children} />;
};
