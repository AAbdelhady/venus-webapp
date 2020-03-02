import React, {useEffect, useState} from 'react';
import Fab from '@material-ui/core/Fab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import classes from './JumpToTop.module.scss';
import {ZIndex} from '../../utils/enums';

const style: React.CSSProperties = {
    position: 'fixed',
    zIndex: ZIndex.FAB
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const fab = (
    <Fab color="primary" onClick={scrollToTop} className={classes.FloatingBottomRight} style={style}>
        <ArrowUpwardIcon/>
    </Fab>
);

const JumpToTop = () => {
    const [show, setShow] = useState(false)
    const toggleVisibility = () => setShow(window.pageYOffset > 300);
    useEffect(() => document.addEventListener("scroll", toggleVisibility));
    return show ? fab : null;
};

export default JumpToTop;