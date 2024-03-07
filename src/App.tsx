import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes';
import Home from './pages/Home';
import DefaultLayout from './DefaultLayout';
const App: React.FC = () => (
    <Router>
        <div className="app">
            <Routes>
                {publicRoutes.map((route: any, index: number) => {
                    const Pages = route.Component;
                    const Layout = DefaultLayout;
                    console.log(Pages);
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Pages></Pages>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    </Router>
);

export default App;
