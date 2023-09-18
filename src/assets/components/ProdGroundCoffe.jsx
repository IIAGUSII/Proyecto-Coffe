import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import ProductsDesign from "./ProdsDesign";

export default function GroundCoffee() {
  const idFilterGrounds = ["23", "24", "25", "26", "27"];
  const [products, setProducts] = useState([]);

  console.log(products);
  const { apiData } = useContext(UserContext);
  console.log(apiData);

  return (
    <>
      <div className="containerProducts">
        <div className="coffee-selection">
          <h2>CAFÉ MOLIDO</h2>
        </div>
        {apiData
          .filter((apiData) => idFilterGrounds.includes(apiData.id))
          .map((apiData) => (
            <ProductsDesign product={apiData} key={apiData.id}></ProductsDesign>
          ))}
      </div>
    </>
  );
}
