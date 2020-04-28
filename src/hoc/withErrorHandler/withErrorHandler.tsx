import React, {useCallback, useEffect, useState} from 'react';
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
    const [error, setError] = useState<any>(null);

    const reqInterceptor = useCallback(axios.interceptors.request.use(req => {
        setError(null);
        return req;
    }), [axios]);

    const resInterceptor = useCallback(axios.interceptors.response.use(res => res, error => {
        setError(null);
        throw error;
    }), [axios]);

    useEffect(() => {
        return () => {
            axios.interceptors.request.eject(reqInterceptor);
            axios.interceptors.response.eject(resInterceptor);
        }
    }, [reqInterceptor, resInterceptor]);

    return (
        <>
            <Dialog open={shouldShowError(error)} onClose={() => setError(null)} zIndex={ZIndex.errorHandlerDialog}>
                <p className={classes.Message}>{errorMessage(error)}</p>
            </Dialog>
            <WrappedComponent {...props} />
        </>
    );
};

export default withErrorHandler;