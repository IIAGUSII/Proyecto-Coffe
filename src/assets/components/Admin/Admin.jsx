import { useContext, useState, useRef } from "react";
import { UserContext } from "../../../../ProductsContext.jsx";
import OrderIconLow from "../icons/OrderIconLow";
import PlusIcon from "../icons/PlusIcon";
import OrderIconHigh from "../icons/orderIconHigh";
import TrashIcon from "../icons/trashIcon.jsx";
import Pencil from "../icons/Pencil.jsx";
import "./Admin.css";
import ResetIcon from "../icons/ResetIcon.jsx";
import ArrowDownAdmin from "../icons/ArrowDownAdmin.jsx";

function Admin() {
  const [productForm, setProductForm] = useState({
    name: "",
    picture: "",
    price: "",
    descript: "",
    catalog: [],
  });
  console.log(productForm);
  const [editForm, setEditForm] = useState({
    name: "",
    picture: "",
    price: "",
    descrip: "",
    catalog: [],
  });

  const handleImputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Manejar checkboxes
      setProductForm((prevForm) => {
        if (checked) {
          // Si el checkbox está marcado, agrega la opción al array
          return {
            ...prevForm,
            catalog: [...prevForm.catalog, name],
          };
        } else {
          // Si el checkbox está desmarcado, filtra la opción del array
          return {
            ...prevForm,
            catalog: prevForm.catalog.filter((option) => option !== name),
          };
        }
      });
    } else {
      // Manejar otros tipos de input
      setProductForm({
        ...productForm,
        [name]: value,
      });
    }
  };

  const handleImputEditChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Manejar checkboxes
      setEditForm((prevForm) => {
        if (checked) {
          // Si el checkbox está marcado, agrega la opción al array
          return {
            ...prevForm,
            catalog: [...prevForm.catalog, name],
          };
        } else {
          // Si el checkbox está desmarcado, filtra la opción del array
          return {
            ...prevForm,
            catalog: prevForm.catalog.filter((option) => option !== name),
          };
        }
      });
    } else {
      // Manejar otros tipos de input
      setEditForm({
        ...editForm,
        [name]: value,
      });
    }
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    editProduct(editForm);
    console.log(productForm);
  };

  const handleEditAndDeploy = (id) => {
    setIsEditClicked(!isEditClicked);
    setIsEditId(id);
    console.log(isEditId);
    console.log(isEditClicked);
  };

  const addProduct = async (product) => {
    try {
      const response = await fetch(`http://localhost:3000/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      console.log("Producto agregado con éxito");
    } catch (error) {
      console.error("Error al agregar el producto:", error.message);
    }
    console.log(`Aca mati${JSON.stringify(product)}`);
  };

  const editProduct = async (product) => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${isEditId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      console.log("Producto editado con éxito");
    } catch (error) {
      console.error("Error aleditar el producto:", error.message);
    }
    console.log(`Aca mati${JSON.stringify(product)}`);
  };

  // const name = useRef();
  // const picture = useRef();
  // const price = useRef();
  // const descrip = useRef();
  const [isCatalogClicked, setIsCatalogClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isSortedUp, setIsSortedUp] = useState(false);
  const [isSortedDown, setIsSortedDown] = useState(false);
  const [isEditId, setIsEditId] = useState("");
  const [editProductContent, setEditProductContent] = useState("");

  const [isPlusProductClicked, setIsPlusProductClicked] = useState(false);

  const { catalogName, setCatalogName, isApiQuery, setIdDelete } =
    useContext(UserContext);

  const sortedProducts = isSortedDown
    ? [...isApiQuery].sort((a, b) => a.price - b.price)
    : isSortedUp
    ? [...isApiQuery].sort((a, b) => b.price - a.price)
    : isApiQuery;

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
  function handleDelete(id) {
    setIdDelete(id);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(productForm);
    console.log(productForm);
  };

  return (
    <main className="main-container-admin">
      <section className="products-order-container">
        <div className="products-paragraph-plus-container">
          <div className="product-paragraph-plus">
            <p>Productos </p>
            <button
              onClick={() => setIsPlusProductClicked(!isPlusProductClicked)}
              className="button-plus-icon"
            >
              <PlusIcon></PlusIcon>
            </button>
          </div>
          <article
            className={!isPlusProductClicked ? "hidden" : "form-plus-container"}
          >
            <button
              onClick={() => setIsPlusProductClicked(!isPlusProductClicked)}
              className="close-form-icon"
            >
              X
            </button>
            <section className="form_products">
              <div className="formulary_prods">
                <form
                  encType="multipart/form-data"
                  className="form-products-admin"
                  onSubmit={handleSubmit}
                >
                  <div className="prods_form">
                    <label className="labels_prods" htmlFor="name">
                      <img src="" alt="" />
                      Name:
                    </label>
                    <input
                      placeholder="Ejemplo: Affogato..."
                      className="inputs_prods inputs_large"
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={productForm.name}
                      onChange={handleImputChange}
                    />

                    <label className="labels_prods" htmlFor="picture">
                      Picture:
                    </label>
                    <input
                      placeholder="Ejemplo: https://i.pinimg.com..."
                      className="inputs_prods inputs_large"
                      type="text"
                      id="picture"
                      name="picture"
                      required
                      value={productForm.picture}
                      onChange={handleImputChange}
                    />

                    <label className="labels_prods">Catalog:</label>
                    <div>
                      {[
                        "Comida",
                        "Bebida fría",
                        "Bebida caliente",
                        "Tazas",
                        "Cafeteras",
                        "Cafés molidos",
                        "Combos",
                        "Cápsulas",
                      ].map((option) => (
                        <div key={option}>
                          <input
                            type="checkbox"
                            id={option}
                            name={option}
                            checked={productForm.catalog.includes(option)}
                            onChange={handleImputChange}
                          />
                          <label htmlFor={option}>{option}</label>
                        </div>
                      ))}
                    </div>

                    <label className="labels_prods" htmlFor="price">
                      Price:
                    </label>
                    <input
                      placeholder="Ejemplo: $1900"
                      className="inputs_prods inputs_large"
                      type="text"
                      id="price"
                      name="price"
                      required
                      value={productForm.price}
                      onChange={handleImputChange}
                    />

                    <label className="labels_prods" htmlFor="descript">
                      Description:
                    </label>
                    <textarea
                      placeholder="Una explosión de sabores..."
                      className="inputs_prods"
                      type="text"
                      id="descript"
                      name="descript"
                      rows="6"
                      cols="30"
                      required
                      value={productForm.descript}
                      onChange={handleImputChange}
                    />
                  </div>

                  <div className="button">
                    <button className="btn_prod" type="submit">
                      ENVIAR
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </article>
          <article className="products-container">
            {sortedProducts.map(({ name, id }) => {
              return (
                <span className="product-admin">
                  <p>{name}</p>
                  <button onClick={() => handleDelete(id)}>
                    <TrashIcon></TrashIcon>
                  </button>
                  <button onClick={() => handleEditAndDeploy(id)}>
                    <Pencil></Pencil>
                  </button>
                </span>
              );
            })}
            <article
              className={!isEditClicked ? "hidden" : "form-plus-container"}
            >
              <button
                onClick={() => setIsEditClicked(!isEditClicked)}
                className="close-form-icon"
              >
                X
              </button>
              <section className="form_products">
                <div className="formulary_prods">
                  <form
                    encType="multipart/form-data"
                    className="form-products-admin"
                    onSubmit={handleSubmitEdit}
                  >
                    <div className="prods_form">
                      <label className="labels_prods" htmlFor="name">
                        Name:
                      </label>
                      <input
                        placeholder="Ejemplo: Affogato..."
                        className="inputs_prods inputs_large"
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={editForm.name}
                        onChange={handleImputEditChange}
                      />

                      <label className="labels_prods" htmlFor="picture">
                        Picture:
                      </label>
                      <input
                        placeholder="Ejemplo: https://i.pinimg.com..."
                        className="inputs_prods inputs_large"
                        type="text"
                        id="picture"
                        name="picture"
                        required
                        value={editForm.picture}
                        onChange={handleImputEditChange}
                      />

                      <label className="labels_prods">Catalog:</label>
                      <div>
                        {[
                          "Comida",
                          "Bebida fría",
                          "Bebida caliente",
                          "Tazas",
                          "Cafeteras",
                          "Cafés molidos",
                          "Combos",
                          "Cápsulas",
                        ].map((option) => (
                          <div key={option}>
                            <input
                              type="checkbox"
                              id={option}
                              name={option}
                              checked={editForm.catalog.includes(option)}
                              onChange={handleImputEditChange}
                            />
                            <label htmlFor={option}>{option}</label>
                          </div>
                        ))}
                      </div>

                      <label className="labels_prods" htmlFor="price">
                        Price:
                      </label>
                      <input
                        placeholder="Ejemplo: $1900"
                        className="inputs_prods inputs_large"
                        type="text"
                        id="price"
                        name="price"
                        required
                        value={editForm.price}
                        onChange={handleImputEditChange}
                      />

                      <label className="labels_prods" htmlFor="descript">
                        Description:
                      </label>
                      <textarea
                        placeholder="Una explosión de sabores..."
                        className="inputs_prods"
                        type="text"
                        id="descript"
                        name="descript"
                        rows="6"
                        cols="30"
                        required
                        value={editForm.descript}
                        onChange={handleImputEditChange}
                      />
                    </div>

                    <div className="button">
                      <button className="btn_prod" type="submit">
                        ENVIAR
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </article>
          </article>
        </div>
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

          <aside
            className={!isCatalogClicked ? "hidden" : "list-product-catalog"}
          >
            <ArrowDownAdmin></ArrowDownAdmin>
            <ul>
              <li onClick={() => setCatalogName("")}>Todos los productos</li>
              <li onClick={() => setCatalogName("Comida")}>Comida</li>
              <li onClick={() => setCatalogName("bebida fria")}>Bebida fria</li>
              <li onClick={() => setCatalogName("bebida caliente")}>
                Bebida caliente
              </li>
              <li onClick={() => setCatalogName("combos")}>Combos</li>
              <li onClick={() => setCatalogName("cafes molidos")}>
                Cafes molidos
              </li>
              <li onClick={() => setCatalogName("cafeteras")}>Cafeteras</li>
              <li onClick={() => setCatalogName("tazas")}>Tazas</li>
            </ul>
          </aside>
        </article>
      </section>
      <div className="order-page-product">
        <p className="left-order-page-product">&lt;</p>
        <span className="order-page-selection-item"></span>
        <span className="order-page-selection-item"></span>
        <span className="order-page-selection-item"></span>
        <span className="order-page-selection-item"></span>
        <span className="order-page-selection-item"></span>
        <p className="right-order-page-product">&gt;</p>
      </div>
    </main>
  );
}

export default Admin;
