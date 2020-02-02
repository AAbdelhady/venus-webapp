import React, { Component } from 'react';
import Dialog from '../dialog/Dialog';
import {ZIndex} from '../../utils/enums';

const withErrorHandler: any = ( WrappedComponent, axios ) => {

    return class extends Component {

        reqInterceptor;
        resInterceptor;
        state: any = {
            error: null
        };

        constructor(props) {
            super(props);
            this.initInterceptors();
        }

        componentWillUnmount () {
            this.ejectInterceptors();
        }

        errorConfirmedHandler = () => {
            this.setState( { error: null } );
        };

        get showError(): boolean {
            return this.state.error && this.state.error?.response?.status !== 401;
        }

        private initInterceptors() {
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState( { error: null } );
                return req;
            } );
            this.resInterceptor = axios.interceptors.response.use( res => res, error => {
                this.setState( { error: error } );
                throw error;
            } );
        }

        private ejectInterceptors() {
            axios.interceptors.request.eject( this.reqInterceptor );
            axios.interceptors.response.eject( this.resInterceptor );
        }

        render () {
            let errorMessage: any = null;
            if (this.state.error?.response) {
                const errorResponse = this.state.error.response;
                const meta = `[status: ${errorResponse.status} - code: ${errorResponse.data.code?.value}]`;
                const message = errorResponse.data.message || errorResponse.message;
                errorMessage = <p><strong>{meta}</strong>&nbsp;{message}</p>
            }
            return (
                <>
                    <Dialog open={this.showError} onClose={this.errorConfirmedHandler} zIndex={ZIndex.errorHandlerDialog}>
                        {errorMessage}
                    </Dialog>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
};

export default withErrorHandler;