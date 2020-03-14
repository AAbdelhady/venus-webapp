import React from 'react';
import {TransitionProps} from '@material-ui/core/transitions';
import Slide from '@material-ui/core/Slide';
import MuiDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {useMediaQuery} from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import {Breakpoint, ZIndex} from '../../utils/enums';
import DialogTitle from '@material-ui/core/DialogTitle';
import classes from './Dialog.module.scss';

interface Props {
    open: boolean;
    title?: string;
    children?;
    onClose?;
    zIndex?;
}

const Transition: React.ComponentType<TransitionProps> = React.forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const dialogTitle = (title) => {
    return title ? <DialogTitle className={classes.Title}>{title}</DialogTitle> : null;
};

const Dialog = (props: Props) => {
    const fullScreen = useMediaQuery(useTheme().breakpoints.down(Breakpoint.sm));
    const style = {
        zIndex: props.zIndex || ZIndex.defaultDialog
    };
    return (
        <MuiDialog open={props.open} onClose={props.onClose} keepMounted TransitionComponent={Transition} fullScreen={fullScreen} maxWidth={false} style={style}>
            {dialogTitle(props.title)}
            <DialogContent>
                {props.open && props.children}
            </DialogContent>
        </MuiDialog>
    )
};

export default Dialog;