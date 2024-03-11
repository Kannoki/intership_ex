import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import App from "../App";
import UserPage from "../pages/maneger/UserPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "user", element: <UserPage /> },
    ],
  },

  { path: "/login", element: <LoginPage /> },
]);
