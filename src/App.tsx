import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import './App.scss';
import Routes from './routes';
import Loading from './components/loading/Loading';
import * as actions from './store/actions/index';
import {ThemeProvider} from '@material-ui/styles';
import {theme} from './utils/theme';
import UserActionDialog from './components/user-action-dialog/UserActionDialog';
import Snackbar from './components/ui/snackbar/Snackbar';
import BrowserNotifier from './components/browser-notifier/BrowserNotifier';
import WebsocketClient from './components/websocket-client/WebsocketClient';

const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const lang = useSelector(state => state.i18n.lang);

    useEffect(() => {
        dispatch(actions.auth());
        dispatch(actions.setLanguageFromRoute(location.pathname));
    }, [dispatch, location]);

    return lang && (
        <ThemeProvider theme={theme}>
            <Routes/>
            <UserActionDialog/>
            <Loading/>
            <Snackbar/>
            <BrowserNotifier/>
            <WebsocketClient/>
        </ThemeProvider>
    );
};

export default App;
