import React, {FC} from 'react';
import classes from './NotFound.module.scss';

const notFoundPage: FC = (props: any) => {
    const message = <p>Path <strong>{props.location.pathname}</strong> is not valid</p>;
    return (
        <div className={classes.container}>
            <h1>Page Not Found</h1>
            {message}
        </div>
    );
};

export default notFoundPage;