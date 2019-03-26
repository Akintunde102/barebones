import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import { style } from '../../variables/Variables';
import dashboardRoutes from '../../routes/dashboard';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/animate.min.css';
import '../../assets/sass/light-bootstrap-dashboard.css';
import '../../assets/css/demo.css';
import '../../assets/css/pe-icon-7-stroke.css';

class Dashboard extends Component {
    constructor ( props ) {
        super( props );
        this.componentDidMount = this.componentDidMount.bind( this );
        this.handleNotificationClick = this.handleNotificationClick.bind( this );
        this.state = {
            _notificationSystem: null
        };
    }

    componentDidMount () {
        this.setState( { _notificationSystem: this.refs.notificationSystem } );
        const _notificationSystem = this.refs.notificationSystem;
        const color = Math.floor( Math.random() * 4 + 1 );
        let level;
        switch ( color ) {
        case 1:
            level = 'success';
            break;
        case 2:
            level = 'warning';
            break;
        case 3:
            level = 'error';
            break;
        case 4:
            level = 'info';
            break;
        default:
            break;
        }
        _notificationSystem.addNotification( {
            title: <span data-notify="icon" className="pe-7s-gift" />,
            message: (
                <div>
          This should be a Notification
                </div>
            ),
            level,
            position: 'tr',
            autoDismiss: 15
        } );
    }

    componentDidUpdate ( e ) {
        if (
            window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf( 'nav-open' ) !== -1
        ) {
            document.documentElement.classList.toggle( 'nav-open' );
        }
        if ( e.history.action === 'PUSH' ) {
            document.documentElement.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
            this.refs.mainPanel.scrollTop = 0;
        }
    }

    handleNotificationClick ( position ) {
        const color = Math.floor( Math.random() * 4 + 1 );
        let level;
        switch ( color ) {
        case 1:
            level = 'success';
            break;
        case 2:
            level = 'warning';
            break;
        case 3:
            level = 'error';
            break;
        case 4:
            level = 'info';
            break;
        default:
            break;
        }
        this.state._notificationSystem.addNotification( {
            title: <span data-notify="icon" className="pe-7s-gift" />,
            message: (
                <div>
        Welcome, to the
                    {' '}
                    <b>LawApp</b>
                </div>
            ),
            level,
            position,
            autoDismiss: 15
        } );
    }

    render () {
        return (
            <div className="wrapper">
                <NotificationSystem ref="notificationSystem" style={style} />
                <Sidebar {...this.props} />
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <Header {...this.props} />
                    <Switch>
                        {dashboardRoutes.map( ( prop, key ) => {
                            if ( prop.name === 'Notifications' ) {
                                return (
                                    <Route
                                        path={prop.path}
                                        key={key}
                                        render={routeProps => (
                                            <prop.component
                                                {...routeProps}
                                                handleClick={this.handleNotificationClick}
                                            />
                                        )}
                                    />
                                );
                            }
                            if ( prop.redirect ) { return <Redirect from={prop.path} to={prop.to} key={key} />; }
                            return (
                                <Route path={prop.path} component={prop.component} key={key} />
                            );
                        } )}
                    </Switch>
                    <Footer />
                </div>
            </div>
        );
    }
}

export {
    Dashboard
};
