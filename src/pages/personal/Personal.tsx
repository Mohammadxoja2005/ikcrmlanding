import { FC } from 'react'
import styles from "./index.module.scss";
import { personal } from '../../data/data';

const Personal: FC = () => {
    return (
        <section className={styles.personal}>
            <div className={styles.container} >
                <h1 className={styles.personal_title}>Политика конфиденциальности ООО IT KEY SOFT TECH</h1>
                <p className={styles.personal_des}>Уважаемый пользователь! Обращаем ваше внимание, что принятие вами политики конфиденциальности означает, что вы (пользователь):
                    - Cоглашаетесь с условиями сбора персональных данных, конфиденциальных данных и иной информации, предоставляете полное и безусловное согласие на обработку информации со стороны OOO «IT KEY SOFT TECH» (далее – Компания);
                </p>
                {personal.map((item) => {
                    return (
                        <div style={{ marginBottom: "50px" }} key={item.id}>
                            <h3 className={styles.personal_name}>{item.id}. {item.title}</h3>
                            <div className={styles.personal_dess} >
                                {
                                    item.desArr.map((item_des) => {
                                        return (
                                            <p key={item_des.id} className={styles.personal_des_des}>
                                                {item_des.text}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Personal