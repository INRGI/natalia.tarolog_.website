import Modal from 'react-modal';

const ModalCard = ({ isOpen, onRequestClose, imageSrc }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            contentLabel="Example Modal"
        >
            <img src={imageSrc} />
        </Modal>
    );
};

export default ModalCard;
