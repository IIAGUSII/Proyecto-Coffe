import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../../../ProductsContext.jsx";
import ProductsDesign from "./ProdsDesign";
import FilterAndOrder from "../FilterAndOrder/FilterAndOrder.jsx";
import SearchBar from "../BarraDeBusqueda/SearchBar.jsx";

export default function ProdFood() {
  const { isApiQuery, apiSorted, setCatalogName } = useContext(UserContext);

  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = apiSorted.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(apiSorted.length / productsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Use useEffect para ejecutar la función solo después del renderizado
  useEffect(() => {
    // Establece el nombre del catálogo después del renderizado
    setCatalogName("Comida");
  }, []); // El segundo argumento es un array de dependencias, en este caso, está vacío

  return (
    <>
      <main>
        <section className="products-food-section">
          <div className="search-bar-section">
            <SearchBar></SearchBar>
          </div>

          <section className="container-products-food">
            <div className="food-container">
              {/* Renderiza la lista de productos */}
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
