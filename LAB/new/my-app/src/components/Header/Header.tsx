import styles from "./Header.module.scss";
import React, { CSSProperties, FunctionComponent } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AppstoreOutlined, BellOutlined, SettingOutlined, StockOutlined, UserAddOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Popover, Typography } from "antd";
import { MdAccountCircle } from "react-icons/md";
import { PiWarningCircleLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

const { Text } = Typography;

const iconStyle: CSSProperties = {
    marginRight: '10px', 
    fontSize: '24px'
}
const textStyle: CSSProperties = {
    fontWeight: 'bold'
}
const text = <div className={styles.titlePopUp}><MdAccountCircle style={iconStyle} /> Name </div>;

const content = (
    <div>
        <hr />
        <div className={styles.titlePopUp}>
            <PiWarningCircleLight style={{color: 'green',...iconStyle}} />
            <Text style={textStyle}>Thông tin người dùng</Text>
        </div>
        <div className={styles.titlePopUp}>
            <CiSettings style={iconStyle} />
            <Text style={textStyle}>Cài đặt thông tin người dùng</Text>
        </div>
        <div className={styles.titlePopUp}>
            <MdOutlineDelete style={{color: 'red',...iconStyle}}/>
            <Text style={textStyle}>Xoá người dùng</Text>
        </div>
    </div>
);

const Header: FunctionComponent = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path ? styles.activeNav : '';

    return (
        <>
            <div className={styles.topnav}>
                <div className={styles.logo}>
                    <NavLink to="/home" style={{ textDecoration: 'none', color: 'black',fontFamily: "fantasy" }}>
                        Mind
                    </NavLink>
                </div>

                <div className={styles.menuItem}>
                    {[
                        { path: '/home', icon: <AppstoreOutlined /> },
                        { path: '/users', icon: <UsergroupAddOutlined /> },
                        { path: '/devices', icon: <StockOutlined /> },
                        { path: '/setting', icon: <SettingOutlined /> }
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

                    <Popover placement="rightTop" title={text} content={content}>
                        <Text style={{ color: 'white', fontWeight: 'bolder' }}>Admin</Text>
                    </Popover>

                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Header;
