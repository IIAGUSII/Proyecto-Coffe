import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import ProductsDesign from "./ProdsDesign";

export default function ProdFood() {
  const idFilterFood = ["10", "11", "12", "13", "14"];
  const [products, setProducts] = useState([]);

  console.log(products);
  const { apiData } = useContext(UserContext);
  console.log(apiData);

  return (
    <>
      <div className="containerProducts">
        <div className="coffee-selection">
          <h2>COMIDAS</h2>
        </div>
        {apiData
          .filter((apiData) => idFilterFood.includes(apiData.id))
          .map((apiData) => (
            <ProductsDesign product={apiData} key={apiData.id}></ProductsDesign>
          ))}
      </div>
    </>
  );
}
