import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={s.imageGallery}>
      {photos.map((photo) => (
        <li
          key={photo.id}
          onClick={() => onImageClick(photo)}
          className={s.imageItem}
        >
          <ImageCard photo={photo} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
