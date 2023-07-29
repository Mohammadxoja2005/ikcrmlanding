import { FC, Fragment } from 'react'
// styles
import styles from "./index.module.scss";
// headless ui
import { Dialog, Transition } from '@headlessui/react';
// icons
import CHECKED from "../../assets/icons/success.png";
import CLOSE from "../../assets/icons/close.png";
// jotai
import { useOpenSuccess } from '../../hooks/useOpenSuccess';
import { useAtom } from "jotai";

const SuccessModal: FC = () => {
    let [isOpenModal, setIsOpenModal] = useAtom(useOpenSuccess);

    function closeModal() {
        setIsOpenModal(false)
    }

    return (
        <Transition appear show={isOpenModal} as={Fragment}>
            <Dialog as="div"
                className={styles.modal}
                onClose={closeModal}>
                <div className={styles.modal_close_container} onClick={closeModal}>
                    <img style={{ cursor: "pointer" }} src={CLOSE} alt="modal close" />
                </div>
                <Dialog.Panel className={styles.modal_container}>
                    <div className={styles.modal_success}>
                        <p>Ваша заявка отправлена</p>
                        <img src={CHECKED} alt="" />
                    </div>
                    <p style={{ textAlign: "center", fontSize: "16px", fontWeight: "400" }}>В ближайшее время с Вами свяжется наш специалист</p>
                </Dialog.Panel>
            </Dialog>
        </Transition>
    )
}

export default SuccessModal