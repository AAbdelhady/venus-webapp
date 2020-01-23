import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import axios from './axios';
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import RedirectPage from "./pages/redirect/RedirectPage";
import TestPage from "./pages/test/TestPage";

const App: React.FC = () => {
    axios.get('test').then(res => {
        console.log('API Call response', res.data);
    }).catch(err => console.warn(err));

    return (
        <div>
            <Switch>
                <Route path="/test" component={TestPage}/>
                <Route path="/redirect" component={RedirectPage}/>
                <Route path="/" exact component={HomePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
};

export default App;
