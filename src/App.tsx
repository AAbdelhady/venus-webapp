import React from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from './axios';

const App: React.FC = () => {
    axios.get('test').then(res => {
        console.log('API Call response', res.data);
    }).catch(err => console.warn(err));
    const googleLoginLink = `${process.env.REACT_APP_API_BASE_URL}/oauth2/authorization/google`;
    const logoutLink = `${process.env.REACT_APP_API_BASE_URL}/logout`;
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer"> Learn React</a>
                <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
                <small>API base url environment variable value <b>{process.env.REACT_APP_API_BASE_URL}</b></small>
                <a href={googleLoginLink}>Google</a>
                <a href={logoutLink}>Logout</a>
            </header>
        </div>
    );
};

export default App;
