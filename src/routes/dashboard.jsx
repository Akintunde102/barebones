import Homepage from '../views/Homepage/Homepage';
import Settings from '../views/Settings/Settings';
import Reports from '../views/Reports/Reports';
import Subscribe from '../views/Subscribe/Subscribe';
import Upgrade from '../views/Upgrade/Upgrade';

const dashboardRoutes = [
    {
        path: '/homepage',
        name: 'Home Page',
        icon: 'pe-7s-rocket',
        component: Homepage
    },
    {
        path: '/reports',
        name: 'Reports',
        icon: 'pe-7s-news-paper',
        component: Reports
    },
    {
        path: '/subscribe',
        name: 'Subscribe',
        icon: 'pe-7s-news-paper',
        component: Subscribe
    },
    {
        path: '/settings',
        name: 'Settings',
        icon: 'pe-7s-settings',
        component: Settings
    },
    {
        upgrade: true,
        path: '/upgrade',
        name: 'About LawApp',
        icon: 'pe-7s-rocket',
        component: Upgrade
    },
    {
        redirect: true,
        path: '/',
        to: '/homepage',
        name: 'Homepage'
    }
];

export default dashboardRoutes;
