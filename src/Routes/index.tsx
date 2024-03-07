//layout
import routes from '../config/routes';
//pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import UserManage from '../pages/UserManage';

const publicRoutes: any = [
    {
        path: routes.home,
        Component: Home,
    },
    {
        path: routes.login,
        Component: Login,
    },
    {
        path: routes.usermanage,
        Component: UserManage,
    },
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
