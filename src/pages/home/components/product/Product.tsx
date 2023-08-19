import { FC } from 'react'
// styles
import styles from './index.module.scss';
import ImgViewer from '../../../../layouts/imgViewer/ImgViewer';
// i18n
import { LOCALES, I18nProvider } from '../../../../i18n';
import TRANSLATE from '../../../../i18n/translate';

import PRODUCT1 from "../../../../assets/images/product1.svg";
import PRODUCT2 from "../../../../assets/images/product2.svg";
import PRODUCT3 from "../../../../assets/images/product3.svg";
import PRODUCT4 from "../../../../assets/images/product4.svg";
import PRODUCT5 from "../../../../assets/images/product5.svg";
import PRODUCT6 from "../../../../assets/images/product6.svg";

import { useLanguage } from '../../../../hooks/useLanguage';
import { useAtom } from 'jotai';

const Product: FC = () => {
    
    const [language,] = useAtom(useLanguage);

    const products: Array<{ id: number, img: string, name: any, description: any }> = [
        {
            id: 1,
            img: PRODUCT1,
            name: <TRANSLATE text='product1_name' />,
            description: <TRANSLATE text='product1_des' />,
        },
        {
            id: 2,
            img: PRODUCT2,
            name: <TRANSLATE text='product2_name' />,
            description: <TRANSLATE text='product2_des' />
        },
        {
            id: 3,
            img: PRODUCT3,
            name: <TRANSLATE text='product3_name' />,
            description: <TRANSLATE text='product3_des' />
        },
        {
            id: 4,
            img: PRODUCT4,
            name: <TRANSLATE text='product4_name' />,
            description: <TRANSLATE text='product4_des' />,
        },
        {
            id: 5,
            img: PRODUCT5,
            name: <TRANSLATE text='product5_name' />,
            description: <TRANSLATE text='product5_des' />,
        },
        {
            id: 6,
            img: PRODUCT6,
            name: <TRANSLATE text='product6_name' />,
            description: <TRANSLATE text='product6_des' />,
        }
    ]

    return (
        <I18nProvider locale={language ? language : LOCALES.RUSSIAN}>
            <section className={styles.product}>
                <div className={styles.product_container}>
                    <h2 className={styles.product_title}><TRANSLATE text='about' /> <span className={styles.product_highlight} ><TRANSLATE text='product' /></span></h2>

                    <h3 className={styles.product_des}><span className={styles.product_highlight}>IK CRM</span>  <TRANSLATE text='offer' />
                        <TRANSLATE text='effects' /> <span className={styles.product_highlight}><TRANSLATE text='sales' /></span> <TRANSLATE text='sphere' /> <span className={styles.product_highlight}><TRANSLATE text='real_estate' /></span>.
                    </h3>

                    <div className={styles.product_list_container}>
                        {products.map((product) => {
                            return (
                                <div key={product.id} className={styles.product_list}>
                                    <div className={styles.product_img_container}>
                                        <ImgViewer
                                            srcUrl={product.img}
                                        />
                                    </div>
                                    <p className={styles.product_list_name}>{product.name}</p>
                                    <p className={styles.product_list_des}>{product.description}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </I18nProvider>
    )
}

export default Product