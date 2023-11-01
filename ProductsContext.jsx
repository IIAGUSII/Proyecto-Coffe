import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
const url = "https://64fa6148cb9c00518f79e584.mockapi.io/api/products";
export const UserContextProvider = ({ children }) => {
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
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
