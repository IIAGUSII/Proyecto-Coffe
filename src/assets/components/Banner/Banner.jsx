import "../../styles/MainBanner.css";
import SearchBar from "../BarraDeBusqueda/SearchBar";
import TextsBanner from "./TextsBanner";
import { useContext } from "react";
import { UserContext } from "../../../../ProductsContext";
import HamburgerDeploy from "./HamburgerDeploy";
function Banner() {
  const { isHambur } = useContext(UserContext);
  return (
    <article className="main-banner">
      <div className="filter">
        {isHambur ? (
          <HamburgerDeploy />
        ) : (
          <>
            <TextsBanner />
            <SearchBar />
          </>
        )}
      </div>
    </article>
  );
}

export default Banner;
