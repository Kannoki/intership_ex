import React from 'react'
import styles from './navbar.module.scss'

import { BsGrid1X2Fill } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { TbAccessPoint } from "react-icons/tb";
import { PiGearSix } from "react-icons/pi";
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.desktop}>
                <span className={styles.titlePre}>mind <span className={styles.titleBack}>portal</span></span>
                <div className={styles.option}>
                    <BsGrid1X2Fill className={styles.icon} />
                    <Link to="/managerment/user"><FaUserGroup className={styles.icon} /></Link>
                    <Link to="/managerment/device"><TbAccessPoint className={styles.icon} /></Link>
                    <PiGearSix className={styles.icon} />
                </div>
                <div className={styles.account}>
                    <FaRegBell className={styles.icon} />
                    <FaRegUserCircle className={styles.icon} />
                </div>
            </div>

            <div className={styles.mobile}>
                <div className={styles.mobileOption}>
                    <BsGrid1X2Fill className={styles.iconMobile} />
                    <FaUserGroup className={styles.iconMobile} />
                    <TbAccessPoint className={styles.iconMobile} />
                    <PiGearSix className={styles.iconMobile} />
                </div>
            </div>
        </div>
    )
}

export default Navbar