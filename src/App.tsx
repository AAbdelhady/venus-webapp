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
import './i18n/i18n';

interface State {
    isLangInitFromRoute: boolean;
}

class App extends React.Component<any> {

    state: State = {
        isLangInitFromRoute: false
    };

    componentDidMount(): void {
        this.props.fetchAuthorizedUser();
        this.props.setLanguageFromRoute(this.props.history).then(() => {
            this.setState({isLangInitFromRoute: true})
        });
    }

    render() {
        return this.state.isLangInitFromRoute ?
            <ThemeProvider theme={theme}>
                <Routes/>
                <Loading show={this.props.showLoading}/>
                <Register show={this.props.showRegister}/>
            </ThemeProvider>
            : null;
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
        setLanguageFromRoute: (history) => dispatch(actions.setLanguageFromRoute(history))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
