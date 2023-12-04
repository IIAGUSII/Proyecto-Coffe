import "./ProdsDesign.css";
import Dolar from "../icons/Dolar";
import favourite from "../../img/favourite.svg";
import Shop from "../icons/Shop";

function ProductsDesign({ product }) {
  return (
    <article>
      <div className="rectangleContainer">
        <img src={product.picture} alt="" />
        <h3>{product.name}</h3>
      </div>
      <div className="rectangleTwo">
        <div className="rectanglePrice">
          <Dolar></Dolar>
          <p>{product.price}</p>
        </div>
        <div className="product-add">
          <Shop />
          <img src={favourite} alt="" />
        </div>
      </div>
    </article>
  );
}

export default ProductsDesign;
