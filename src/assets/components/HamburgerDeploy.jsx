import { Link } from "react-router-dom";
import "../../styles/HamburgerDeploy.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import MenuCoffee from "./MenuCoffee";
import HamburgerDeployTwo from "./HamburgerDeployTwo";
import HamburgerDeployThree from "./HamburgerDeployThree";
import Home from "./icons/home";


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
            <div className="searchBar">
              {/* <SearchBar></SearchBar> */}
            </div>

            <div className="selectorHambur">
              <button onClick={toggleCoffeeMenu} className="buttonHambur">
                MENÚ COFFEE
              </button>

              <button onClick={toggleCoffeeMaker} className="buttonHambur">
                CAFETERAS/CAFÉ MOLIDO
              </button>
              <Link to="/products">
                <button className="buttonHambur">
                  PRODUCTOS
                </button>
              </Link>
            </div>
            
            <div className="registerContainer">
              <Link to="/">
              <Home></Home>
              </Link>
              <button className="registerHambur">REGISTRO</button>
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
