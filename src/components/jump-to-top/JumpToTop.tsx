import React, {useEffect, useState} from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FloatingButton from '../ui/floating-button/FloatingButton';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const fab = (
    <FloatingButton onClick={scrollToTop}>
        <ArrowUpwardIcon/>
    </FloatingButton>
);

const JumpToTop = () => {
    const [show, setShow] = useState(false)
    const toggleVisibility = () => setShow(window.pageYOffset > 300);
    useEffect(() => document.addEventListener("scroll", toggleVisibility));
    return show ? fab : null;
};

export default JumpToTop;