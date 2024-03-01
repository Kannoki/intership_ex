import styles from "../styles/header.module.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
    HomeOutlined,
    EditOutlined,
    UserOutlined,
    BellOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";

const NAV_LINKS = [
    {
        url: "/",
        icon: HomeOutlined,
    },
    {
        url: "/user",
        icon: UserOutlined,
    },
    {
        url: "/device",
        icon: EditOutlined,
    },
    {
        url: "#",
        icon: UserOutlined,
    },
];

const fontSize = 18

const Header = () => {
    const location = useLocation();

    return (
        <>
            <Row className={styles["site-header"]}>
                <div className={styles["site-identity"]}>
                    <h3>MIND </h3>
                    <span style={{ marginLeft: 5 }}>Portal</span>
                </div>
                <Col md={4} sm={0} xs={0}>
                    <nav className={styles["site-navigation"]}>
                        <ul className={styles.nav}>
                            {NAV_LINKS.map((item, index) => (
                                <li key={index}>
                                    <Link key={index} to={item.url}>
                                        <item.icon
                                            className={
                                                location.pathname.startsWith(item.url) && item.url !== '/'
                                                    ? styles.active
                                                    : styles.item
                                            }
                                            style={{ fontSize }}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Col>
                <nav className={styles["site-navigation"]}>
                    <ul className={styles.nav}>
                        <li>
                            <BellOutlined className={styles.item} />
                        </li>
                        <li>
                            <UserOutlined className={styles.item} />
                        </li>
                    </ul>
                </nav>
            </Row>
            <div className={`${styles.screen}`}>
                <div className={` ${styles.flex} ${styles['flex-col']} ${styles['space-y-4']}`} style={{ padding: 10 }}>
                    <Outlet />
                </div>

            </div>
            <Row style={{ width: '100%' }} >
                <Col md={0} sm={24} xs={24}>
                    <Row justify={'center'}>
                        <nav className={styles["site-navigation"]} style={{ backgroundColor: 'white' }}>
                            <ul className={styles.nav}>
                                {NAV_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <Link key={index} to={item.url}>
                                            <item.icon
                                                style={location.pathname.startsWith(item.url) ? { color: 'white', backgroundColor: '#2948ff' } : { color: '#2948ff' }}
                                                className={
                                                    location.pathname.startsWith(item.url)
                                                        ? styles.active
                                                        : styles.item
                                                }
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </Row>

                </Col>
            </Row>
        </>
    );
};

export default Header;
