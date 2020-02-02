import React from 'react';
import RegisterTile from './register-tile/RegisterTile';
import Dialog from '../../hoc/dialog/Dialog';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import BusinessIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';
import classes from './Register.module.scss';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const iconStyle = { fontSize: 50 };

const register = (props) => {
    return (
        <Dialog open={props.show} title="How do you want to use the app?">
            <Container className={classes.Container}>
                <Row>
                    <Col sm>
                        <RegisterTile title="Artist" click={() => props.register(true)}>
                            <BusinessIcon style={iconStyle}/>
                        </RegisterTile>
                    </Col>
                    <Col sm className={classes.CustomerTile}>
                        <RegisterTile title="Customer" click={() => props.register(false)}>
                            <PersonIcon style={iconStyle}/>
                        </RegisterTile>
                    </Col>
                </Row>
            </Container>
        </Dialog>
    )
};

export default withErrorHandler(register, axios);