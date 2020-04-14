import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {supportedLangs} from '../../i18n/lang';
import * as actions from '../../store/actions';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Button} from '@material-ui/core';
import variables from '../../assets/css/variables.scss';

const LangSelector = () => {
    const currentLang = useSelector(state => state.i18n.lang);
    const dispatch = useDispatch();
    const history = useHistory();

    const changeLang = useCallback((lang) => {
        if (lang !== currentLang) {
            dispatch(actions.changeLanguage(lang, history));
        }
    }, [dispatch, currentLang, history]);

    const textColor = useCallback((lang) => lang === currentLang ? variables.secondaryMain : variables.primaryText, [currentLang]);

    const buttons = supportedLangs.map(lang => (
        <Button key={lang} onClick={() => changeLang(lang)} style={{color: textColor(lang)}}>
            {lang.toUpperCase()}
        </Button>
    ));

    return (
        <ButtonGroup variant="text">
            {buttons}
        </ButtonGroup>
    );
};

export default LangSelector;