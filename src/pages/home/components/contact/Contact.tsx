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

const Contact: FC = () => {
    const dispatch: any = useDispatch();
    const [phone, setPhone] = useState<string>('');
    const [, setIsModal] = useAtom(useOpenSuccess);
    const navigate = useNavigate();

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
        <section className={styles.contact}>
            <div className={styles.contact_container}>
                <h2 className={styles.contact_title}>Отправьте номер телефона и мы вам перезвоним</h2>

                <div className={styles.contact_form_container}>

                    <div className={styles.contact_form}>
                        <h3 className={styles.contact_form_name}>Расскажите о задаче и <span className={styles.contact_highlight} >получите:</span></h3>

                        <div className={styles.contact_form_benefit}>
                            <div className={styles.contact_benefit_container}>
                                <div className={styles.contact_benefit_bullet}></div>
                                <p className={styles.contact_benefit_name}><span className={styles.contact_highlight}>Предложение</span> по оптимизации бизнес-процессов</p>
                            </div>
                            <div className={styles.contact_benefit_container}>
                                <div className={styles.contact_benefit_bullet}></div>
                                <p className={styles.contact_benefit_name}><span className={styles.contact_highlight}>Варианты</span> решений в соответствии с вашей задачей</p>
                            </div>
                            <div className={styles.contact_benefit_container}>
                                <div className={styles.contact_benefit_bullet}></div>
                                <p className={styles.contact_benefit_name}><span className={styles.contact_highlight}>Три варианта</span> по срокам и цене</p>
                            </div>
                        </div>

                        <div className={styles.contact_input_container}>
                            <input onChange={(e) => setPhone(e.target.value)} className={styles.contact_input} placeholder='Ваш телефон' type="text" />

                            <div className={styles.contact_form_btn} onClick={onSubmit}>
                                Оставить заявку
                                <img src={NEXTARROW} alt="" />
                            </div>
                        </div>

                        <div className={styles.contact_agg_container}>
                            <input className={styles.contact_agg_checkbox} type="checkbox" />
                            <p className={styles.contact_agg_text}>Вы соглашаетесь с условиями обработки персональных данных</p>
                        </div>
                    </div>

                    <div className={styles.contact_social}>

                        <div className={styles.contact_phone}>
                            <h3 className={styles.contact_phone_name}>Звоните</h3>
                            <div className={styles.contact_number_container}>
                                <img src={PHONE} alt="" />
                                +998 97 777 34 19
                            </div>
                            <p className={styles.contact_schedule}>
                                Пн-Пт с 10:00-19:00 Сб-Вс: Выходной
                            </p>
                        </div>

                        <div className={styles.contact_media}>
                            <h3 className={styles.contact_phone_name}>Пишите онлайн</h3>
                            <a target='_blank' href='https://t.me/ITKEYUZB' className={styles.contact_tg_container} >
                                <img className={styles.contact_tg} src={TELEGRAM} alt="" />
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact