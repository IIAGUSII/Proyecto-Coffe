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
import FilterAndOrder from "../FilterAndOrder/FilterAndOrder.jsx";
import FormAdd from "../formsAdmin/FormAdd.jsx";
import FormEdit from "../formsAdmin/FormEdit.jsx";

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

  const { catalogName, setCatalogName, isApiQuery, setIdDelete, apiSorted } =
    useContext(UserContext);

  // const sortedProducts = isSortedDown
  //   ? [...isApiQuery].sort((a, b) => a.price - b.price)
  //   : isSortedUp
  //   ? [...isApiQuery].sort((a, b) => b.price - a.price)
  //   : isApiQuery;

  // const sortAscending = () => {
  //   setIsSortedUp(true);
  //   setIsSortedDown(false);
  // };

  // // Función para ordenar los productos de mayor a menor precio
  // const sortDescending = () => {
  //   setIsSortedUp(false);
  //   setIsSortedDown(true);
  // };

  // // Función para restablecer el ordenamiento
  // const resetAllSort = () => {
  //   setIsSortedUp(false);
  //   setIsSortedDown(false);
  // };
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
            <FormAdd
              handleSubmit={handleSubmit}
              productForm={productForm}
              handleImputChange={handleImputChange}
            ></FormAdd>
          </article>
          <article className="products-container">
            {apiSorted.map(({ name, id }) => {
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
              <FormEdit
                handleSubmitEdit={handleSubmitEdit}
                editForm={editForm}
                handleImputEditChange={handleImputEditChange}
              ></FormEdit>
            </article>
          </article>
        </div>
        <FilterAndOrder api={isApiQuery}></FilterAndOrder>
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
