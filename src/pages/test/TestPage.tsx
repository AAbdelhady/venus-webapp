import React, {Component} from 'react';
import {googleLogin} from '../../utils/common';

class TestPage extends Component {
    state = {
        redirectUrl: null
    };

    render() {
        return <a href="/" onClick={googleLogin}>Google</a>;
    }
}

export default TestPage;