import React, {Component} from "react";
import Layout from "../../hoc/layout/Layout";
import CustomerProfile from './customer/CustomerProfile';
import {connect} from 'react-redux';
import {CUSTOMER, Role} from '../../models/user.model';

// import * as classes from './ProfilePage.module.scss';

class ProfilePage extends Component<any> {
    render() {
        const profileContent = this.props.authorizedUser.role === Role[CUSTOMER] ? <CustomerProfile user={this.props.authorizedUser}/> : <h1>User Profile</h1>;
        return (
            <Layout history={this.props.history}>
                {profileContent}
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        authorizedUser: state.auth.user
    }
};

export default connect(mapStateToProps)(ProfilePage);