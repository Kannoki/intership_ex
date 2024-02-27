import { FunctionComponent } from "react"
import styles from "./Logo.module.scss"

const Logo: FunctionComponent = () => {
    return (
        <div className={styles.logoContainer}>
            <p className={styles.mindLogo}>
                MIND
            </p>
            <p className={styles.portalLogo}>
                PORTAL
            </p>
        </div>
    )
}

export default Logo