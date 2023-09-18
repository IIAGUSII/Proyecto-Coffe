import { createContext, useEffect, useState } from "react";
import { render } from "react-dom";
export const UserContext = createContext();
const url = "https://64fa6148cb9c00518f79e584.mockapi.io/api/products";
export const UserContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApiData(data));
    console.log("render");
  }, []);

  const [isHambur, setIsHambur] = useState(false);
  const contextValue = {
    apiData,
    isHambur,
    setIsHambur,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
