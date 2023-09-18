import "../../Styles/ProdsDesign.css";
import Dolar from "./icons/Dolar";

function ProductsDesign({ product }) {
  return (
    <article>
      <div className="rectangleContainer">
        <img src={product.photo} alt="" />
        <h3>{product.name}</h3>
      </div>
      <div className="rectangleTwo">
        <div className="rectanglePrice">
          <Dolar></Dolar>
          <p>{product.price}</p>
        </div>
        <div className="addAndSubstract">
          <button className="buttonSubstract">
            <span>-</span>
          </button>
          <button className="buttonAdd">
            <span>+</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductsDesign;
