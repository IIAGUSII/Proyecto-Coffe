import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import ProductsDesign from "./ProdsDesign";
import HamburgerDeploy from "./HamburgerDeploy";
import SearchBar from "./SearchBar";
export default function ProdFood() {
  const idFilterFood = ["10", "11", "12", "13", "14"];
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
      <div className="containerProducts">
        
        <div className="coffee-selection">
          
          <h2>COMIDAS</h2>
        </div>
        {apiData
          .filter((apiData) => idFilterFood.includes(apiData.id)&&
          apiData.name
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()))
          .map((apiData) => (
            <ProductsDesign product={apiData} key={apiData.id}></ProductsDesign>
          ))}
      </div>
    </>
  );
}
