import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import LOGO from "../../assets/icons/logo.png"
import TELEGRAM from "../../assets/icons/telegram.png"

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>

                <div className={styles.header_logo_container}>
                    <img className={styles.header_logo} src={LOGO} alt="ikcrm logo" />
                    <p className={styles.header_logo_slogan}>Бесконечное множество, бизнес решений!</p>
                </div>

                <div className={styles.header_contact}>
                    <p className={styles.header_contact_phone}>
                        Звоните <span className={styles.header_contact_highlight}>+998 94 664 66 61</span>
                    </p>

                    <div className={styles.header_social_container}>
                        <p className={styles.header_contact_social}>
                            или пишите
                        </p>

                        <a target='_blank' href='https://t.me/ITKEYUZB' className={styles.header_img_container} >
                            <img className={styles.header_contact_img} src={TELEGRAM} alt="telegram ikcrm" />
                        </a>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header