//layout
import routes from '../config/routes';
//pages
import Home from '../pages/Home';
import Login from '../pages/auth';
import UserManage from '../pages/UserManage';
import DeviceManage from '../pages/DeviceManage';

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
    {
        path: routes.devicemanage,
        Component: DeviceManage,
    },
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
