import "../../styles/HamburgerDeploy.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import MenuCoffee from "./MenuCoffee";
import HamburgerDeployTwo from "./HamburgerDeployTwo";
import HamburgerDeployThree from "./HamburgerDeployThree";

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
              <SearchBar></SearchBar>
            </div>

            <div className="selectorHambur">
              <button onClick={toggleCoffeeMenu} className="buttonHambur">
                COFFEE MENU
              </button>

              <button onClick={toggleCoffeeMaker} className="buttonHambur">
                CAFETERAS/CAFE MOLIDO
              </button>

              <button onClick={toggleCoffeeProducts} className="buttonHambur">
                PRODUCTOS
              </button>
            </div>
            <div className="registerContainer">
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
