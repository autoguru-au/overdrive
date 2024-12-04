import React from 'react';

import { stack, type RecipeStackProps } from '../../styles/stack.css';

export const Stack = ({
	children,
	...props
}: RecipeStackProps & { children: React.ReactNode }) => (
	<div className={stack(props)}>{children}</div>
);
