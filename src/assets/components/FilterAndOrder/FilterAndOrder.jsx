import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../../ProductsContext";
import OrderIconLow from "../icons/OrderIconLow";

import OrderIconHigh from "../icons/orderIconHigh";

import ResetIcon from "../icons/ResetIcon.jsx";
import ArrowDownAdmin from "../icons/ArrowDownAdmin.jsx";
function FilterAndOrder({ api }) {
  const { setCatalogName, apiSorted, setApiSorted } = useContext(UserContext);
  const [isSortedUp, setIsSortedUp] = useState(false);
  const [isSortedDown, setIsSortedDown] = useState(false);
  const [isCatalogClicked, setIsCatalogClicked] = useState(false);
  const sortAscending = () => {
    setIsSortedUp(true);
    setIsSortedDown(false);
  };

  // Función para ordenar los productos de mayor a menor precio
  const sortDescending = () => {
    setIsSortedUp(false);
    setIsSortedDown(true);
  };

  // Función para restablecer el ordenamiento
  const resetAllSort = () => {
    setIsSortedUp(false);
    setIsSortedDown(false);
  };

  useEffect(() => {
    const sortedProducts = isSortedDown
      ? [...api].sort((a, b) => a.price - b.price)
      : isSortedUp
      ? [...api].sort((a, b) => b.price - a.price)
      : api;
    setApiSorted(sortedProducts);
  }, [api, isSortedDown, isSortedUp, setApiSorted]);

  return (
    <article className="order-catalog-container">
      <p className="order-paragraph">Ordenar por:</p>
      <div className="order">
        <button onClick={() => sortAscending()} className="order-button">
          <OrderIconHigh></OrderIconHigh>
        </button>
        <button onClick={() => sortDescending()} className="order-button">
          <OrderIconLow></OrderIconLow>
        </button>
        <button onClick={() => resetAllSort()} className="resetIcon-button">
          <ResetIcon></ResetIcon>
        </button>
      </div>
      <button
        onClick={() => setIsCatalogClicked(!isCatalogClicked)}
        className="button-catalog"
      >
        Catalogo
      </button>

      <aside className={!isCatalogClicked ? "hidden" : "list-product-catalog"}>
        <ArrowDownAdmin></ArrowDownAdmin>
        <ul>
          <li onClick={() => setCatalogName("")}>Todos los productos</li>
          <li onClick={() => setCatalogName("Comida")}>Comida</li>
          <li onClick={() => setCatalogName("bebida fria")}>Bebida fria</li>
          <li onClick={() => setCatalogName("bebida caliente")}>
            Bebida caliente
          </li>
          <li onClick={() => setCatalogName("combos")}>Combos</li>
          <li onClick={() => setCatalogName("cafes molidos")}>Cafes molidos</li>
          <li onClick={() => setCatalogName("cafeteras")}>Cafeteras</li>
          <li onClick={() => setCatalogName("tazas")}>Tazas</li>
        </ul>
      </aside>
    </article>
  );
}

export default FilterAndOrder;
