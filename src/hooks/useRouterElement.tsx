import { useRoutes } from 'react-router-dom';
import Home from '../page/home/Home';
import LoginPage from '../page/auth/LoginPage';
import PageNotFound from '../page/Page404/PageNotFound';
import UsersManagerment from '../page/users/UsersManagerment';
import HeaderComponent from '../components/header/HeaderComponent';
import DeviceManager from '../page/DeviceManagerment/DeviceManager';
import SettingPage from '../page/setting/SettingPage';

export default function useRouterElement() {
  const routerElement = useRoutes([
    {
      element: <HeaderComponent />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/users', element: <UsersManagerment /> },
        { path: '/device', element: <DeviceManager /> },
        { path: '/setting', element: <SettingPage /> },
        { path: '/*', element: <PageNotFound /> },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);
  return routerElement;
}
