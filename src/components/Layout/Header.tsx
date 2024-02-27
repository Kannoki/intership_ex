import styles from "./Header.module.scss";
import React, { FunctionComponent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../components/Common/Logo/Logo";
import { AppstoreOutlined, BellOutlined, SettingOutlined, StockOutlined, UserAddOutlined, UsergroupAddOutlined } from "@ant-design/icons";

const Header: FunctionComponent = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path ? styles.activeNav : '';

    return (
        <div className={styles.topnav}>
            <div className={styles.logo}>
            <NavLink to="/home" style={{ textDecoration: 'none' }}>
                <Logo />
            </NavLink>
            </div>

            <div className={styles.menuItem}>
                {[
                    { path: '/overview', icon: <AppstoreOutlined />},
                    { path: '/users', icon: <UsergroupAddOutlined />},
                    { path: '/devices', icon: <StockOutlined />},
                    { path: '/setting', icon: <SettingOutlined />}
                ].map(item => (
                    <NavLink key={item.path} to={item.path} className={`${styles.navLink} ${isActive(item.path)}`}>
                        {React.cloneElement(item.icon, {
                            style: {
                                color: isActive(item.path) ? 'green' : 'white',
                                fontSize: '22px'
                            }
                        })}
                    </NavLink>
                ))}
            </div>

            <div className={styles.leftMenu}>
                <NavLink to="/notification">
                    <BellOutlined style={{ color: 'white', fontSize: '22px' }} />
                </NavLink>

                <NavLink to="/user">
                    <UserAddOutlined style={{ color: 'white', fontSize: '22px' }} />
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
