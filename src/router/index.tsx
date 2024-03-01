import { Outlet, createBrowserRouter, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import HomePage from "../pages/Home";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import Header from "../layouts/Header";
import SubHeader from "../components/SubHeader";
import Overview from "../pages/Overview/Overview";
import UserManagerment from "../pages/UserManagerment/UserManagerment";
import TestUser from "../pages/TestUser/TestUser";
import Devicemanagerment from "../pages/DeviceManagerment/Devicemanagerment";

const userNav = [
  {
    label: "Tổng quan",
    url: '/user'
  },
  {
    label: 'Danh sách người dùng',
    url: '/user/list-user'
  },
  {
    label: 'Người dùng thử nghiệm',
    url: '/user/user-test'
  }
]
const deviceNav = [
  {
    label: "Tổng quan",
    url: '/device'
  },
  {
    label: 'Danh sách thiết bị',
    url: '/device/list-device'
  },
  {
    label: 'Cài đặt thiết bị',
    url: '/device/install-device'
  }
]

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const token = useAuth();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Header />,
        children: [
          {
            element: <HomePage />,
            path: "/",
          },
          {
            element: <SubHeader label="QUẢN LÝ NGƯỜI DÙNG" items={userNav} />,
            children: [
              {
                element: <Overview />,
                path: '/user/'
              },
              {
                element: <UserManagerment />,
                path: '/user/list-user'
              },
              {
                element: <TestUser />,
                path: '/user/user-test'
              }
            ]
          },
          {
            element: <SubHeader label="QUẢN LÝ THIẾT BỊ" items={deviceNav} />,
            children: [
              {
                element: <Overview />,
                path: '/device'
              },
              {
                element: <Devicemanagerment />,
                path: '/device/list-device'
              },
              {
                element: <TestUser />,
                path: '/device/install-device'
              }
            ]
          }
        ],
      },
    ],
  },
]);
export default router