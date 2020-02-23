import React, {Component} from "react";
import Layout from "../../hoc/layout/Layout";

class DashboardPage extends Component<any> {
    render() {
        return (
            <Layout activeRoute={this.props.history}>
                <h1>Artist - Dashboard</h1>
            </Layout>
        );
    }
}

export default DashboardPage;