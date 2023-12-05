import "./MainBanner.css";
import SearchBar from "../BarraDeBusqueda/SearchBar";
import TextsBanner from "./TextsBanner";
import { useContext } from "react";
import { UserContext } from "../../../../ProductsContext.jsx";

function Banner() {
  const { isHambur } = useContext(UserContext);
  return (
    <section className="main-banner">
      <div className="banner-image">
        <div className="filter">
          <>
            <TextsBanner />
            <SearchBar />
          </>
        </div>
      </div>
    </section>
  );
}

export default Banner;
