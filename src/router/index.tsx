import { Outlet, createBrowserRouter, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import HomePage from "../pages/Home";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import Header from "../layouts/Header";

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const user = useAuth();
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user])

    return <Outlet />;
};

export default createBrowserRouter([
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
                    }
                ]
            },
        ],
    },
]);
