import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes';
import Home from './pages/Home';
import DefaultLayout from './DefaultLayout';
import Login from './pages/auth';
const App: React.FC = () => (
    <div className="app">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            {publicRoutes.map((route: any, index: number) => {
                const Pages = route.Component;
                const Layout = DefaultLayout;

                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Pages></Pages>
                            </Layout>
                        }
                    ></Route>
                );
            })}
        </Routes>
    </div>
);

export default App;
