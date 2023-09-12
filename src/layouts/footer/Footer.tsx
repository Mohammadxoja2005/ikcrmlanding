import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import LOGO from "../../assets/icons/logo.png";
import TELEGRAM from "../../assets/icons/telegram.png";
import INSTAGRAM from "../../assets/icons/instagram.png";
import FACEBOOK from "../../assets/icons/facebook.png";
import PHONE from "../../assets/icons/phone.png";

import { LOCALES, I18nProvider } from '../../i18n';
import TRANSLATE from '../../i18n/translate';
import { useLanguage } from '../../hooks/useLanguage';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
    const [language,] = useAtom(useLanguage)

    return (
        <I18nProvider locale={language ? language : LOCALES.RUSSIAN}>
            <footer className={styles.footer}>
                <div className={styles.footer_container}>
                    <div className={styles.footer_info}>
                        <img className={styles.footer_info_logo} src={LOGO} alt="" />
                        <p className={styles.footer_info_name}><TRANSLATE text='slogan' /></p>
                    </div>
                    <div className={styles.footer_info} >
                        <p className={styles.footer_info_title}><TRANSLATE text='menu' /></p>

                        <div className={styles.footer_info_links}>
                            <a href="#" className={styles.footer_info_name}><TRANSLATE text='main' /></a>
                            <a href="#" className={styles.footer_info_name}><TRANSLATE text='about_company' /></a>
                            <a href="#" className={styles.footer_info_name}><TRANSLATE text='cases' /></a>
                            <a href="#" className={styles.footer_info_name}><TRANSLATE text='contacts' /></a>
                        </div>

                    </div>
                    <div className={styles.footer_info} >
                        <p className={styles.footer_info_title}><TRANSLATE text='services' /></p>

                        <div className={styles.footer_info_links}>
                            <a href="#" className={styles.footer_info_name}>IT Key</a>
                        </div>
                        <div className={styles.footer_info_links}>
                            <Link style={{ color: "#00A3FF" }} to="/terms">
                                <TRANSLATE text='personal_use'></TRANSLATE>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.footer_info}>
                        <p className={styles.footer_info_title}><TRANSLATE text='contacts' /></p>

                        <div className={styles.footer_info_contact}>
                            <div className={styles.footer_info_number}>
                                <img src={PHONE} alt="" />
                                +998 97 777 34 19
                            </div>
                            <p className={styles.footer_info_schedule}><TRANSLATE text='Dn-Ju' /> с 10:00-19:00 <TRANSLATE text='Shn-Yn' />: <TRANSLATE text='contact_free' /></p>

                            <a target='_blank' href='https://t.me/ITKEYUZB' className={styles.footer_tg_container}>
                                <img src={TELEGRAM} alt="" />
                            </a>

                        </div>
                    </div>
                    <div className={styles.footer_info}>
                        <p className={styles.footer_info_title}><TRANSLATE text='we_in_social' /></p>

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
                    <p className={styles.footer_politic_text}><TRANSLATE text='confidential' />
                        OOO «ITKey»</p>
                    <Link className={styles.footer_politic_link} to="/politics"><TRANSLATE text='politics' /></Link>
                </div>
            </section>
        </I18nProvider>
    )
}


export default Footer