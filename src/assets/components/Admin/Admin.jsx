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
  const [alternativeName, setAlternativeName] = useState("");
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
    descript: "",
    catalog: [],
    alternativeName: "",
  });

  const handleImputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setProductForm((prevForm) => {
        if (checked) {
          return {
            ...prevForm,
            catalog: [...prevForm.catalog, name],
          };
        } else {
          return {
            ...prevForm,
            catalog: prevForm.catalog.filter((option) => option !== name),
          };
        }
      });
    } else {
      setProductForm({
        ...productForm,
        [name]: value,
      });
    }
  };

  const handleImputEditChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setEditForm((prevForm) => {
        if (checked) {
          return {
            ...prevForm,
            catalog: [...prevForm.catalog, name],
          };
        } else {
          return {
            ...prevForm,
            catalog: prevForm.catalog.filter((option) => option !== name),
          };
        }
      });
    } else {
      setEditForm({
        ...editForm,
        [name]: value,
        alternativeName,
      });
    }
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    editProduct(editForm);
    console.log(productForm);
  };

  const handleEditAndDeploy = (id, name) => {
    setAlternativeName(name);
    console.log(name);
    setIsEditClicked(!isEditClicked);
    setAlternativeName(name);
    setIsEditId(id);
    console.log(isEditId);
    console.log(isEditClicked);
  };

  const addProduct = async (product) => {
    console.log(`soy ${catalogName}`);
    try {
      const response = await fetch(`http://localhost:3000/products`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
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
  const token = localStorage.getItem("token");
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

  const [isCatalogClicked, setIsCatalogClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isSortedUp, setIsSortedUp] = useState(false);
  const [isSortedDown, setIsSortedDown] = useState(false);
  const [isEditId, setIsEditId] = useState("");

  const [editProductContent, setEditProductContent] = useState("");

  const [isPlusProductClicked, setIsPlusProductClicked] = useState(false);

  const { catalogName, setCatalogName, isApiQuery, setIdDelete, apiSorted } =
    useContext(UserContext);

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
      {isPlusProductClicked ? (
        <article className="formularito">
          <button
            onClick={() => setIsPlusProductClicked(false)}
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
      ) : null}
      {isEditClicked ? (
        <article>
          <button
            onClick={() => setIsEditClicked(false)}
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
      ) : null}
      <section
        className={
          isPlusProductClicked || isEditClicked
            ? "hidden"
            : "products-order-container"
        }
      >
        <div className="products-paragraph-plus-container">
          <div className="product-paragraph-plus">
            <p>
              Productos:{" "}
              {catalogName.length ? (
                <strong className="admin-color-strong">{catalogName}</strong>
              ) : (
                <strong className="admin-color-strong"> todos</strong>
              )}{" "}
            </p>
            <button
              onClick={() => setIsPlusProductClicked(!isPlusProductClicked)}
              className="button-plus-icon"
            >
              <PlusIcon></PlusIcon>
            </button>
          </div>
          <article className="products-container">
            {apiSorted.map(({ name, id }) => {
              return (
                <span key={id} className="product-admin">
                  <p>{name}</p>
                  <button onClick={() => handleDelete(id)}>
                    <TrashIcon></TrashIcon>
                  </button>
                  <button onClick={() => handleEditAndDeploy(id, name)}>
                    <Pencil></Pencil>
                  </button>
                </span>
              );
            })}
          </article>
        </div>
        <FilterAndOrder api={isApiQuery} isActive={true}></FilterAndOrder>
      </section>
      <div
        className={
          isPlusProductClicked || isEditClicked
            ? "hidden"
            : `order-page-product`
        }
      ></div>
    </main>
  );
}

export default Admin;
