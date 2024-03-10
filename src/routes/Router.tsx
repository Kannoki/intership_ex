import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },

  { path: "/login", element: <LoginPage /> },
]);
