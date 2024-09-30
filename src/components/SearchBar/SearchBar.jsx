import { useState } from "react";
import { toast } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Введите текст для поиска!");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoComplete="off"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
