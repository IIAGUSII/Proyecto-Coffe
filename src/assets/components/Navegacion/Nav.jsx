import "./Nav.css";
import { UserContext } from "../../../../ProductsContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import Hambur from "../icons/Hambur";
import Shop from "../icons/Shop";
import logocodespresso from "../../img/logocodespresso2.png";
import Home from "../icons/Home";
import FolksIcon from "../icons/Folks-icon";
import CoffeNav from "../icons/CoffeNav";
import CoffeMaker from "../icons/CoffeMaker";
import CoffeGrains from "../icons/CoffeeGrains";
import UserIcon from "../icons/UserIcon";
function Nav() {
  const { isActiveHambur } = useContext(UserContext);
  return (
    <>
      <nav className="section-navbar">
        <Hambur></Hambur>
        <div className="center-icon">
          <img src={logocodespresso} alt="" />
        </div>
        <Shop></Shop>
      </nav>
      <nav
        className={`hamburger-nav ${isActiveHambur ? "isActiveHambur" : ""}`}
      >
        <ul class="menu">
          <Link className="link-menu" to="/">
            <li class="home-paragraph">
              <Home></Home>
              <p>Inicio</p>
            </li>
          </Link>
          <Link className="link-menu" to="/comidas">
            <li class="folks-paragraph">
              <FolksIcon></FolksIcon>
              <p>Comidas</p>
            </li>
          </Link>
          <Link className="link-menu" to="/coffee">
            <li class="coffe-paragraph">
              <CoffeNav></CoffeNav>
              <p>Cafés</p>
            </li>
          </Link>
          <Link className="link-menu" to="/cafeteras">
            <li class="coffe-maker-paragraph">
              <CoffeMaker></CoffeMaker>
              <p>Cafeteras</p>
            </li>
          </Link>
          <Link className="link-menu" to="/cafemolido">
            <li class="coffe-grains-paragraph">
              <CoffeGrains></CoffeGrains>
              <p>Molido</p>
            </li>
          </Link>
          <Link className="link-menu" to="/registro">
            <li class="user-paragraph">
              <UserIcon></UserIcon>
              <p>Usuario</p>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
