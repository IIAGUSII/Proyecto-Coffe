import { useContext, useState } from "react";
import Product from "./product";
import "../../Styles/AllProducts.css";
import { UserContext } from "../../../UserContext";
import Banner from "./Banner";
import ProductsDesign from "./ProdsDesign";
import HamburgerDeploy from "./HamburgerDeploy";
import SearchBar from "./SearchBar";

const productsPerPage = 11;

function AllProducts() {
  const { apiData, searchText } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const productsToShow = apiData.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(apiData.length / productsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const sortProducts = (products) => {
    products.sort(function (a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
  };

  console.log(sortProducts);

  return (
    <main>
      <HamburgerDeploy></HamburgerDeploy>
      <div className="search-bar-section">
        <SearchBar></SearchBar>
      </div>
      <section className="all-products">
        <span className="products-h2-all-products">
          <h2>PRODUCTOS</h2>
        </span>
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
