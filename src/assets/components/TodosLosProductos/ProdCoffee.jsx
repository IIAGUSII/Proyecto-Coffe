import "./ProdCoffee.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../../ProductsContext.jsx";

import SearchBar from "../BarraDeBusqueda/SearchBar";
import FilterAndOrder from "../FilterAndOrder/FilterAndOrder.jsx";
import ProductsDesign from "./ProdsDesign";
function FilterCoffee() {
  // console.log(products);

  const { apiData, searchText, apiSorted, isApiQuery, setCatalogName } =
    useContext(UserContext);
  // console.log(apiData);
  const productsPerPage = 12;
  console.log(apiData);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const productsToShow = apiSorted.slice(startIndex, endIndex);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  console.log(productsToShow);
  const goToNextPage = () => {
    const totalPages = Math.ceil(apiSorted.length / productsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    // Establece el nombre del catálogo después del renderizado
    setCatalogName("Bebida caliente,Bebida fria");
  }, []); //
  return (
    <>
      <main>
        <section className="products-food-section">
          <div className="search-bar-section">
            <SearchBar></SearchBar>
          </div>

          <section className="container-products-food">
            <div className="food-container">
              {productsToShow.map((product) => (
                <ProductsDesign
                  product={product}
                  key={product.id}
                ></ProductsDesign>
              ))}
            </div>
            <aside className="filter-section">
              <FilterAndOrder
                api={isApiQuery}
                isActive={false}
              ></FilterAndOrder>
            </aside>
          </section>
          <div className="pages">
            <button onClick={goToPreviousPage}>Anterior</button>
            <span>{currentPage}</span>
            <button onClick={goToNextPage}>Siguiente</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default FilterCoffee;
