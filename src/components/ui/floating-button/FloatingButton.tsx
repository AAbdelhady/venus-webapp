import React from 'react';
import Fab from '@material-ui/core/Fab';
import classes from './FloatingButton.module.scss';
import {ZIndex} from '../../../utils/enums';


interface Props {
    children?: any;
    onClick();
}

const style: React.CSSProperties = {
    position: 'fixed',
    zIndex: ZIndex.FAB
};

const FloatingButton = (props: Props) => (
    <Fab color="secondary" onClick={props.onClick} className={classes.FloatingBottomRight} style={style}>
        {props.children}
    </Fab>
);

export default FloatingButton;