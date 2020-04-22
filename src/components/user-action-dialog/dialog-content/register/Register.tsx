import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import Container from 'react-bootstrap/Container'
import classes from './Register.module.scss';
import RolePicker from './role-picker/RolePicker';
import {Role} from '../../../../models/user.model';
import RegisterArtist from './register-artist/RegisterArtist';
import * as actions from '../../../../store/actions';

const Register = () => {
    const dispatch = useDispatch();
    const [selectedRole, setSelectedRole] = useState<Role>(Role.UNSPECIFIED);

    const pickRole = useCallback((role: Role) => {
        setSelectedRole(role);
        if (role === Role.CUSTOMER) {
            dispatch(actions.registerCustomer());
        }
    }, [dispatch, setSelectedRole]);

    let content = <RolePicker pickRole={pickRole}/>;
    if (selectedRole === Role.ARTIST) {
        content = <RegisterArtist register={() => dispatch(actions.registerArtist)} back={() => setSelectedRole(Role.UNSPECIFIED)}/>;
    }
    if (selectedRole === Role.CUSTOMER) {
        // content = <h1 onClick={this.backToPickRole}>CUSTOMER</h1>
    }

    return (
        <Container className={classes.Container}>
            {content}
        </Container>
    )
};

export default Register;