import Dashboard from '../views/Dashboard/Dashboard';
import UserProfile from '../views/UserProfile/UserProfile';
import Typography from '../views/Typography/Typography';
import Icons from '../views/Icons/Icons';
import Notifications from '../views/Notifications/Notifications';
import Upgrade from '../views/Upgrade/Upgrade';

const dashboardRoutes = [
    {
        path: '/homepage',
        name: 'Home Page',
        icon: 'pe-7s-rocket',
        component: Dashboard
    },
    {
        path: '/reports',
        name: 'Reports',
        icon: 'pe-7s-news-paper',
        component: Typography
    },
    {
        path: '/subscribe',
        name: 'Subscribe',
        icon: 'pe-7s-news-paper',
        component: Icons
    },
    {
        path: '/settings',
        name: 'Settings',
        icon: 'pe-7s-settings',
        component: UserProfile
    },
    {
        upgrade: true,
        path: '/upgrade',
        name: 'About LawApp',
        icon: 'pe-7s-rocket',
        component: Upgrade
    },
    {
 redirect: true, path: '/', to: '/homepage', name: 'Homepage' 
}
];

export default dashboardRoutes;
