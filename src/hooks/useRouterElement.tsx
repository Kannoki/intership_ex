import { useRoutes } from 'react-router-dom';
import Home from '../page/home/Home';
import LoginPage from '../page/auth/LoginPage';
import PageNotFound from '../page/Page404/PageNotFound';
import UsersManagerment from '../page/users/UsersManagerment';

export default function useRouterElement() {
  const routerElement = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/users', element: <UsersManagerment /> },
    { path: '/*', element: <PageNotFound /> },
  ]);
  return routerElement;
}
