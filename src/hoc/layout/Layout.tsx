import React, { Component } from 'react';
import {connect} from 'react-redux';
import classes from './Layout.module.scss';
import Toolbar from '../../components/navigation/toolbar/Toolbar';
import SideDrawer from '../../components/navigation/sideDrawer/SideDrawer';

interface LayoutState {
    showSideDrawer: boolean;
}

class Layout extends Component<any> {
    state = {
        showSideDrawer: false
    };

    sideDrawerOpenedHandler = () => {
        this.setState( { showSideDrawer: true } );
    };

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    };

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState: LayoutState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    };

    render () {
        return (
            <>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} authorizedUser={this.props.authorizedUser}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    opened={this.sideDrawerOpenedHandler}
                    closed={this.sideDrawerClosedHandler}
                    authorizedUser={this.props.authorizedUser}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        authorizedUser: state.auth.user
    }
}

export default connect(mapStateToProps)(Layout);