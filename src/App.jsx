import { useEffect, useState } from "react";
import { fetchFotos } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("nature");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchFotos(query, page);
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
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

  return (
    <>
      <h1>Фото из Unsplash</h1>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery photos={photos} />
      {photos.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={loadMorePhotos} />
      )}
    </>
  );
};

export default App;
