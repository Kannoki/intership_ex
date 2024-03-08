import { useRoutes } from 'react-router-dom';
import Home from '../page/home/Home';
import LoginPage from '../page/auth/LoginPage';
import PageNotFound from '../page/Page404/PageNotFound';
import UsersManagerment from '../page/users/UsersManagerment';
import HeaderComponent from '../components/header/HeaderComponent';

export default function useRouterElement() {
  const routerElement = useRoutes([
    { path: '/', element: <HeaderComponent tab='1' /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/users', element: <HeaderComponent tab='2' /> },
    { path: '/*', element: <PageNotFound /> },
  ]);
  return routerElement;
}
