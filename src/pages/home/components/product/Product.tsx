import { FC } from 'react'
// styles
import styles from './index.module.scss';
// data 
import { products } from '../../../../data/data';
import ImgViewer from '../../../../layouts/imgViewer/ImgViewer';

const Product: FC = () => {
    return (
        <section className={styles.product}>
            <div className={styles.product_container}>
                <h2 className={styles.product_title}>О нашем <span className={styles.product_highlight} >продукте</span></h2>

                <h3 className={styles.product_des}><span className={styles.product_highlight}>IK CRM</span>  предлагает решения для
                    эффективных <span className={styles.product_highlight}>продаж</span> в сфере <span className={styles.product_highlight}>недвижимости</span>.
                </h3>

                <div className={styles.product_list_container}>
                    {products.map((product) => {
                        return (
                            <div key={product.id} className={styles.product_list}>
                                <div className={styles.product_img_container}>
                                    <ImgViewer
                                        srcUrl={product.img}
                                    />
                                    {/* <img className={styles.product_list_img} src={product.img} alt="" /> */}
                                </div>
                                <p className={styles.product_list_name}>{product.name}</p>
                                <p className={styles.product_list_des}>{product.description}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Product