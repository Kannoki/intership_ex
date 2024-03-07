import { useRoutes } from 'react-router-dom';
import Home from '../page/home/Home';
import LoginPage from '../page/auth/LoginPage';
import PageNotFound from '../page/Page404/PageNotFound';

export default function useRouterElement() {
  const routerElement = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/*', element: <PageNotFound /> },
  ]);
  return routerElement;
}
