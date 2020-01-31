import React, {Component} from "react";
import Layout from "../../hoc/layout/Layout";

class ArtistPage extends Component<any> {
    render() {
        return (
            <Layout>
                <h1>Artist - Artist/{this.props.match.params.id}</h1>
            </Layout>
        );
    }
}

export default ArtistPage;