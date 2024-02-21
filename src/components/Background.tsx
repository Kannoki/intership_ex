import React from 'react'
import styles from '../styles/desktop-login.module.scss'
import bg from '../images/background.jpg'
const Background = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <img className={styles["image-wrap"]} src={bg} alt="" />
            {children}
        </div>
    )
}

export default Background