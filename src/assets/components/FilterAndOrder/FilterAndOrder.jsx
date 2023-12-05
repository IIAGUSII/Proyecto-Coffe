import { useContext, useState, useEffect, NavLink, reactRouter } from "react";
import { UserContext } from "../../../../ProductsContext";
import OrderIconLow from "../icons/OrderIconLow";

import OrderIconHigh from "../icons/orderIconHigh";

import ResetIcon from "../icons/ResetIcon.jsx";
import ArrowDownAdmin from "../icons/ArrowDownAdmin.jsx";
function FilterAndOrder({ api, isActive }) {
  const { setCatalogName, apiSorted, setApiSorted, catalogName } =
    useContext(UserContext);
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
    console.log(apiSorted);
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
      {isActive ? (
        <button
          onClick={() => setIsCatalogClicked(!isCatalogClicked)}
          className="button-catalog"
        >
          Catalogo
        </button>
      ) : null}

      <aside className={!isCatalogClicked ? "hidden" : "list-product-catalog"}>
        <ArrowDownAdmin></ArrowDownAdmin>
        <ul>
          <li
            className={!catalogName ? `all-admin-color` : null}
            onClick={() => setCatalogName("")}
          >
            Todos los productos
          </li>

          <li
            className={catalogName === "Comida" ? `Comida` : null}
            onClick={() => setCatalogName("Comida")}
          >
            Comida
          </li>
          <li
            className={catalogName === "bebida fria" ? `bebidaFria` : null}
            onClick={() => setCatalogName("bebida fria")}
          >
            Bebida fria
          </li>
          <li
            className={
              catalogName === "bebida caliente" ? `bebidaCaliente` : null
            }
            onClick={() => setCatalogName("bebida caliente")}
          >
            Bebida caliente
          </li>
          <li
            className={catalogName === "combos" ? `combos` : null}
            onClick={() => setCatalogName("combos")}
          >
            Combos
          </li>
          <li
            className={catalogName === "cafes molidos" ? `cafesMolidos` : null}
            onClick={() => setCatalogName("cafes molidos")}
          >
            Cafes molidos
          </li>
          <li
            className={catalogName === "cafeteras" ? `cafeteras` : null}
            onClick={() => setCatalogName("cafeteras")}
          >
            Cafeteras
          </li>
          <li
            className={catalogName === "tazas" ? `tazas` : null}
            onClick={() => setCatalogName("tazas")}
          >
            Tazas
          </li>
        </ul>
      </aside>
    </article>
  );
}

export default FilterAndOrder;
