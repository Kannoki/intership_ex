import React from 'react'
import styles from './carddevice.module.scss'
import { MdQrCodeScanner } from 'react-icons/md'

const CardDevice = () => {
    return (
        <div className={styles.main}>
            <div>
            <img
                    alt="example"
                    src="../"
                />
            </div>
            <div>
                <div>
                    <p>Energy Device 1CT</p>
                    <MdQrCodeScanner />
                </div>
            </div>
        </div>
    )
}

export default CardDevice