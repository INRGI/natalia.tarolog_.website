import Modal from 'react-modal';
import { HiddenBlock, Img } from './ModalCard.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    background: 'transparent',
    border: 'none',
    margin: '0',
    width: '70%'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
};

const ModalCard = ({ isOpen, onRequestClose, imageSrc }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            contentLabel="Example Modal"
            style={customStyles}
        >
            <Img src={imageSrc} />
            <HiddenBlock></HiddenBlock>
        </Modal>
    );
};

export default ModalCard;
