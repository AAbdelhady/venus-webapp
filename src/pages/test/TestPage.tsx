import React, {Component} from 'react';
import {connect} from 'react-redux';
import {googleLogin, join} from '../../utils/common';
import {Link} from 'react-router-dom';
import classes from './TestPage.module.scss';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import * as actions from '../../store/actions';

class TestPage extends Component<any> {
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
                <Select value={this.props.currentLang} onChange={event => this.props.changeLanguage(event.target.value, this.props.history)}>
                    <MenuItem value={'en'}>ENG</MenuItem>
                    <MenuItem value={'ee'}>EST</MenuItem>
                    <MenuItem value={'ru'}>RUS</MenuItem>
                </Select>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentLang: state.i18n.lang
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguage: (lang, history) => dispatch(actions.changeLanguage(lang, history))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);