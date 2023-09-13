import "../../styles/MainBanner.css";
import SearchBar from "./SearchBar";
import TextsBanner from "./TextsBanner";

function Banner() {
  return (
    <article className="main-banner">
      <div className="filter">
      <TextsBanner></TextsBanner>
      <SearchBar></SearchBar>
      </div>
    </article>
  );
}

export default Banner;
