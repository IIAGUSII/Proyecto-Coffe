import "../../styles/Nav.css";
import Hambur from "./icons/Hambur";
import Shop from "./icons/Shop";
import imagen1 from "../../assets/img/logocodespresso2.png";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import HamburgerDeploy from "./HamburgerDeploy";
function Nav(setHambur) {
  const { isHambur } = useContext(UserContext);

  return (
    <>
      <nav className="section-navbar">
        <Hambur></Hambur>
        <div className="center-icon">
          <img src={imagen1} alt="" />
        </div>
        <Shop></Shop>
      </nav>
      
    </>
  );
}

export default Nav;
