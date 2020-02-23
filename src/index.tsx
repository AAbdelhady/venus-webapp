import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import App from './App';
import authReducer from './store/reducers/auth';
import uiReducer from './store/reducers/ui';
import artistReducer from './store/reducers/artist';
import i18nReducer from './store/reducers/i18n';


// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    artist: artistReducer,
    i18n: i18nReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
