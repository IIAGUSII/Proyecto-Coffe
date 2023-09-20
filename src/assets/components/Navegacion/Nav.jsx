import "./Nav.css";
import Hambur from "../icons/Hambur";
import Shop from "../icons/Shop";
import logocodespresso from "../../img/logocodespresso2.png";

function Nav() {
  return (
    <>
      <nav className="section-navbar">
        <Hambur></Hambur>
        <div className="center-icon">
          <img src={logocodespresso} alt="" />
        </div>
        <Shop></Shop>
      </nav>
    </>
  );
}

export default Nav;
