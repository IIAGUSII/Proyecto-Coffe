import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../../ProductsContext.jsx";
import ProductsDesign from "./ProdsDesign";
import SearchBar from "../BarraDeBusqueda/SearchBar.jsx";

export default function GroundCoffee() {
 
  const [products, setProducts] = useState([]);

  console.log(products);
  const { apiData, searchText } = useContext(UserContext);
  const idFilterGrounds = ["Cafeteras"];
  console.log(apiData);

  return (
    <>
      <main>
        <div className="search-bar-section">
          <SearchBar></SearchBar>
        </div>
        <div className="coffee-selection">
          <h2>CAFÉ MOLIDO</h2>
        </div>
        <div className="containerProducts">
          {apiData
            .filter(
              (apiData) =>
                idFilterGrounds.includes(apiData.catalog) &&
                apiData.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
            )
            .map((apiData) => (
              <ProductsDesign
                product={apiData}
                key={apiData.id}
              ></ProductsDesign>
            ))}
        </div>
      </main>
    </>
  );
}
