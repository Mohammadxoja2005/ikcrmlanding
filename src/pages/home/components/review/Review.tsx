import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// icons 
import NEXT from "../../../../assets/icons/nextcomment.png";
import PREV from "../../../../assets/icons/prevcomment.png";
import COMMENT from "../../../../assets/icons/comment.png";
// i18n
import { LOCALES, I18nProvider } from '../../../../i18n';
import TRANSLATE from '../../../../i18n/translate';
// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css/navigation';

import REVIEW1 from "../../../../assets/images/comment1.png";
import REVIEW2 from "../../../../assets/images/comment2.png";
import REVIEW3 from "../../../../assets/images/comment3.png";

SwiperCore.use([Autoplay, Navigation]);
import { useLanguage } from '../../../../hooks/useLanguage';
import { useAtom } from 'jotai';

const Review: FC = () => {
    const [language,] = useAtom(useLanguage)

    const reviews: Array<{ id: number, img: string, desciption: any, author: string, job: string }> = [
        {
            id: 1,
            img: REVIEW1,
            desciption: <TRANSLATE text='rev_1' />,
            author: "Александр Ли",
            job: "Marketing director"
        },
        {
            id: 2,
            img: REVIEW3,
            desciption: <TRANSLATE text='rev_2' />,
            author: "Натали Турсунбаева",
            job: "CEO"
        },
        {
            id: 3,
            img: REVIEW2,
            desciption: <TRANSLATE text='rev_3' />,
            author: "Нодир Таджибаев",
            job: "Finance Director"
        },
    ]

    return (
        <I18nProvider locale={language ? language : LOCALES.RUSSIAN}>
            <section className={styles.review}>
                <div className={styles.review_container}>
                    <h2 className={styles.review_title}><TRANSLATE text='story_success' /></h2>

                    <div className={styles.review_list_container}>

                        <div className={styles.review_arrow_container}>
                            <div className={styles.review_prev_btn} >
                                <img className={styles.review_btn_img} src={PREV} alt="" />
                            </div>
                        </div>

                        <Swiper
                            slidesPerView={1}
                            navigation={{
                                prevEl: `.${styles.review_prev_btn}`,
                                nextEl: `.${styles.review_next_btn}`,
                            }}
                            breakpoints={{
                                576: {
                                    slidesPerView: 1,
                                },
                                0: {
                                    slidesPerView: 1.1,
                                },

                            }}
                        >
                            {reviews.map((review) => {
                                return (
                                    <SwiperSlide key={review.id}>
                                        <div className={styles.review_list}>
                                            <div className={styles.review_img_container}>
                                                <img className={styles.review_list_img} src={review.img} alt="" />
                                            </div>
                                            <div className={styles.review_list_content}>
                                                <img className={styles.review_list_comment} src={COMMENT} alt="" />

                                                <p className={styles.review_list_des}>{review.desciption}</p>

                                                <p className={styles.review_list_author}>{review.author}</p>

                                                <p className={styles.review_list_job}>{review.job}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                        <div className={styles.review_arrow_container}>
                            <div className={styles.review_next_btn}>
                                <img className={styles.review_btn_img} src={NEXT} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </I18nProvider>
    )
}

export default Review