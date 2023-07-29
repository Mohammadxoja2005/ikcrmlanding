import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// icons 
import NEXT from "../../../../assets/icons/nextcomment.png";
import PREV from "../../../../assets/icons/prevcomment.png";
import COMMENT from "../../../../assets/icons/comment.png";
// data 
import { reviews } from '../../../../data/data';
// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css/navigation';

SwiperCore.use([Autoplay, Navigation]);

const Review: FC = () => {
    return (
        <section className={styles.review}>
            <div className={styles.review_container}>
                <h2 className={styles.review_title}>Рассказывают истории своих успехов</h2>

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
    )
}

export default Review