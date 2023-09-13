import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
const url = "https://64fa6148cb9c00518f79e584.mockapi.io/api/products";
export const UserContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);
  return(
    <UserContext.Provider value={apiData}>
        {children}
    </UserContext.Provider>
  ) 
};


