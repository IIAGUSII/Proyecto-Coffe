import "../../styles/SearchBar.css";
import SearchIcon from "./icons/searchIcon";

function SearchBar() {
  return (
    <form className="form_search">
      <div className="filter-search">
        <input
          className=""
          type="search"
          name="search"
          id="search"
          placeholder="¿Que buscas?"
        />
        <button type="submit" className="search-button">
          <SearchIcon></SearchIcon>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
