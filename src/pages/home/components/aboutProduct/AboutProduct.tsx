import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import TELEGREM from "../../../../assets/icons/telegram.png";
import GMAIL from "../../../../assets/icons/gmail.png";
// images
import SOFTWARE from "../../../../assets/images/software.png";

const AboutProduct: FC = () => {
    return (
        <section className={styles.about}>
            <div className={styles.about_container}>
                <div className={styles.about_social_container}>

                    <h2 className={styles.about_title}> <span className={styles.about_highlight}>Получите презентацию</span> с нашими ценами через минуту</h2>

                    <div className={styles.about_socials}>
                        <a style={{textDecoration: "none", color: "white"}} target='_blank' href='https://t.me/ITKEYUZB' className={styles.about_social}>
                            Получить в Telegram
                            <img className={styles.about_social_img} src={TELEGREM} alt="" />
                        </a>

                        <div className={styles.about_social}>
                            Получить на Почту
                            <img className={styles.about_social_img} src={GMAIL} alt="" />
                        </div>
                    </div>

                </div>

                <div className={styles.about_soft_container}>
                    <img className={styles.about_soft_img} src={SOFTWARE} alt="" />
                </div>

            </div>
        </section>
    )
}

export default AboutProduct