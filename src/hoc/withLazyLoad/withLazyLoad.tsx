import React, {Component} from 'react';

const withLazyLoad = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        };

        componentDidMount() {
            importComponent().then(cmp => {
                this.setState({component: cmp.default});
            });
        }

        render() {
            const C: any = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
};

export default withLazyLoad;