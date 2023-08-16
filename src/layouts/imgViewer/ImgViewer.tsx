import { FC, Fragment, useState } from 'react'
// styles
import styles from "./index.module.scss";
// headless ui
import { Dialog, Transition } from '@headlessui/react';
// icons
import CLOSE from "../../assets/icons/close.png";

interface props {
    srcUrl: string
}

const ImgViewer: FC<props> = (props) => {
    const { srcUrl } = props;

    const [imgUrl, setImgUrl] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = (imgUrl: string): void => {
        setIsOpen(true);
        setImgUrl(imgUrl);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div"
                    className={styles.modal}
                    onClose={closeModal}
                >
                    <Dialog.Panel className={styles.modal_container}>
                        <div className={styles.modal_close_container} onClick={closeModal}>
                            <img style={{ cursor: "pointer" }} src={CLOSE} alt="modal close" />
                        </div>
                        <img src={imgUrl} alt="" style={{ width: "100%", objectFit: "contain" }} />     
                    </Dialog.Panel>
                </Dialog>
            </Transition>
            <img
                src={srcUrl}
                style={{ width: "100%", cursor: "pointer", borderRadius: "10px"}}
                alt=""
                onClick={() => openModal(srcUrl)}
            />
        </>
    )
}

export default ImgViewer