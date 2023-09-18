import "../../styles/MainBanner.css";
import SearchBar from "./SearchBar";
import TextsBanner from "./TextsBanner";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import HamburgerDeploy from "./HamburgerDeploy";
function Banner() {
  return (
    <article className="main-banner">
      <div className="filter">
        <TextsBanner />
        <SearchBar />
      </div>
    </article>
  );
}

export default Banner;
