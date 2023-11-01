import "./Nav.css";
import Hambur from "../icons/Hambur";
import Shop from "../icons/Shop";
import logocodespresso from "../../img/logocodespresso2.png";
import { UserContext } from "../../../../ProductsContext";
import { useContext } from "react";
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
          <li class="home-paragraph">
            <Home></Home>
            <p>Inicio</p>
          </li>
          <li class="folks-paragraph">
            <FolksIcon></FolksIcon>
            <p>Comidas</p>
          </li>
          <li class="coffe-paragraph">
            <CoffeNav></CoffeNav>
            <p>Cafés</p>
          </li>
          <li class="coffe-maker-paragraph">
            <CoffeMaker></CoffeMaker>
            <p>Cafeteras</p>
          </li>
          <li class="coffe-grains-paragraph">
            <CoffeGrains></CoffeGrains>
            <p>Molido</p>
          </li>
          <li class="user-paragraph">
            <UserIcon></UserIcon>
            <p>Usuario</p>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
