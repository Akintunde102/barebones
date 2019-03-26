import { Dashboard } from '../layouts/Dashboard/Dashboard';
import FrontPage from '../views/FrontPage/FrontPage';

const auth = {
    isAuthenticated: false,
    authenticate ( cb ) {
        this.isLogged = true;
        setTimeout( cb, 100 );
    },
    signout ( cb ) {
        this.isLogged = false;
        setTimeout( cb, 100 );
    }
};

auth.authenticate();

const indexRoutes = () => {
    const toShow = [ { path: '/', name: 'FrontPage', component: FrontPage },
        { path: '/homepage', name: 'Home', component: Dashboard } ];

    let arrayKey = 0;

    if ( auth.isLogged ) {
        arrayKey = 1;
    }

    return toShow[ arrayKey ];
};

export default indexRoutes;
