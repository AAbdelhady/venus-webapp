import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container'
import classes from './Register.module.scss';
import Dialog from '../../hoc/dialog/Dialog';
import RolePicker from './role-picker/RolePicker';
import {Role} from '../../models/user.model';
import RegisterArtist from './register-artist/RegisterArtist';
import * as actions from '../../store/actions/index';
import {ArtistRequest} from '../../api/artist.api';

interface Props {
    show: boolean;

    registerArtist(artistRequest: ArtistRequest);

    registerCustomer();
}

class Register extends Component<Props> {

    state = {
      role: Role.UNSPECIFIED
    };

    pickRole = (role: Role) => {
        this.setState({role: role});
    };

    backToPickRole = () => {
      this.setState({role: Role.UNSPECIFIED});
    };

    render() {
        let content = <RolePicker pickRole={this.pickRole}/>;
        if (this.state.role === Role.ARTIST) {
            content = <RegisterArtist register={this.props.registerArtist} back={this.backToPickRole}/>;
        }
        if (this.state.role === Role.CUSTOMER) {
            content = <h1 onClick={this.backToPickRole}>CUSTOMER</h1>
        }

        return (
            <Dialog open={this.props.show}>
                <Container className={classes.Container}>
                    {content}
                </Container>
            </Dialog>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerArtist: (artistRequest: ArtistRequest) => dispatch(actions.registerArtist(artistRequest)),
        registerCustomer: () => dispatch(actions.registerCustomer())
    };
};

export default connect(null, mapDispatchToProps)(Register);