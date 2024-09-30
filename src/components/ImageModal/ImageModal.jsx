import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ photo, onClose }) => {
  return (
    <Modal
      isOpen={!!photo}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img src={photo.urls.regular} alt={photo.alt_description} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
