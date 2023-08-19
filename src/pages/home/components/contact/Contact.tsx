import { FC, useState } from 'react'
// styles
import styles from "./index.module.scss";
// icons
import NEXTARROW from "../../../../assets/icons/nextarrow.png";
// icons
import PHONE from "../../../../assets/icons/phone.png"
import TELEGRAM from "../../../../assets/icons/telegram.png"
// redux
import { submitForm } from '../../../../store/features/formSlice';
import { useDispatch } from "react-redux";
// jotai
import { useOpenSuccess } from '../../../../hooks/useOpenSuccess';
import { useAtom } from "jotai";
import { useNavigate } from 'react-router-dom';

import { LOCALES, I18nProvider } from '../../../../i18n';
import TRANSLATE from '../../../../i18n/translate';
import { useLanguage } from '../../../../hooks/useLanguage';

const Contact: FC = () => {
    const dispatch: any = useDispatch();
    const [phone, setPhone] = useState<string>('');
    const [, setIsModal] = useAtom(useOpenSuccess);
    const navigate = useNavigate();
    const [language,] = useAtom(useLanguage)

    const onSubmit = () => {
        dispatch(submitForm(
            {
                token: "base64:YXJkX2FwaV90b2tlbl9oYXNo",
                source: "ikcrm.uz",
                fio: "Only number",
                phone: phone,
            }
        )).then(() => {
            navigate('/notification');
        })

        setIsModal(true);
    }

    return (
        <I18nProvider locale={language ? language : LOCALES.RUSSIAN}>
            <section className={styles.contact}>
                <div className={styles.contact_container}>
                    <h2 className={styles.contact_title}><TRANSLATE text='send_number' /></h2>

                    <div className={styles.contact_form_container}>

                        <div className={styles.contact_form}>
                            <h3 className={styles.contact_form_name}><TRANSLATE text='say_task' /> <span className={styles.contact_highlight} ><TRANSLATE text='get' /></span></h3>

                            <div className={styles.contact_form_benefit}>
                                <div className={styles.contact_benefit_container}>
                                    <div className={styles.contact_benefit_bullet}></div>
                                    <p className={styles.contact_benefit_name}><span className={styles.contact_highlight}><TRANSLATE text='contact_benefit1_name' /></span> <TRANSLATE text='contact_benefit1' /></p>
                                </div>
                                <div className={styles.contact_benefit_container}>
                                    <div className={styles.contact_benefit_bullet}></div>
                                    <p className={styles.contact_benefit_name}><span className={styles.contact_highlight}><TRANSLATE text='contact_benefit2_name' /></span> <TRANSLATE text='contact_benefit2' /></p>
                                </div>
                                <div className={styles.contact_benefit_container}>
                                    <div className={styles.contact_benefit_bullet}></div>
                                    <p className={styles.contact_benefit_name}><span className={styles.contact_highlight}><TRANSLATE text='contact_benefit3_name' /></span> <TRANSLATE text='contact_benefit3' /></p>
                                </div>
                            </div>

                            <div className={styles.contact_input_container}>
                                <input onChange={(e) => setPhone(e.target.value)} className={styles.contact_input} placeholder='Ваш телефон' type="text" />

                                <div className={styles.contact_form_btn} onClick={onSubmit}>
                                    <TRANSLATE text='application' />
                                    <img src={NEXTARROW} alt="" />
                                </div>
                            </div>

                            <div className={styles.contact_agg_container}>
                                <input className={styles.contact_agg_checkbox} type="checkbox" />
                                <p className={styles.contact_agg_text}><TRANSLATE text='contact_conf' /></p>
                            </div>
                        </div>

                        <div className={styles.contact_social}>

                            <div className={styles.contact_phone}>
                                <h3 className={styles.contact_phone_name}><TRANSLATE text='contact_call' /></h3>
                                <div className={styles.contact_number_container}>
                                    <img src={PHONE} alt="" />
                                    +998 97 777 34 19
                                </div>
                                <p className={styles.contact_schedule}>
                                    <TRANSLATE text='Dn-Ju' /> с 10:00-19:00 <TRANSLATE text='Shn-Yn' />: <TRANSLATE text='contact_free' />
                                </p>
                            </div>

                            <div className={styles.contact_media}>
                                <h3 className={styles.contact_phone_name}><TRANSLATE text='write_online' /></h3>
                                <a target='_blank' href='https://t.me/ITKEYUZB' className={styles.contact_tg_container} >
                                    <img className={styles.contact_tg} src={TELEGRAM} alt="" />
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </I18nProvider>
    )
}

export default Contact