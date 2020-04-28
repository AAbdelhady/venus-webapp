import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import RedirectPage from "./pages/redirect/RedirectPage";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import {Role, User} from "./models/user.model";
import ProfilePage from "./pages/profile/ProfilePage";
import SearchPage from "./pages/search/SearchPage";
import ArtistPage from "./pages/artist/ArtistPage";

const DashboardPage = React.lazy(() => import('./pages/dashboard/DashboardPage'));

const authorizedUserRoutes = (authorizedUser: User) => authorizedUser && [
    <Route key="profile" path="/:lang?/profile" component={ProfilePage}/>
];

const artistOnlyRoutes = (authorizedUser: User) => (authorizedUser?.role === Role.ARTIST) && [
    <Route key="dashboard" path="/:lang?/dashboard" component={DashboardPage}/>
];

const customerOnlyRoutes = (authorizedUser: User) => (authorizedUser?.role === Role.CUSTOMER) && [];

const Routes = () => {
    const authorizedUser = useSelector(state => state.auth.user);
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Switch>
                {authorizedUserRoutes(authorizedUser)}
                {artistOnlyRoutes(authorizedUser)}
                {customerOnlyRoutes(authorizedUser)}
                <Route key="search" path="/:lang?/search" component={SearchPage}/>
                <Route key="artist" path="/:lang?/artist/:id" component={ArtistPage}/>
                <Route path="/redirect" exact component={RedirectPage}/>
                <Route path="/:lang" component={HomePage}/>
                <Route path="/" exact component={HomePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Suspense>
    );
};

export default Routes;