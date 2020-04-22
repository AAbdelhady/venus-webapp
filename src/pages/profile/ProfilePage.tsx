import React from "react";
import {useSelector} from 'react-redux';
import Layout from "../../hoc/layout/Layout";
import CustomerProfile from './customer/CustomerProfile';
import {CUSTOMER, Role} from '../../models/user.model';

const ProfilePage = () => {
    const authorizedUser = useSelector(state => state.auth.user);
    const profileContent = authorizedUser.role === Role[CUSTOMER] ? <CustomerProfile user={authorizedUser}/> : <h1>User Profile</h1>;
    return (
        <Layout>
            {profileContent}
        </Layout>
    );
};

export default ProfilePage;