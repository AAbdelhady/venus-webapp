import React from 'react';
import {TransitionProps} from '@material-ui/core/transitions';
import Slide from '@material-ui/core/Slide';
import MatDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {useMediaQuery} from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import {Breakpoint} from '../../utils/enums';
import DialogTitle from '@material-ui/core/DialogTitle';
import classes from './Dialog.module.scss';
import {ZIndex} from '../../utils/enums';

const MAX_WIDTH = 'xl';

const Transition: React.ComponentType<TransitionProps> = React.forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const dialogTitle = (title) => {
    return title ? <DialogTitle className={classes.Title}>{title}</DialogTitle> : null;
};

const Dialog = (props) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down(Breakpoint.sm));
    const style = {
        zIndex: props.zIndex || ZIndex.defaultDialog
    };
    return (
        <MatDialog open={props.open} onClose={props.onClose} keepMounted TransitionComponent={Transition} fullScreen={fullScreen} maxWidth={MAX_WIDTH} style={style}>
            {dialogTitle(props.title)}
            <DialogContent>
                {props.children}
            </DialogContent>
        </MatDialog>
    )
};

export default Dialog;