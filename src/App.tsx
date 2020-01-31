import React from 'react';
import {withRouter} from 'react-router-dom';
import './App.scss';
import {connect} from 'react-redux';
import Routes from './routes';
import Loading from './components/loading/Loading';
import * as actions from './store/actions/index';

class App extends React.Component<any> {

    componentDidMount(): void {
        this.props.fetchAuthorizedUser();
    }

    render() {
        return (
            <>
                <Routes />
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
