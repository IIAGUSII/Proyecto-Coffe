import "../../Styles/ProdCoffee.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import ProductCoffee from "./ProdsDesign";
import SearchBar from "./SearchBar";
import HamburgerDeploy from "./HamburgerDeploy";
function FilterCoffee() {
  const idFilterCold = ["1", "2", "3", "4"];
  const idFilterHot = ["5", "6", "7", "8", "9"];
  const [products, setProducts] = useState([]);
  const [isProductsCold, setIsProductsCold] = useState(false);
  const [isProductsHot, setIsProductsHot] = useState(false);

  // console.log(products);
  function toggleProductsCold() {
    setIsProductsCold(!isProductsCold);
  }
  function toggleProductsHot() {
    setIsProductsHot(!isProductsHot);
  }
  const { apiData, searchText } = useContext(UserContext);
  // console.log(apiData);

  return (
    <>
     <HamburgerDeploy></HamburgerDeploy>
      <div className="search-bar-section">
        <SearchBar></SearchBar>
      </div>
      <div className="containerProducts">
        <div className="coffee-selection">
          <h2>CAFÉ</h2>
          {}
        </div>

        <button onClick={toggleProductsCold} className="cold-coffee">
          CAFÉS FRIOS
        </button>

        {isProductsCold
          ? apiData
              .filter(
                (apiData) =>
                  idFilterCold.includes(apiData.id) &&
                  apiData.name
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase())
              )
              .map((apiData) => (
                <ProductCoffee
                  product={apiData}
                  key={apiData.id}
                ></ProductCoffee>
              ))
          : null}
        <button onClick={toggleProductsHot} className="hot-coffee">
          CAFÉS CALIENTES
        </button>
        {isProductsHot
          ? apiData
              .filter(
                (apiData) =>
                  idFilterHot.includes(apiData.id) &&
                  apiData.name
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase())
              )
              .map((apiData) => (
                <ProductCoffee
                  product={apiData}
                  key={apiData.id}
                ></ProductCoffee>
              ))
          : null}
      </div>
    </>
  );
}

export default FilterCoffee;
