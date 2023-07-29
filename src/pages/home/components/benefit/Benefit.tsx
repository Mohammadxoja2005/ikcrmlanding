import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// data
import { benefits } from '../../../../data/data';

const Benefit: FC = () => {
    return (
        <section className={styles.benefit}>
            <div className={styles.benefit_container}>
                <h2 className={styles.benefit_name}>Предоставим <span className={styles.benefit_highlight}>самые удобные и выгодные</span> условия для сотрудничества</h2>

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
    )
}

export default Benefit