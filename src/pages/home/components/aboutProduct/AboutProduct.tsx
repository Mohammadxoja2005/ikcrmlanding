import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import TELEGREM from "../../../../assets/icons/telegram.png";
import GMAIL from "../../../../assets/icons/gmail.png";
// images
import SOFTWARE from "../../../../assets/images/software.png";
// i18n
import { LOCALES, I18nProvider } from '../../../../i18n';
import TRANSLATE from '../../../../i18n/translate';
import { useLanguage } from '../../../../hooks/useLanguage';
import { useAtom } from 'jotai';

const AboutProduct: FC = () => {
    const [language,] = useAtom(useLanguage)

    return (
        <I18nProvider locale={language ? language : LOCALES.RUSSIAN}>
            <section className={styles.about}>
                <div className={styles.about_container}>
                    <div className={styles.about_social_container}>

                        <h2 className={styles.about_title}> <span className={styles.about_highlight}><TRANSLATE text='get_presentation' /></span> <TRANSLATE text='in_minutes' /></h2>

                        <div className={styles.about_socials}>
                            <a style={{ textDecoration: "none", color: "white" }} target='_blank' href='https://t.me/ITKEYUZB' className={styles.about_social}>
                                <TRANSLATE text='get_intelegram' />
                                <img className={styles.about_social_img} src={TELEGREM} alt="" />
                            </a>

                            <div className={styles.about_social}>
                                <TRANSLATE text='get_ingmail' />
                                <img className={styles.about_social_img} src={GMAIL} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className={styles.about_soft_container}>
                        <img className={styles.about_soft_img} src={SOFTWARE} alt="" />
                    </div>

                </div>
            </section>
        </I18nProvider>
    )
}

export default AboutProduct