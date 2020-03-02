import React, {Component} from "react";
import Layout from "../../hoc/layout/Layout";

// import * as classes from './ProfilePage.module.scss';

class ProfilePage extends Component<any> {
    render() {
        return (
            <Layout activeRoute={this.props.history}>
                <h1>User Profile</h1>
            </Layout>
        );
    }
}

export default ProfilePage;