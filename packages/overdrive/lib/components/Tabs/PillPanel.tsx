import * as React from 'react';
import { useTabPanel } from 'react-aria';

export const PillPanel = ({ state, ...props }) => {
    const ref = React.useRef(null);
    const { tabPanelProps } = useTabPanel(props, state, ref);
    return (
        <div {...tabPanelProps} ref={ref}>
        {state.selectedItem?.props.children}
        </div>
    );
};