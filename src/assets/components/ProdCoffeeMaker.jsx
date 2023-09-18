import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import ProductsDesign from "./ProdsDesign";

export default function CoffeeMaker() {
  const idFilterMakers = ["15", "16", "17", "18", "19", "20", "21", "22"];
  const [products, setProducts] = useState([]);

  console.log(products);
  const { apiData } = useContext(UserContext);
  console.log(apiData);

  return (
    <>
      <div className="containerProducts">
        <div className="coffee-selection">
          <h2>CAFETERAS</h2>
        </div>
        {apiData
          .filter((apiData) => idFilterMakers.includes(apiData.id))
          .map((apiData) => (
            <ProductsDesign product={apiData} key={apiData.id}></ProductsDesign>
          ))}
      </div>
    </>
  );
}
