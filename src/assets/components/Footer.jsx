import { Link } from "react-router-dom";
import "../../styles/Footer.css";
import logoSpresso from "../img/logoSpresso.png";
import linkedin from "../img/linkedin.png";
import instagram from "../img/instagram.png";

function Footer() {
  return (
    <footer>
      <div className="footer_all">
        <div className="items-all">
          <div className="logo_footer">
            <img src={logoSpresso} alt="" />
          </div>
          <div className="btns_footer">
            <Link className="links_one btn_link" to="/contact">
              <button className="btn_contact">¡CONTACTANOS!</button>
            </Link>
            <Link className="links_two btn_link" to="/products">
              <button className="btn_products">PRODUCTOS</button>
            </Link>
            <Link className="links_three btn_link">
              <button className="btn_menu">MENÚ COFFEE</button>
            </Link>
          </div>
          <div className="imgs_footer">
            <div className="item_inst">
              <img src={instagram} alt="" />
            </div>
            <div className="item_linke">
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="derechos">
          <p>©2023 CODESPRESSO</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
