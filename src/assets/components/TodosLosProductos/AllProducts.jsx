import { useContext, useState } from "react";

import "./AllProducts.css";
import { UserContext } from "../../../../ProductsContext.jsx";

import SearchBar from "../BarraDeBusqueda/SearchBar.jsx";
import ProductsDesign from "./ProdsDesign.jsx";
import FilterAndOrder from "../FilterAndOrder/FilterAndOrder.jsx";

const productsPerPage = 12;

function AllProducts() {
  const { isApiQuery, apiSorted } = useContext(UserContext);

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

  return (
    <main>
      <section className="all-products-section">
        <div className="search-bar-section">
          <SearchBar></SearchBar>
        </div>
        <section className="all-products">
          <div className="products-show-container ">
            {productsToShow.map((product) => (
              <ProductsDesign product={product} key={product.id} />
            ))}
          </div>
          <aside className="filter-section">
            <FilterAndOrder api={isApiQuery}></FilterAndOrder>
          </aside>
        </section>
        <section>
          <div className="pages">
            <button onClick={goToPreviousPage}>Anterior</button>
            <span>{currentPage}</span>
            <button onClick={goToNextPage}>Siguiente</button>
          </div>
        </section>
      </section>
    </main>
  );
}

export default AllProducts;
