import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../../../ProductsContext.jsx";
import ProductsDesign from "./ProdsDesign";
import FilterAndOrder from "../FilterAndOrder/FilterAndOrder.jsx";
import SearchBar from "../BarraDeBusqueda/SearchBar.jsx";

export default function ProdFood() {
  const { isApiQuery, apiSorted, setCatalogName } = useContext(UserContext);

  const productsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  let totalPages = Math.ceil(apiSorted.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const productsToShow = apiSorted.slice(startIndex, endIndex);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setCatalogName("Comida");
  }, []);

  return (
    <>
      <main>
        <section className="sectionForProducts">
          <div className="search-bar-section">
            <SearchBar></SearchBar>
          </div>

          <section className="sectionDesign">
            <div className="productsContainer">
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
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
              Anterior
            </button>
            <span>{currentPage}</span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
