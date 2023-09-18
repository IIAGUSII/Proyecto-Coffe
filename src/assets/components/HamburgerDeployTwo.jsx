import "../../styles/HamburgerDeployTwo.css";
import { Link } from "react-router-dom";

function HamburgerDeployTwo() {
  return (
    <section className="hamburger-deploy-two">
      <div className="hamburger-filter-two">
        <div className="selectorHambur-two">
          <Link to="/cafeteras">
            <button className="buttonHambur-two">CAFETERAS</button>
          </Link>
          <Link to="/cafemolido">
            <button className="buttonHambur-two">CAFÉ MOLIDO</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HamburgerDeployTwo;
