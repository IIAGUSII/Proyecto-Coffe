import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../../ProductsContext.jsx";
import ProductsDesign from "./ProdsDesign";
import HamburgerDeploy from "../Hamburguesa/HamburgerDeploy";
import SearchBar from "../BarraDeBusqueda/SearchBar.jsx";

export default function GroundCoffee() {
  const idFilterGrounds = ["23", "24", "25", "26", "27"];
  const [products, setProducts] = useState([]);

  console.log(products);
  const { apiData, searchText } = useContext(UserContext);
  console.log(apiData);

  return (
    <>
      <HamburgerDeploy></HamburgerDeploy>
      <div className="search-bar-section">
        <SearchBar></SearchBar>
      </div>
      <div className="coffee-selection">
        <h2>CAFÉ MOLIDO</h2>
      </div>
      <div className="container-products">
        {apiData
          .filter(
            (apiData) =>
              idFilterGrounds.includes(apiData.id) &&
              apiData.name
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())
          )
          .map((apiData) => (
            <ProductsDesign product={apiData} key={apiData.id}></ProductsDesign>
          ))}
      </div>
    </>
  );
}
