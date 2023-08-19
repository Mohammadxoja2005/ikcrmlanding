import { FC, useState } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import LOGO from "../../assets/icons/logo.png"
import TELEGRAM from "../../assets/icons/telegram.png"
// i18n
import { I18nProvider, LOCALES } from '../../i18n';
import TRANSLATE from '../../i18n/translate';
import { useLanguage } from '../../hooks/useLanguage';
import { useAtom } from 'jotai';

const Header: FC = () => {
    const [lang, setLang] = useState<string>('ru');
    const [language, setLanguage] = useAtom(useLanguage)

    function changeLang() {
        if (language == 'ru-ru') {
            setLang('uz');
            setLanguage('uz-uz');
        } else {
            setLang('ru');
            setLanguage('ru-ru');
        }
    }

    return (
        <I18nProvider locale={language ? language : LOCALES.RUSSIAN}>
            <header className={styles.header}>
                <div className={styles.header_container}>

                    <div className={styles.header_logo_container}>
                        <img className={styles.header_logo} src={LOGO} alt="ikcrm logo" />
                        <p className={styles.header_logo_slogan}><TRANSLATE text='business_develop' /></p>
                    </div>

                    <div className={styles.header_contact}>
                        <p className={styles.header_contact_phone}>
                            <TRANSLATE text='call' /> <span className={styles.header_contact_highlight}>+998 97 777 34 19</span>
                        </p>

                        <div className={styles.header_social_container}>
                            <p className={styles.header_contact_social}>
                                <TRANSLATE text='write' />
                            </p>

                            <a target='_blank' href='https://t.me/ITKEYUZB' className={styles.header_img_container} >
                                <img className={styles.header_contact_img} src={TELEGRAM} alt="telegram ikcrm" />
                            </a>
                        </div>

                        <p className={styles.header_lang} onClick={changeLang}>
                            {lang}
                        </p>

                    </div>
                </div>
            </header>
        </I18nProvider>
    )
}

export default Header