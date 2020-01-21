import React from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from './axios';

const App: React.FC = () => {
    axios.get('test').then(res => {
        console.log('API Call response', res.data);
    }).catch(err => console.warn(err));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <small>API base url environment variable value <b>{process.env.REACT_APP_API_BASE_URL}</b></small>
      </header>
    </div>
  );
};

export default App;
