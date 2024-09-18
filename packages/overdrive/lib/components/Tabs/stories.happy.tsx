import { AlertIcon, OttoIcon } from '@autoguru/icons';
import { Item } from '@react-stately/collections';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import * as React from 'react';
import { ComponentProps, useEffect, useState } from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { Inline } from '../Inline';
import { EAlignment } from '../Positioner/alignment';
import { Stack } from '../Stack';
import { StarRating } from '../StarRating';
import { Tooltip } from '../Tooltip';

import { PillTab, PillTabList } from '.';


export default {
    title: 'Components/Happy/Pill',
    decorators: [
        (story) => (
            <div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
        ),
    ],
    argTypes: {
        children: {
            control: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof PillTab>;

const Template: ComponentStory<typeof PillTabList> = (args) => <PillTabList {...args} />;
const tabs = [<Item key="FoR" title="Founding of Rome">
    Arma virumque cano, Troiae qui primus ab oris.
</Item>, <Item key="MaR" title="Monarchy and Republic">
    Senatus Populusque Romanus.
</Item>,
<Item key="Emp" title="Empire">Alea jacta est.</Item>
]
// const pillTabProps: ComponentProps<typeof PillTab> = {
//     collection: (
//         <>
//             <PillTabList aria-label="History of Ancient Rome">
//                 <Item key="FoR" title="Founding of Rome">
//                     Arma virumque cano, Troiae qui primus ab oris.
//                 </Item>
//                 <Item key="MaR" title="Monarchy and Republic">
//                     Senatus Populusque Romanus.
//                 </Item>
//                 <Item key="Emp" title="Empire">Alea jacta est.</Item>
//             </PillTabList>
//         </>
//     ),
// };

const pillTabProps: ComponentProps<typeof PillTab> = {
    children: (
        <>
            <Item key="Emp1" title="Empire">Alea jacta est1.</Item>
            <Item key="Emp2" title="Empire2">Alea jacta est2.</Item>
            <Item key="Emp3" title="Empire3">Alea jacta est3.</Item>
            <Item key="Emp4" title="Empire4">Alea jacta est4.</Item>
        </>
    ),
    orientation: 'vertical',
};

export const pillTab = Template.bind(pillTabProps);
pillTab.args = pillTabProps;