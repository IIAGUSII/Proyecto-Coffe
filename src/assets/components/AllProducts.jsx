import { useContext, useState } from "react";
import Product from "./product";
import "../../Styles/AllProducts.css";
import { UserContext } from "../../../UserContext";

const productsPerPage = 11;

function AllProducts() {
  const { apiData } = useContext(UserContext);
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

  return (
    <main>
      <section className="all-products">
        <h2>PRODUCTOS</h2>
        <div className="products">
          {productsToShow.map((product) => (
            <Product product={product} key={product.id} />
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
