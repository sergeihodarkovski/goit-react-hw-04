import { useEffect, useState } from "react";
import { fetchFotos } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchFotos(query, page);

        if (page === 1) {
          setPhotos(data.results);
        } else {
          setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
        }
        setTotalPages(data.total_pages);
      } catch (err) {
        setError("Ошибка при загрузке изображений");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  const loadMorePhotos = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleImageClick = (photo) => {
    setSelectedImage(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery photos={photos} onImageClick={handleImageClick} />
      {photos.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={loadMorePhotos} />
      )}

      {isModalOpen && selectedImage && (
        <ImageModal photo={selectedImage} onClose={closeModal} />
      )}
      <Toaster />
    </>
  );
};

export default App;
