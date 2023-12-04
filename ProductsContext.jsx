import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
const url = "http://localhost:3000/products";
export const UserContextProvider = ({ children }) => {
  const [catalogName, setCatalogName] = useState("");

  const [idDelete, setIdDelete] = useState("");
  const [apiSorted, setApiSorted] = useState([]);
  const urlQuery = `http://localhost:3000/products?catalog=${catalogName}`;
  const [isApiQuery, setIsApiQuery] = useState([]);

  // const urlQueryFood = `http://localhost:3000/products?catalog=${catalogName}`;
  // const urlDeleteParams = `http://localhost:3000/products/${idDelete}`;
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(urlQuery)
      .then((res) => res.json())
      .then((data) => setIsApiQuery(data));
  }, [catalogName, idDelete]);

  const eliminarProducto = async () => {
    if (!idDelete) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/products/${idDelete}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar los datos");
      }

      console.log("Datos eliminados con éxito");

      // Después de la eliminación exitosa, actualiza el estado
      fetch(urlQuery)
        .then((res) => res.json())
        .then((data) => setIsApiQuery(data))
        .catch((error) => console.error("Error fetching data:", error));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // useEffect(() => {
  //   addProduct();
  // }, [productPost]);

  useEffect(() => {
    eliminarProducto(); // No es necesario pasar idDelete aquí
  }, [idDelete]);

  const [isActiveHambur, setIsActiveHambur] = useState(false);

  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);

  const [searchText, setSearchText] = useState("");
  const [isSortBottom, setIsSortBottom] = useState(false);
  const [isSortUp, setIsSortUp] = useState(false);

  const handleChangeText = (e) => {
    setSearchText(e.target.value);
  };

  const contextValue = {
    apiData,
    handleChangeText,
    searchText,
    isSortBottom,
    setIsSortBottom,
    isSortUp,
    setIsSortUp,
    isActiveHambur,
    setIsActiveHambur,
    catalogName,
    setCatalogName,
    isApiQuery,
    idDelete,
    apiSorted,
    setApiSorted,
    setIdDelete,
    eliminarProducto,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
