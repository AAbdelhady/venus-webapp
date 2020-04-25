import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReactNotifications from 'react-browser-notifications';
import logo from '../../assets/small-logo.png';
import * as actions from '../../store/actions';

const DEFAULT_TIMEOUT = 3000;

const BrowserNotifier = () => {
    const dispatch = useDispatch();
    const notifier = useRef<any>();
    const {show, title, body, onClick} = useSelector(state => state.browserNotification);

    useEffect(() => {
        if (notifier.current.supported() && show) {
            notifier.current.show();
            setTimeout(() => dispatch(actions.resetBrowserNotification()), DEFAULT_TIMEOUT);
        }
    }, [notifier, dispatch, show]);

    const handleNotificationClicked = useCallback(() => {
        window.focus();
        onClick();
        dispatch(actions.resetBrowserNotification());
    }, [dispatch, onClick]);


    return <ReactNotifications
        onRef={ref => (notifier.current = ref)}
        title={title}
        body={body || ' '}
        icon={logo}
        timeout={DEFAULT_TIMEOUT}
        onClick={handleNotificationClicked}/>

}

export default BrowserNotifier;