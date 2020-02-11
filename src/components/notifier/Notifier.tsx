import React, {Component} from 'react';
import ReactNotifications from 'react-browser-notifications';
import logo from '../../assets/small-logo.png';
import {Subject} from 'rxjs';

interface Props {
    showSubject: Subject<any>,
    title: string,
    body?: string,
    timeout?: number,
    clicked?: any
}

class Notifier extends Component<Props> {

    notifier;

    componentDidMount(): void {
        this.props.showSubject.subscribe(this.showNotification);
    }

    showNotification = () => {
        if(this.notifier.supported()) {
            this.notifier.show();
        }
    };

    handleNotificationClicked = (event) => {
        window.focus();
        if (this.props.clicked) {
            this.props.clicked();
        }
        this.notifier.close(event.target.tag);
    };

    get timeout() {
        const timeout = this.props.timeout ? this.props.timeout : 2000;
        return String(timeout);
    }

    render() {
        return <ReactNotifications
            onRef={ref => (this.notifier = ref)}
            title={this.props.title}
            body={this.props.body || ' '}
            icon={logo}
            timeout={this.timeout}
            onClick={event => this.handleNotificationClicked(event)}/>
    }
}

export default Notifier;