import React from 'react';
import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';

interface Props {
    currentIndex: number;
    labels: string[];
    onChange(newTabIndex: number);
}

const tabHeaders = (labels: string[]) => {
    const headers: React.ReactNode[] = [];
    for (let i = 0; i < labels.length; i++) {
        headers.push(<MuiTab key={`tab-header-${i}`} label={labels[i]}/>);
    }
    return headers;
};

const Tabs = (props: Props) => {
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => props.onChange(newValue);
    return (
        <MuiTabs value={props.currentIndex} onChange={handleChange} variant="scrollable">
            {tabHeaders(props.labels)}
        </MuiTabs>
    )
};

export default Tabs;