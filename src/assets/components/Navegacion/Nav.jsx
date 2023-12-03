import "./Nav.css";
import { UserContext } from "../../../../ProductsContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import Hambur from "../icons/Hambur";
import Shop from "../icons/Shop";
import logocodespresso from "../../img/logocodespresso2.png";
import Home from "../icons/Home";
import FolksIcon from "../icons/Folks-icon";
import CoffeNav from "../icons/CoffeNav";
import CoffeMaker from "../icons/CoffeMaker";
import CoffeGrains from "../icons/CoffeeGrains";
import UserIcon from "../icons/UserIcon";
import AdminIcon from "../icons/AdminIcon";
import AllProductsIcon from "../icons/allProductsIcon";
function Nav() {
  const { isActiveHambur, setCatalogName } = useContext(UserContext);
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
          <NavLink className="link-menu" to="/">
            <li class="home-paragraph">
              <Home></Home>
              <p>Inicio</p>
            </li>
          </NavLink>
          <NavLink
            onClick={() => setCatalogName("")}
            className="link-menu"
            to="/products"
          >
            <li class="home-paragraph">
              <AllProductsIcon></AllProductsIcon>
              <p>Productos</p>
            </li>
          </NavLink>
          <NavLink
            onClick={() => setCatalogName("comida")}
            className="link-menu"
            to="/comidas"
          >
            <li class="folks-paragraph">
              <FolksIcon></FolksIcon>
              <p>Comidas</p>
            </li>
          </NavLink>
          <NavLink
            onClick={() => setCatalogName("")}
            className="link-menu"
            to="/coffee"
          >
            <li class="coffe-paragraph">
              <CoffeNav></CoffeNav>
              <p>Cafés</p>
            </li>
          </NavLink>
          <NavLink
            onClick={() => setCatalogName("cafeteras")}
            className="link-menu"
            to="/cafeteras"
          >
            <li class="coffe-maker-paragraph">
              <CoffeMaker></CoffeMaker>
              <p>Cafeteras</p>
            </li>
          </NavLink>
          <NavLink
            onClick={() => setCatalogName("cafes molidos")}
            className="link-menu"
            to="/cafemolido"
          >
            <li class="coffe-grains-paragraph">
              <CoffeGrains></CoffeGrains>
              <p>Molido</p>
            </li>
          </NavLink>
          <NavLink
            onClick={() => setCatalogName("")}
            className="link-menu"
            to="/registro"
          >
            <li class="user-paragraph">
              <UserIcon></UserIcon>
              <p>Usuario</p>
            </li>
          </NavLink>
          <NavLink
            onClick={() => setCatalogName("")}
            className="link-menu"
            to="/admin"
          >
            <li class="user-paragraph">
              <AdminIcon></AdminIcon>
              <p>Admin</p>
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
