import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';
import {googleLogin} from '../../utils/common';
import {Link} from 'react-router-dom';
import classes from './TestPage.module.scss';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import * as actions from '../../store/actions';

const TestPage = (props) => {
    const dispatch = useDispatch();
    const currentLang = useSelector(state => state.i18n.lang);
    const changeLang = (event) => dispatch(actions.changeLanguage(event.target.value, props.history));
    const firstRowClasses = classNames(classes.ContainerBlue, classes.Container);
    const secondRowClasses = classNames(classes.ContainerRed, classes.Container);
    return (
        <>
            <div className={firstRowClasses}>
                <Link to="/">Home</Link>
            </div>
            <div className={secondRowClasses}>
                <a href="/" onClick={googleLogin}>Google</a>
            </div>
            <Select value={currentLang} onChange={changeLang}>
                <MenuItem value={'en'}>ENG</MenuItem>
                <MenuItem value={'et'}>EST</MenuItem>
                <MenuItem value={'ru'}>RUS</MenuItem>
            </Select>
        </>
    );
}

export default TestPage;