import React, {Component} from 'react';
import {googleLogin} from '../../utils/common';
import {Link} from 'react-router-dom';
import {join} from '../../utils/common'
import classes from './TestPage.module.scss';

class TestPage extends Component {
    state = {
        redirectUrl: null
    };

    render() {
        const firstRowClasses = join(classes.ContainerBlue, classes.Container);
        const secondRowClasses = join(classes.ContainerRed, classes.Container);
        return (
            <>
                <div className={firstRowClasses}>
                    <Link to="/" >Home</Link>
                </div>
                <div className={secondRowClasses}>
                    <a href="/" onClick={googleLogin}>Google</a>
                </div>
            </>
        );
    }
}

export default TestPage;