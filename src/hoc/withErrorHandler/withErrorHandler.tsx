import React from 'react';
import useHttpErrorHandler from '../../hooks/http-error-handler';
import Dialog from '../dialog/Dialog';
import {ZIndex} from '../../utils/enums';
import classes from './withErrorHandler.module.scss';

const shouldShowError = (error) => !!(error && (error?.response?.status !== 401));

const errorMessage = (error) => {
    if (error?.response) {
        const errorResponse = error.response;
        const meta = `[status: ${errorResponse.status} - code: ${errorResponse.data.code?.value}]`;
        const message = errorResponse.data.message || errorResponse.message;
        return <span><strong>{meta}</strong>&nbsp;{message}</span>
    }
    if (error?.message) {
        return <strong>{error?.message}</strong>;
    }
    return <strong>Something went wrong :(</strong>
}

const withErrorHandler: any = (WrappedComponent, axios) => (props) => {
    const [error, clearError] = useHttpErrorHandler(axios);
    return (
        <>
            <Dialog open={shouldShowError(error)} onClose={clearError} zIndex={ZIndex.errorHandlerDialog}>
                <p className={classes.Message}>{errorMessage(error)}</p>
            </Dialog>
            <WrappedComponent {...props} />
        </>
    );
};

export default withErrorHandler;
