import { Link } from "react-router-dom";
import "./HamburgerDeploy.css";
import { useState } from "react";
import MenuCoffee from "./MenuCoffee";
import HamburgerDeployTwo from "./HamburgerDeployTwo";
import HamburgerDeployThree from "./HamburgerDeployThree";
import Home from "../icons/Home";

function HamburgerDeploy() {
  const [isAllContentVisible, setIsAllContentVisible] = useState(true);
  const [isCoffeeMakerContentVisible, setIsCoffeeMakerContentVisible] =
    useState(false);
  const [isCoffeeProductsContentVisible, setIsCoffeeProductsContentVisible] =
    useState(false);

  function toggleCoffeeMenu() {
    setIsAllContentVisible(!isAllContentVisible);
    setIsCoffeeMakerContentVisible(false);
    setIsCoffeeProductsContentVisible(false);
  }

  function toggleCoffeeMaker() {
    setIsAllContentVisible(!isAllContentVisible);
    setIsCoffeeMakerContentVisible(true);
    setIsCoffeeProductsContentVisible(false);
  }

  function toggleCoffeeProducts() {
    setIsAllContentVisible(!isAllContentVisible);
    setIsCoffeeMakerContentVisible(false);
    setIsCoffeeProductsContentVisible(true);
  }

  return (
    <>
      {isAllContentVisible ? (
        <section className="hamburger-deploy">
          <div className="hamburger-filter">
            <div className="searchBar">{/* <SearchBar></SearchBar> */}</div>

            <div className="selectorHambur">
              <button onClick={toggleCoffeeMenu} className="buttonHambur">
                MENÚ COFFEE
              </button>

              <button onClick={toggleCoffeeMaker} className="buttonHambur">
                CAFETERAS/CAFÉ MOLIDO
              </button>
              <Link to="/products">
                <button className="buttonHambur">PRODUCTOS</button>
              </Link>
            </div>

            <div className="registerContainer">
              <Link to="/">
                <Home></Home>
              </Link>
              <Link to="/registro">
                <button className="registerHambur">REGISTRO</button>
              </Link>
            </div>
          </div>
        </section>
      ) : isCoffeeMakerContentVisible ? (
        <HamburgerDeployTwo />
      ) : isCoffeeProductsContentVisible ? (
        <HamburgerDeployThree></HamburgerDeployThree>
      ) : (
        <MenuCoffee></MenuCoffee>
      )}
    </>
  );
}

export default HamburgerDeploy;
