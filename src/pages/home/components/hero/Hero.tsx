import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// images
import COMPUTER from "../../../../assets/images/computer.png";
import NEXTARROW from "../../../../assets/icons/nextarrow.png";
// layouts 
import FormModal from '../../../../layouts/formModal/FormModal';
import SuccessModal from '../../../../layouts/successModal/SuccessModal';
// jotai
import { isOpenForm } from '../../../../hooks/useOpenForm';
import { useAtom } from "jotai";
// i18n
import { LOCALES, I18nProvider } from '../../../../i18n';
import TRANSLATE from '../../../../i18n/translate';
import { useLanguage } from '../../../../hooks/useLanguage';

const Hero: FC = () => {
    const [, setIsOpenModal] = useAtom(isOpenForm);
    const [language] = useAtom(useLanguage);

    return (
        <I18nProvider locale={language ? language : LOCALES.RUSSIAN}>
            <section className={styles.hero}>
                <div className={styles.hero_container}>
                    <div className={styles.hero_content}>

                        <div className={styles.hero_content_text}>
                            <h1 className={styles.hero_title}><TRANSLATE text='make_your_business' /><span className={styles.hero_higlight}> <TRANSLATE text='business_process' /><TRANSLATE text='effective' /></span> <TRANSLATE text='and' /> <span className={styles.hero_higlight}><TRANSLATE text='profit' /></span></h1>
                            <p className={styles.hero_des}><span className={styles.hero_higlight}><TRANSLATE text='optimize' /></span> <TRANSLATE text='business_process' /> <span className={styles.hero_higlight}><TRANSLATE text='raise' /></span> <TRANSLATE text='loyal' /></p>
                        </div>

                        <div className={styles.hero_btn} onClick={() => setIsOpenModal(true)}>
                            <TRANSLATE text='application' />
                            <img src={NEXTARROW} alt="next icon ikcrm" />
                        </div>

                    </div>
                    <div className={styles.hero_img_container}>
                        <img className={styles.hero_img} src={COMPUTER} alt="computer icon ikcrm" />
                    </div>
                </div>
            </section>
            <FormModal />
            <SuccessModal />
        </I18nProvider>
    )
}

export default Hero