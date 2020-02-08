import React from 'react';
import {withRouter} from 'react-router-dom';
import './App.scss';
import {connect} from 'react-redux';
import Routes from './routes';
import Loading from './components/loading/Loading';
import Register from './components/register/Register';
import * as actions from './store/actions/index';
import {Role} from './models/user.model';
import {ThemeProvider} from '@material-ui/styles';
import {theme} from './utils/theme';

class App extends React.Component<any> {

    componentDidMount(): void {
        this.props.fetchAuthorizedUser();
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Routes />
                <Loading show={this.props.showLoading}/>
                <Register show={this.props.showRegister} register={this.props.registerUnspecifiedUser}/>
            </ThemeProvider>
        )
    };
}

const mapStateToProps = state => {
    return {
        showLoading: state.ui.showLoading,
        showRegister: state.auth.user?.role === Role.UNSPECIFIED
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAuthorizedUser: () => dispatch(actions.auth()),
        registerUnspecifiedUser: (asArtist) => dispatch(actions.register(asArtist))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
