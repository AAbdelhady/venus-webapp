import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.scss';
import axios from './axios';
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import RedirectPage from "./pages/redirect/RedirectPage";
import TestPage from "./pages/test/TestPage";
import {connect} from 'react-redux';
import * as actions from './store/actions/index';

class App extends React.Component<any> {

    componentDidMount(): void {
        this.props.fetchAuthorizedUser();
    }

    render() {
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
        )
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAuthorizedUser: () => dispatch(actions.auth())
    }
};

export default withRouter(connect(null, mapDispatchToProps)(App));
