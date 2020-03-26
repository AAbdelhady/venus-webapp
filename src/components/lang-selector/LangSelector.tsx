import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {supportedLangs} from '../../i18n/lang';
import * as actions from '../../store/actions';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {RouteComponentProps} from 'react-router';
import {Button} from '@material-ui/core';
import variables from '../../assets/css/variables.scss';

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

    const textColor = (lang) => lang === currentLang ? variables.secondaryMain : variables.primaryText;

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