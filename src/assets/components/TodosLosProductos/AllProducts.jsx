import React, { useContext, useState } from "react";
import Product from "../ProductosDestacados/product.jsx";
import "./AllProducts.css";
import { UserContext } from "../../../../ProductsContext.jsx";
import ArrowUp from "../icons/ArrowUp.jsx";
import ArrowDown from "../icons/ArrowDown";
import HamburgerDeploy from "../Hamburguesa/HamburgerDeploy.jsx";
import SearchBar from "../BarraDeBusqueda/SearchBar.jsx";
import ProductsDesign from "./ProdsDesign.jsx";

const productsPerPage = 11;

function AllProducts() {
  const {
    apiData,
    searchText,
    isSortBottom,
    setIsSortBottom,
    isSortUp,
    setIsSortUp,
    setSearchText,
  } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;


  const sortedProducts = isSortBottom
    ? [...apiData].sort((a, b) => a.price - b.price)
    : isSortUp
    ? [...apiData].sort((a, b) => b.price - a.price)
    : apiData;

  const productsToShow = sortedProducts
    .filter((prod) =>
      prod.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    )
    .slice(startIndex, endIndex);


  const sortAscending = () => {
    setIsSortUp(true);
    setIsSortBottom(false);
  };

  const sortDescending = () => {
    setIsSortUp(false);
    setIsSortBottom(true);
  };


  const resetAllSort = () => {
    setIsSortUp(false);
    setIsSortBottom(false);
    setSearchText("");
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main>
      <HamburgerDeploy></HamburgerDeploy>
      <div className="search-bar-section">
        <SearchBar></SearchBar>
      </div>
      <section className="all-products">
        <div className="product-and-arrows">
          <span className="products-h2-all-products">
            <h2>PRODUCTOS</h2>
          </span>
          <span className="arrows">
            <ArrowUp onClick={sortAscending}></ArrowUp>
            <p onClick={resetAllSort}>Destacados</p>
            <ArrowDown onClick={sortDescending}></ArrowDown>
          </span>
        </div>
        <div className="products">
          {productsToShow.map((product) => (
            <ProductsDesign product={product} key={product.id} />
          ))}
        </div>
      </section>
      <section>
        <div className="pages">
          <button onClick={goToPreviousPage}>Anterior</button>
          <span>{currentPage}</span>
          <button onClick={goToNextPage}>Siguiente</button>
        </div>
      </section>
    </main>
  );
}

export default AllProducts;
