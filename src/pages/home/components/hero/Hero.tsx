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

const Hero: FC = () => {
    const [, setIsOpenModal] = useAtom(isOpenForm);

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.hero_container}>
                    <div className={styles.hero_content}>

                        <div className={styles.hero_content_text}>
                            <h1 className={styles.hero_title}>Сделаем Ваш бизнес <span className={styles.hero_higlight}>эффективнее</span> и <span className={styles.hero_higlight}>прибыльнее</span></h1>
                            <p className={styles.hero_des}><span className={styles.hero_higlight}>Оптимизировав</span> бизнес-процессы, <span className={styles.hero_higlight}>повысим</span> лояльность и число покупателей</p>
                        </div>

                        <div className={styles.hero_btn} onClick={() => setIsOpenModal(true)}>
                            Оставить заявку
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
        </>
    )
}

export default Hero