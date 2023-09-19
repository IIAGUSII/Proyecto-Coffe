import "../../styles/SearchBar.css";
import SearchIcon from "./icons/searchIcon";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";
function SearchBar() {
  const { handleChangeText  } = useContext(UserContext);
  return (
    <form className="form_search">
      <div className="filter-search">
        <input
        onChange={ handleChangeText }
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
