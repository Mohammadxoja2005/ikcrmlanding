import { FC, useEffect, useState } from 'react'
// styles
import styles from "./index.module.scss";
// react-router-dom
import { useNavigate } from 'react-router-dom';

const NOTIFICATION: FC = () => {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(3);

    localStorage.setItem('isModalOpen', '0');

    useEffect(() => {
        (window as any).ym(89525194, 'hit', window.location.href);
    }, [])

    useEffect(() => {
        if (seconds <= 0) {
            navigate('/')
        }

        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [seconds])

    return (
        <>
            <div className={styles.notify}>
                <div className={styles.notify_con}>
                    <h3 className={styles.notify_title}>Форма успешна отправлено</h3>
                    <p className={styles.notify_des}>Вы будете перенаправлены на основную страницу через {seconds}</p>
                </div>
            </div>
        </>
    )
}

export default NOTIFICATION