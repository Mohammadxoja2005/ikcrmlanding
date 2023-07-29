import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// data
import { clients } from '../../../../data/data';
// icons
import NEXT from "../../../../assets/icons/nextpartner.png";
import PREV from "../../../../assets/icons/prevpartner.png";
// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css/navigation';

SwiperCore.use([Autoplay, Navigation]);

const Client: FC = () => {
    return (
        <section className={styles.client}>
            <div className={styles.client_container}>
                <h2 className={styles.client_title}> <span className={styles.client_highlight}>Наши</span> <span className={styles.client_crossed}>клиенты</span> <span className={styles.client_highlight}>друзья</span> с которыми мы работаем</h2>

                <div className={styles.client_list_container}>
                    <div className={styles.client_prev}>
                        <img className={styles.client_arrow_img} src={PREV} alt="client prev" />
                    </div>

                    <Swiper
                        spaceBetween={20}
                        navigation={{
                            prevEl: `.${styles.client_prev}`,
                            nextEl: `.${styles.client_next}`,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 5.8,
                            },
                            576: {
                                slidesPerView: 4.5,
                            },
                            480: {
                                slidesPerView: 3.5,
                            },
                            0: {
                                slidesPerView: 2.5,
                            },

                        }}
                    >
                        {clients.map((client) => {
                            return (
                                <SwiperSlide key={client.id}>
                                    <div className={styles.client_list}>
                                        <div className={styles.client_img_container}>
                                            <img className={styles.client_img} src={client.img} alt="" />
                                        </div>
                                        <p className={styles.client_name}>{client.name}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className={styles.client_next}>
                        <img className={styles.client_arrow_img} src={NEXT} alt="client next" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Client