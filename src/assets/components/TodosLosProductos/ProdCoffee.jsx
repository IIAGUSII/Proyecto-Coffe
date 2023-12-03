import "./ProdCoffee.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../../ProductsContext.jsx";
import ProductCoffee from "./ProdsDesign";
import SearchBar from "../BarraDeBusqueda/SearchBar";

function FilterCoffee() {
  const idFilterCold = ["Bebida fría"];
  const idFilterHot = ["Bebida caliente"];
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
      <main>
        <div className="search-bar-section">
          <SearchBar></SearchBar>
        </div>
        <div className="coffee-selection">
          <h2>CAFÉ</h2>
          {}
        </div>
        <div className="containerProducts">
          <button onClick={toggleProductsCold} className="cold-coffee">
            CAFÉS FRIOS
          </button>

          {isProductsCold
            ? apiData
                .filter(
                  (apiData) =>
                    idFilterCold.includes(apiData.catalog) &&
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
                    idFilterHot.includes(apiData.catalog) &&
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
      </main>
    </>
  );
}

export default FilterCoffee;
