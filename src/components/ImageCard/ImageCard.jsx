import s from "./ImageCard.module.css";

const ImageCard = ({ photo }) => {
  return (
    <div className={s.imageCard}>
      <img src={photo.urls.small} alt={photo.alt_description} />
    </div>
  );
};

export default ImageCard;
