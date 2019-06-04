import clsx from 'clsx';
import React, { FunctionComponent, memo } from 'react';

import styles from './style.scss';

interface IProps {}

const {{pascalCase name}}Component:FunctionComponent<IProps> = () => <p className={clsx(styles.root)}>
	New component {{name}}! 🎉 Edit lib/components/{{pascalCase name}}/{{pascalCase name}}.tsx
</p>;

export const {{pascalCase name}} = memo({{pascalCase name}}Component);
