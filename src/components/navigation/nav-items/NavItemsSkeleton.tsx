import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import classes from './NavItems.module.scss';


const NavItemsSkeleton = () => {
    return (
        <>
            <li className={classes.NavItemSkeletonContainer}>
                <Skeleton/>
            </li>
            <li className={classes.NavItemSkeletonContainer}>
                <Skeleton/>
            </li>
        </>
    )
};

export default NavItemsSkeleton;