import { FC, Fragment, useState } from 'react'
// styles
import styles from "./index.module.scss";
// headless ui
import { Dialog, Transition } from '@headlessui/react';
// icons
import CLOSE from "../../assets/icons/close.png";
import NEXTARROW from "../../assets/icons/nextarrow.png";
// jotai
import { isOpenForm } from '../../hooks/useOpenForm';
import { useAtom } from "jotai";
import { useOpenSuccess } from '../../hooks/useOpenSuccess';
// react-redux
import { useDispatch } from "react-redux";
import { submitForm } from '../../store/features/formSlice';
import { Dispatch } from '@reduxjs/toolkit';

const FormModal: FC = () => {
    const dispatch: Dispatch<any> = useDispatch();

    const [isOpenModal, setIsOpenModal] = useAtom(isOpenForm);
    const [, setIsSuccesModal] = useAtom(useOpenSuccess);

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    function closeModal() {
        setIsOpenModal(false)
    }

    const onSubmit = () => {
        dispatch(submitForm(
            {
                phone: phone,
                name: name,
                deal_name: "IKCRM",
                responsible_id: 9636770
            }))

        setIsSuccesModal(true);
    }

    return (
        <Transition appear show={isOpenModal} as={Fragment}>
            <Dialog as="div"
                className={styles.modal}
                onClose={closeModal}>

                <Dialog.Panel className={styles.modal_container}>

                    <div className={styles.modal_close_container} onClick={closeModal}>
                        <img style={{ cursor: "pointer" }} src={CLOSE} alt="modal close" />
                    </div>

                    <div className={styles.modal_input_container}>
                        <div className={styles.contact_input_container}>
                            <input className={styles.contact_input} onChange={(e) => setName(e.target.value)} placeholder='Ф.И.О.' type="text" />
                            <input className={styles.contact_input} onChange={(e) => setPhone(e.target.value)} placeholder='Номер телефона' type="text" />
                            <div className={styles.contact_agg_container}>
                                <input className={styles.contact_agg_checkbox} type="checkbox" />
                                <p className={styles.contact_agg_text}>Вы соглашаетесь с условиями обработки персональных данных</p>
                            </div>
                            <div className={styles.contact_form_btn} onClick={onSubmit}>
                                Оставить заявку
                                <img src={NEXTARROW} alt="" />
                            </div>
                        </div>

                    </div>

                </Dialog.Panel>
            </Dialog>
        </Transition>
    )
}

export default FormModal;