import ModalCard from '../ModalCard';
import { useState } from 'react';
import { Image } from "../Slider/Slider.styled";

export const SliderImage = ({ src }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    const handleImageClick = () => {
        openModal(src);
    };

    return (
        <>
            <Image src={src} onClick={handleImageClick} role="presentation" />
            <ModalCard
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                imageSrc={selectedImage}
            />
        </>
    );
};