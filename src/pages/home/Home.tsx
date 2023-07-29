import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// layouts
import Header from '../../layouts/header/Header'
import Hero from './components/hero/Hero';
import Product from './components/product/Product';
import AboutProduct from './components/aboutProduct/AboutProduct';
import Benefit from './components/benefit/Benefit';
import Client from './components/client/Client';
import Review from './components/review/Review';
import Contact from './components/contact/Contact';
import Footer from '../../layouts/footer/Footer';

import { Helmet, HelmetProvider } from "react-helmet-async";

const Home: FC = () => {
    return (
        <HelmetProvider>
            <div className={styles.main}>
                <Helmet>
                    <title>IKCRM</title>
                    <meta name="Основная страница" content="Бесконечное множество, бизнес решений!" />
                    <link rel="canonical" href="/" />
                </Helmet>

                <Header />
                <Hero />
                <Product />
                <AboutProduct />
                <Benefit />
                <Client />
                <Review />
                <Contact />
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default Home