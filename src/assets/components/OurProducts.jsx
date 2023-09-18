import { useContext } from "react";
import "../../styles/Section-products.css";
import Product from "./product";

import { UserContext } from "../../../UserContext";
function OurProducts() {
  const { apiData, isHambur } = useContext(UserContext);

  // console.log(apiData);

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
