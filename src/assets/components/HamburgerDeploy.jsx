import "../../styles/HamburgerDeploy.css";
import SearchBar from "./SearchBar";
function HamburgerDeploy() {
  return (
    <section className="hamburger-deploy">
      <div className="hamburger-filter">
        <div className="searchCss">
          <SearchBar></SearchBar>
        </div>
        <div className="selectorHambur">
          <button className="buttonHambur">MENU</button>
          <button className="buttonHambur">CAFETERAS/CAFE MOLIDO</button>
          <button className="buttonHambur">PRODUCTOS</button>
          <button className="registerHambur">REGISTRATE</button>
        </div>
      </div>
    </section>
  );
}

export default HamburgerDeploy;
