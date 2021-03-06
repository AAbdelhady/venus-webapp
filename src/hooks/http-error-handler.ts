import {useEffect, useState} from 'react';

export default axios => {
    const [error, setError] = useState(null);

    const reqInterceptor = axios.interceptors.request.use(req => {
        setError(null);
        return req;
    });
    const resInterceptor = axios.interceptors.response.use(
        res => res,
        err => {
            setError(err);
            throw error;
        }
    );

    useEffect(() => {
        return () => {
            axios.interceptors.request.eject(reqInterceptor);
            axios.interceptors.response.eject(resInterceptor);
        };
    }, [axios, reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => setError(null);

    return [error, errorConfirmedHandler];
}
