import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {supportedLangs} from '../../i18n/lang';
import * as actions from '../../store/actions';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {RouteComponentProps} from 'react-router';
import classes from "./LangSelector.module.scss";

interface Props {
    history: RouteComponentProps;
}

const LangSelector = (props: Props) => {
    const currentLang = useSelector(state => state.i18n.lang);
    const dispatch = useDispatch();

    const changeLang = (lang) => {
        if (lang !== currentLang) {
            dispatch(actions.changeLanguage(lang, props.history));
        }
    };

    const className = (lang) => lang === currentLang ? classes.Active : classes.Inactive;

    const buttons = supportedLangs.map(lang => (
        <div key={lang} onClick={() => changeLang(lang)} className={className(lang)}>
            {lang.toUpperCase()}
        </div>
    ));

    return (
        <ButtonGroup variant="text" color="secondary">
            {buttons}
        </ButtonGroup>
    );
};

export default LangSelector;