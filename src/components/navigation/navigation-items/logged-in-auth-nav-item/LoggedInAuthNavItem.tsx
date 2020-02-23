import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import NavigationItem from '../navigation-item/NavigationItem';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {NavLink} from 'react-router-dom';
import {logoutLink} from '../../../../utils/constants';
import {User} from '../../../../models/user.model';

interface Props {
    authorizedUser: User
}

const LoggedInAuthNavItem = (props: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const langPrefix = useSelector(state => state.i18n.langPrefix);

    const openLoggedInActions = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const closeLoggedInActions = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <NavigationItem clicked={openLoggedInActions}>{props.authorizedUser.firstName} {props.authorizedUser.lastName}</NavigationItem>;
            <Menu id="logged-in-actions-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={closeLoggedInActions}>
                <MenuItem onClick={closeLoggedInActions}> <NavLink to={`${langPrefix}/profile`}>Profile</NavLink></MenuItem>
                <MenuItem onClick={closeLoggedInActions}> <a href={logoutLink}>Logout</a></MenuItem>
            </Menu>
        </>
    )

};

export default LoggedInAuthNavItem;