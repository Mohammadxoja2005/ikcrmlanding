import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import LOGO from "../../assets/icons/logo.png";
import TELEGRAM from "../../assets/icons/telegram.png";
import INSTAGRAM from "../../assets/icons/instagram.png";
import FACEBOOK from "../../assets/icons/facebook.png";
import PHONE from "../../assets/icons/phone.png";

const Footer: FC = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_container}>
                    <div className={styles.footer_info}>
                        <img className={styles.footer_info_logo} src={LOGO} alt="" />
                        <p className={styles.footer_info_name}>Бесконечное множество, бизнес решений!</p>
                    </div>
                    <div className={styles.footer_info} >
                        <p className={styles.footer_info_title}>Меню</p>

                        <div className={styles.footer_info_links}>
                            <a href="#" className={styles.footer_info_name}>Главная</a>
                            <a href="#" className={styles.footer_info_name}>О компании</a>
                            <a href="#" className={styles.footer_info_name}>Кейсы</a>
                            <a href="#" className={styles.footer_info_name}>Контакты</a>
                        </div>

                    </div>
                    <div className={styles.footer_info} >
                        <p className={styles.footer_info_title}>Услуги</p>

                        <div className={styles.footer_info_links}>
                            <a href="#" className={styles.footer_info_name}>IT Key</a>
                        </div>
                    </div>
                    <div className={styles.footer_info}>
                        <p className={styles.footer_info_title}>Контакты</p>

                        <div className={styles.footer_info_contact}>
                            <div className={styles.footer_info_number}>
                                <img src={PHONE} alt="" />
                                +998 97 777 34 19
                            </div>
                            <p className={styles.footer_info_schedule}>Пн-Пт с 10:00-19:00 Сб-Вс: Выходной</p>

                            <a target='_blank' href='https://t.me/ITKEYUZB' className={styles.footer_tg_container}>
                                <img src={TELEGRAM} alt="" />
                            </a>

                        </div>
                    </div>
                    <div className={styles.footer_info}>
                        <p className={styles.footer_info_title}>Мы в социальных сетях</p>

                        <div className={styles.footer_info_social}>
                            <a target='_blank' href='https://t.me/ITKEYUZB' className={styles.footer_tg_container}>
                                <img src={TELEGRAM} alt="" />
                            </a>
                            <a target='_blank' href='https://www.instagram.com/itkeysofttech/' className={styles.footer_tg_container}>
                                <img src={INSTAGRAM} alt="" />
                            </a>
                            <a target='_blank' href='https://www.facebook.com/ITKEYUZ?mibextid=LQQJ4d' className={styles.footer_tg_container}>
                                <img src={FACEBOOK} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

            </footer>

            <section className={styles.footer_politic}>
                <div className={styles.footer_politic_container}>
                    <p className={styles.footer_politic_text}>Все права защищены
                        OOO «ITKey»</p>
                    <a className={styles.footer_politic_link} href="">Политика конфиденциальности</a>
                </div>
            </section>
        </>
    )
}


export default Footer