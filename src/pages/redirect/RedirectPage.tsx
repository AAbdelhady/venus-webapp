import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { loadFromLocalStorage } from '../../utils/localStorage';
import { localStorageKeys } from '../../utils/constants';

class RedirectPage extends Component {
    state = {
        redirectUrl: null
    };

    componentDidMount(): void {
        const redirectUrl = loadFromLocalStorage(localStorageKeys.redirect);
        this.setState({ redirectUrl: redirectUrl });
    }

    render() {
        if (this.state.redirectUrl) {
            return <Redirect to={this.state.redirectUrl}/>
        }
        return <p>Redirecting...</p>;
    }
}

export default RedirectPage;