import { storiesOf } from '@storybook/react';
import React from 'react';

import { Badge, EBadgeColour } from '.';

storiesOf('Components|Badge', module).add('standard', () => {
	return (
		<div
			style={{
				display: 'grid',
				gridAutoFlow: 'row dense',
				gridGap: '10px',
			}}>
			<div style={{ display: 'flex', gap: '10px' }}>
				{Object.entries(EBadgeColour).map(([name, colour]) => (
					<Badge key={name} label={name} colour={colour} />
				))}
			</div>

			<div style={{ display: 'flex', gap: '10px' }}>
				{Object.entries(EBadgeColour).map(([name, colour]) => (
					<Badge
						key={name}
						look="minimal"
						label={name}
						colour={colour}
					/>
				))}
			</div>

			<div style={{ display: 'flex', gap: '10px' }}>
				{Object.entries(EBadgeColour).map(([name, colour]) => (
					<Badge
						key={name}
						look="inverted"
						label={name}
						colour={colour}
					/>
				))}
			</div>
		</div>
	);
});
