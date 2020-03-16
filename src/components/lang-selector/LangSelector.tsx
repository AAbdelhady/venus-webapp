import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {supportedLangs} from '../../i18n/lang';
import * as actions from '../../store/actions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {RouteComponentProps} from 'react-router';

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

    const buttons = supportedLangs.map(lang => (
        <Button key={lang}
                onClick={() => changeLang(lang)}
                color={lang === currentLang ? 'primary' : 'secondary'}>
            {lang.toUpperCase()}
        </Button>
    ));

    return (
        <ButtonGroup variant="text" color="secondary">
            {buttons}
        </ButtonGroup>
    );
};

export default LangSelector;