import { useContext } from "react";
import "./Section-products.css";
import Product from "./product";
import { UserContext } from "../../../../ProductsContext.jsx";

function OurProducts() {
  const { apiData, isHambur } = useContext(UserContext);

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
