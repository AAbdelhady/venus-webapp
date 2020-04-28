import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {DEFAULT_LANG, Lang, langParam, supportedLangs} from '../../i18n/lang';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Button} from '@material-ui/core';
import variables from '../../assets/css/variables.scss';
import {History} from 'history';

const changeLanguage = (currentLang: Lang, newLang: Lang, history: History) => {
    if (currentLang === newLang) {
        return;
    }
    const currentPathname = history.location.pathname;
    const newPathname = currentLang === DEFAULT_LANG ? `${langParam(newLang)}${currentPathname}` : currentPathname.replace(langParam(currentLang), langParam(newLang));
    history.push(newPathname);
    window.location.reload();
};

const textStyle = (lang, currentLang) => ({color: lang === currentLang ? variables.secondaryMain : variables.primaryText});

const LangSelector = () => {
    const currentLang = useSelector(state => state.i18n.lang);
    const history = useHistory();
    const buttons = supportedLangs.map(lang => (
        <Button key={lang} onClick={() => changeLanguage(currentLang, lang, history)} style={textStyle(lang, currentLang)}>
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