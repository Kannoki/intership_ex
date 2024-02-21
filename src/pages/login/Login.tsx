import React from 'react';
import styles from './login.module.scss'
import Card from '../../components/card/Card';


const Login = () => {
    return (
        <div className={styles.container}>
            <img src='./image/background.jpg' alt='background' className={styles.image} />
            <div className={styles.formCard}>
                <Card />
            </div>
        </div>
    )
}

export default Login