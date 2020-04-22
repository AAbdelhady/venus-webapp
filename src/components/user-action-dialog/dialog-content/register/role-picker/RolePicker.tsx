import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './RolePicker.module.scss';
import RoleTile from './role-tile/RoleTile';
import BusinessIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';
import {Button} from '@material-ui/core';
import {logoutLink} from '../../../../../utils/constants';
import React from 'react';
import {Role} from '../../../../../models/user.model';

const title = 'How do you want to use the app?';
const iconStyle = {fontSize: 50};

const RolePicker = (props) => (
    <>
        <h2 className={classes.Title}>{title}</h2>
        <Row>
            <Col sm className={classes.ArtistTile}>
                <RoleTile title="Artist" click={() => props.pickRole(Role.ARTIST)}>
                    <BusinessIcon style={iconStyle}/>
                </RoleTile>
            </Col>
            <Col sm className={classes.CustomerTile}>
                <RoleTile title="Customer" click={() => props.pickRole(Role.CUSTOMER)}>
                    <PersonIcon style={iconStyle}/>
                </RoleTile>
            </Col>
        </Row>
        <div className={classes.LogoutLinkContainer}>
            <Button href={logoutLink} color="primary">
                Logout
            </Button>
        </div>
    </>
);

export default RolePicker;