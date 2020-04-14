import React, {useCallback, useState} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {logoutLink} from '../../../../utils/constants';
import {User} from '../../../../models/user.model';
import classes from './ProfileMenuNavItem.module.scss';

interface Props {
    user: User
}

const MENU_ID = "profile-menu";

const ProfileMenuNavItem = (props: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const langPrefix = useSelector(state => state.i18n.langPrefix);
    const openLoggedInActions = useCallback((event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget), [setAnchorEl]);
    const closeLoggedInActions = useCallback(() => setAnchorEl(null), [setAnchorEl]);
    return (
        <>
            <span onClick={openLoggedInActions}>{props.user.firstName} {props.user.lastName}</span>
            <Menu id={MENU_ID} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={closeLoggedInActions} className={classes.ProfileMenu}>
                <MenuItem onClick={closeLoggedInActions}> <NavLink to={`${langPrefix}/profile`}>Profile</NavLink></MenuItem>
                <MenuItem onClick={closeLoggedInActions}> <a href={logoutLink}>Logout</a></MenuItem>
            </Menu>
        </>
    )
};

export default ProfileMenuNavItem;