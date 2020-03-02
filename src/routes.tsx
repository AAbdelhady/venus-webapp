import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import TestPage from "./pages/test/TestPage";
import RedirectPage from "./pages/redirect/RedirectPage";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import {Role, User} from "./models/user.model";
import ProfilePage from "./pages/profile/ProfilePage";
import SearchPage from "./pages/search/SearchPage";
import ArtistPage from "./pages/artist/ArtistPage";
import withLazyLoad from "./hoc/withLazyLoad/withLazyLoad";

const lazyLoadedDashboard = withLazyLoad(() => import('./pages/dashboard/DashboardPage'));

const authorizedUserRoutes = (authorizedUser: User) => {
    return authorizedUser ? [
        <Route key="profile" path="/:lang?/profile" component={ProfilePage}/>
    ] : null;
};

const artistOnlyRoutes = (authorizedUser: User) => {
    return (authorizedUser?.role === Role.ARTIST) ? [
        <Route key="dashboard" path="/:lang?/dashboard" component={lazyLoadedDashboard}/>
    ] : null;
};

const customerOnlyRoutes = (authorizedUser: User) => {
    return (authorizedUser?.role === Role.CUSTOMER) ? [] : null;
};

const routes: React.FC = (props: any) => {
    return (
        <Switch>
            {authorizedUserRoutes(props.authorizedUser)}
            {artistOnlyRoutes(props.authorizedUser)}
            {customerOnlyRoutes(props.authorizedUser)}
            <Route key="search" path="/:lang?/search" component={SearchPage}/>
            <Route key="artist" path="/:lang?/artist/:id" component={ArtistPage}/>
            <Route path="/:lang?/test" component={TestPage}/>
            <Route path="/redirect" exact component={RedirectPage}/>
            <Route path="/:lang" component={HomePage}/>
            <Route path="/" exact component={HomePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    );
};

const mapStateToProps = state => {
    return {
        authorizedUser: state.auth.user
    };
};

export default connect(mapStateToProps)(routes);