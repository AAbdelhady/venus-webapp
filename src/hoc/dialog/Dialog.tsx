import React from 'react';
import {TransitionProps} from '@material-ui/core/transitions';
import Slide from '@material-ui/core/Slide';
import MuiDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import {useMediaQuery} from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import {Breakpoint, ZIndex} from '../../utils/enums';
import classes from './Dialog.module.scss';

interface Props {
    open: boolean;
    children?;
    onClose?;
    zIndex?;
    containerClassName?;
    blockClose?: boolean;
}

const Transition: React.ComponentType<TransitionProps> = React.forwardRef((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
));

const Dialog = (props: Props) => {
    const fullScreen = useMediaQuery(useTheme().breakpoints.down(Breakpoint.sm));
    const style = {
        zIndex: props.zIndex || ZIndex.defaultDialog
    };
    return (
        <MuiDialog open={props.open} onClose={props.onClose} keepMounted TransitionComponent={Transition} fullScreen={fullScreen} maxWidth={false} style={style}
                   disableBackdropClick={props.blockClose} disableEscapeKeyDown={props.blockClose}>
            {!props.blockClose && <DialogTitle className={classes.Title}><CloseIcon onClick={props.onClose} className="float-right"/></DialogTitle>}
            <DialogContent className={props.containerClassName}>
                {props.open && props.children}
            </DialogContent>
        </MuiDialog>
    )
};

export default Dialog;