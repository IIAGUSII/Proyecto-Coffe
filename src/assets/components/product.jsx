import "../../styles/Product.css";
import Dolar from "./icons/Dolar";

function Product({ product }) {
  return (
    <article className="product">
      <img src={product.photo} alt="" />
      <div className="rectangle-container">
        <h3 className="product-name">{product.name}</h3>
        <div className="rectangle">
          <Dolar></Dolar>
          <p className="product-price">{product.price}</p>
          <button className="boton-circulo">
            <span>+</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default Product;
