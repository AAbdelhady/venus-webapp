import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.scss';
import axios from './axios';
import {connect} from 'react-redux';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import RedirectPage from './pages/redirect/RedirectPage';
import TestPage from './pages/test/TestPage';
import Loading from './components/loading/Loading';
import * as actions from './store/actions/index';

class App extends React.Component<any> {

    componentDidMount(): void {
        this.props.fetchAuthorizedUser();
        axios.get('test').then(res => {
            console.log('API Call response', res.data);
        }).catch(err => console.warn(err));
    }

    render() {
        return (
            <>
                <Switch>
                    <Route path="/test" component={TestPage}/>
                    <Route path="/redirect" component={RedirectPage}/>
                    <Route path="/" exact component={HomePage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
                <Loading show={this.props.showLoading}/>
            </>
        )
    };
}

const mapStateToProps = state => {
    return {
        showLoading: state.ui.showLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAuthorizedUser: () => dispatch(actions.auth())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
