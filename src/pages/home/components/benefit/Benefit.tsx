import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// data
import { LOCALES, I18nProvider } from '../../../../i18n';
import TRANSLATE from '../../../../i18n/translate';
// icons
import BENEFIT1 from "../../../../assets/icons/benefit1.png";
import BENEFIT2 from "../../../../assets/icons/benefit2.png";
import BENEFIT3 from "../../../../assets/icons/benefit3.png";
import BENEFIT4 from "../../../../assets/icons/benefit4.png";
import BENEFIT5 from "../../../../assets/icons/benefit5.png";
import BENEFIT6 from "../../../../assets/icons/benefit6.png";
import { useLanguage } from '../../../../hooks/useLanguage';
import { useAtom } from 'jotai';

const Benefit: FC = () => {
    const [language,] = useAtom(useLanguage);

    const benefits: Array<{ id: number, img: string, name: any, description: any }> = [
        {
            id: 1,
            img: BENEFIT1,
            name: <TRANSLATE text='benefit1_name' />,
            description: <TRANSLATE text='benefit1_des' />,
        },
        {
            id: 2,
            img: BENEFIT2,
            name: <TRANSLATE text='benefit2_name' />,
            description: <TRANSLATE text='benefit2_des' />,
        },
        {
            id: 3,
            img: BENEFIT3,
            name: <TRANSLATE text='benefit3_name' />,
            description: <TRANSLATE text='benefit3_des' />,
        },
        {
            id: 4,
            img: BENEFIT4,
            name: <TRANSLATE text='benefit4_name' />,
            description: <TRANSLATE text='benefit4_des' />,
        },
        {
            id: 5,
            img: BENEFIT5,
            name: <TRANSLATE text='benefit5_name' />,
            description: <TRANSLATE text='benefit5_des' />,
        },
        {
            id: 6,
            img: BENEFIT6,
            name: <TRANSLATE text='benefit6_name' />,
            description: <TRANSLATE text='benefit6_des' />,
        },
    ]

    return (
        <I18nProvider locale={language ? language : LOCALES.RUSSIAN}>
            <section className={styles.benefit}>
                <div className={styles.benefit_container}>
                    <h2 className={styles.benefit_name}><TRANSLATE text='show' /> <span className={styles.benefit_highlight}><TRANSLATE text='most_profitable' /></span> <TRANSLATE text='excuse' /></h2>

                    <div className={styles.benefit_list_container}>

                        {benefits.map((benefit) => {
                            return (
                                <div key={benefit.id} className={styles.benefit_list}>
                                    <img className={styles.benefit_list_img} src={benefit.img} alt="ikcrm benefit image" />
                                    <p className={styles.benefit_list_title}>{benefit.name}</p>
                                    <p className={styles.benefit_list_des}>{benefit.description}</p>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </section>
        </I18nProvider>
    )
}

export default Benefit