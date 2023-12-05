import "./Nav.css";
import { UserContext } from "../../../../ProductsContext";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
import LoginIcon from "../icons/LoginIcon";
import AllProductsIcon from "../icons/allProductsIcon";

function Nav() {
  const [isClickedProducts, setIsClickedProducts] = useState(false);
  const { isActiveHambur, setCatalogName } = useContext(UserContext);
  return (
    <>
      <nav className="section-navbar">
        <Hambur></Hambur>
        <div className="center-icon">
          <img src={logocodespresso} alt="" />
        </div>
        <img
          className="profile-picture"
          src="https://i.pinimg.com/736x/5d/c3/1a/5dc31a319d3c2cc0d0d3441769fbc0c7.jpg"
          alt=""
        />
      </nav>

      <aside
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
            onClick={() => setCatalogName("Bebida caliente,Bebida Fria")}
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
              <p>Registrarse</p>
            </li>
          </NavLink>
          <NavLink
            onClick={() => setCatalogName("")}
            className="link-menu"
            to="/login"
          >
            <li class="login-paragraph">
              <LoginIcon />
              <p>Iniciar sesión</p>
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
      </aside>
      <nav className="nav-destokp">
        <ul>
          <NavLink className="link-menu" to="/">
            <li>Inicio</li>
          </NavLink>
          <li>
            <p onClick={() => setIsClickedProducts(!isClickedProducts)}>
              Productos
            </p>

            <aside className={isClickedProducts ? "" : "hidden"}>
              <ul className="ul-deploy">
                <NavLink
                  onClick={() => setCatalogName("")}
                  className="link-menu"
                  to="/products"
                >
                  <li>Todos los productos</li>
                </NavLink>
                <NavLink
                  onClick={() => setCatalogName("comida")}
                  className="link-menu"
                  to="/comidas"
                >
                  <li>Comidas</li>
                </NavLink>
                <NavLink
                  onClick={() => setCatalogName("Bebida caliente,Bebida Fria")}
                  className="link-menu"
                  to="/coffee"
                >
                  <li>Cafes</li>
                </NavLink>
                <NavLink
                  onClick={() => setCatalogName("cafeteras")}
                  className="link-menu"
                  to="/cafeteras"
                >
                  <li>Cafeteras</li>
                </NavLink>
                <NavLink
                  onClick={() => setCatalogName("cafes molidos")}
                  className="link-menu"
                  to="/cafemolido"
                >
                  <li>Molidos</li>
                </NavLink>
              </ul>
            </aside>
          </li>
          <NavLink className="link-menu" to="/registro">
            <li>Registarse</li>
          </NavLink>
          <NavLink className="link-menu" to="/login">
            <li>Iniciar sesion</li>
          </NavLink>
        </ul>

        <img className="logo-nav" src={logocodespresso} alt="" />
        <div className="center-profile-picture">
          <NavLink
            onClick={() => setCatalogName("")}
            className="link-menu"
            to="/admin"
          >
            <AdminIcon></AdminIcon>
          </NavLink>
          <img
            className="profile-picture"
            src="https://i.pinimg.com/736x/5d/c3/1a/5dc31a319d3c2cc0d0d3441769fbc0c7.jpg"
            alt=""
          />
        </div>
      </nav>
    </>
  );
}

export default Nav;
