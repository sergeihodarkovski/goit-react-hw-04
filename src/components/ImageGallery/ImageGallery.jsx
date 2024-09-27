import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <ul className={s.imageGallery}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard photo={photo} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
