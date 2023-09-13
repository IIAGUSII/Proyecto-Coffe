import React, { useContext } from "react";
import "../../styles/Section-products.css";
import Product from "./product";
const url = "https://64fa6148cb9c00518f79e584.mockapi.io/api/products";
import { UserContext } from "../../../UserContext";
function OurProducts() {
  const apiData = useContext(UserContext);

  console.log(apiData);

  return (
    <section className="section-products">
      <h2 className="products-texts">Nuestros productos</h2>
      <section className="our-products">
        {apiData.slice(0, 4).map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </section>
    </section>
  );
}

export default OurProducts;
