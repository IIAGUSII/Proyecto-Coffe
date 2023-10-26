import "./Product.css";
import Dolar from "../icons/Dolar";
import favourite from "../../img/favourite.svg";
import Shop from "../icons/Shop";

function Product({ product }) {
  return (
    <article className="product">
      <img src={product.photo} alt="" />
      <div className="rectangle-container">
        <h3 className="product-name">{product.name}</h3>
        <div className="rectangle">
          <Dolar></Dolar>
          <p className="product-price">{product.price}</p>
        </div>
        <div className="product-add">
          <Shop />
          <img src={favourite} alt="" />
        </div>
      </div>
    </article>
  );
}

export default Product;
